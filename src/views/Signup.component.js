import React, { useEffect } from 'react';

import { Box, Button, Center, FormControl, Icon, Input, ScrollView, Stack, Text, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IMAGE_FONT_1 } from '../constants/images';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { REACT_APP_BACKEND_URL } from '../config/constants';
const validationSchema = yup.object({
    name: yup
        .string('Ingrese el nombre')
        .required('Es necesario que ingrese el nombre'),
    lastname: yup
        .string('Ingrese el apellido paterno')
        .required('Es necesario que ingrese el apellido'),
    email: yup
        .string('Ingrese el correo electrónico')
        .email('Ingrese un correo electrónico válido')
        .required('Es necesario el correo electrónico'),
    password: yup.string()
        .min(6, 'La contraseña debe tener al menos seis caracteres!')
        .matches(/^[aA-zZ\d]+$/, 'Solo letras y números en el nombreNo se admite caracteres especiales')
        .required('¡Es necesario la contraseña!'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref("password")], 'Las contraseñas no son iguales')
        .matches(/^[aA-zZ\d]+$/, 'Solo letras y números en el nombre, no se admite caracteres especiales')
        .required('¡Es necesario la confirmación de la contraseña!'),
});

export const SignUp = ({ navigation }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            onSubmit();
        }
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    useEffect(() => console.log("Renderiza Signup"), [])
    const onSubmit = async () => {
        console.log(formik.values);
        setLoading(true);

        axios.post(REACT_APP_BACKEND_URL + 'auth/signup', { ...formik.values })
            .then((response) => {
                if (response.status === 304) {
                    console.error('El correo electrónico ya fue registrado');
                }
                else
                    if (response.status === 201) {
                        console.log(response.data);
                        navigation.navigate('Iniciar Sesión')
                    }
            })
            .catch((e) => {
                if (e && e.response && e.response.status === 304)
                    console.error('El correo electrónico ya fue registrado');
                else {
                    console.error("Error de conexion")
                }
            })
            .finally(() => setLoading(false))
    }

    return (
        <ImageBackground source={IMAGE_FONT_1} resizeMode="cover" style={styles.image}>
            <View style={styles.container} >
                <View style={styles.header}>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: 'rgba(255, 255, 255, 1)'
                    }]}
                >
                    <ScrollView w={["100%", "100%"]} h="100%">
                        <Box>
                            <Text fontSize="xl" bold color={'black'}>Crear una cuenta</Text>
                            <Text color={'text.400'} ></Text>
                            <Stack direction="row" mb="2.5" mt="4" space={4} width={'full'}>
                                <Center width={'15%'}>
                                    <Box bg="primary.50" alignItems="center"
                                        p="2" rounded="xl">
                                        <Icon as={<MaterialIcons name="person" />} size={6} color="primary.800" marginTop={2} marginBottom={2} />
                                    </Box>
                                </Center>
                                <Center width={'80%'} >
                                    <FormControl isInvalid={formik.touched.name && Boolean(formik.errors.name)} >
                                        <FormControl.Label>
                                            <Text fontSize="xs" bold color={'dark.300'}>NOMBRE</Text>
                                        </FormControl.Label>
                                        <Input variant="underlined" borderBottomColor={'dark.700'} color={'black'} value={formik.values.name} onChangeText={formik.handleChange('name')}
                                            onBlur={() => formik.setFieldTouched('name')} />
                                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                            {formik.touched.name && formik.errors.name}
                                        </FormControl.ErrorMessage>

                                    </FormControl>
                                </Center>
                            </Stack>
                            <Stack direction="row" mb="2.5" mt="4" space={4} width={'full'}>
                                <Center width={'15%'}>
                                    <Box bg="primary.50" alignItems="center"
                                        p="2" rounded="xl">
                                        <Icon as={<MaterialIcons name="person" />} size={6} color="primary.800" marginTop={2} marginBottom={2} />
                                    </Box>
                                </Center>
                                <Center width={'80%'} >
                                    <FormControl isInvalid={formik.touched.lastname && Boolean(formik.errors.lastname)} >
                                        <FormControl.Label>
                                            <Text fontSize="xs" bold color={'dark.300'}>APELLIDOS</Text>
                                        </FormControl.Label>
                                        <Input variant="underlined" borderBottomColor={'dark.700'} color={'black'} value={formik.values.lastname} onChangeText={formik.handleChange('lastname')}
                                            onBlur={() => formik.setFieldTouched('lastname')} />
                                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                            {formik.touched.lastname && formik.errors.lastname}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                </Center>
                            </Stack>
                            <Stack direction="row" mb="2.5" mt="4" space={4} width={'full'}>
                                <Center width={'15%'}>
                                    <Box bg="primary.50" alignItems="center"
                                        p="2" rounded="xl">
                                        <Icon as={<MaterialIcons name="email" />} size={6} color="primary.800" marginTop={2} marginBottom={2} />
                                    </Box>
                                </Center>
                                <Center width={'80%'} >
                                    <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)} >
                                        <FormControl.Label>
                                            <Text fontSize="xs" bold color={'dark.300'}>CORREO ELECTRÓNICO</Text>
                                        </FormControl.Label>
                                        <Input variant="underlined" borderBottomColor={'dark.700'} color={'black'} value={formik.values.email} onChangeText={formik.handleChange('email')}
                                            onBlur={() => formik.setFieldTouched('email')} />
                                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                            {formik.touched.email && formik.errors.email}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                </Center>
                            </Stack>
                            <Stack direction="row" mb="2.5" mt="1.5" space={4}>
                                <Center width={'15%'}>
                                    <Box bg="primary.50" alignItems="center"
                                        p="2" rounded="xl">
                                        <Icon as={<MaterialIcons name="keyboard" />} size={6} color="primary.800" marginTop={2} marginBottom={2} />
                                    </Box>
                                </Center>
                                <Center width={'80%'}>
                                    <FormControl isInvalid={formik.touched.password && Boolean(formik.errors.password)}>
                                        <FormControl.Label><Text fontSize="xs" bold color={'dark.300'}>CONSTRASEÑA</Text></FormControl.Label>
                                        <Input variant="underlined" placeholder="" color={'black'} type={showPassword ? "text" : "password"}
                                            InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                                                size={4} mr="2" color="muted.400" /></Pressable>}
                                            borderBottomColor={'dark.700'}
                                            value={formik.values.password}
                                            onChangeText={formik.handleChange('password')}
                                        />
                                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                            {formik.touched.password && formik.errors.password}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                </Center>
                            </Stack>
                            <Stack direction="row" mb="2.5" mt="1.5" space={4}>
                                <Center width={'15%'}>
                                    <Box bg="primary.50" alignItems="center"
                                        p="2" rounded="xl">
                                        <Icon as={<MaterialIcons name="keyboard" />} size={6} color="primary.800" marginTop={2} marginBottom={2} />
                                    </Box>
                                </Center>
                                <Center width={'80%'}>
                                    <FormControl isInvalid={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}>
                                        <FormControl.Label><Text fontSize="xs" bold color={'dark.300'}>CONSTRASEÑA</Text></FormControl.Label>
                                        <Input variant="underlined" placeholder="" color={'black'} type={showPassword ? "text" : "password"}
                                            InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                                                size={4} mr="2" color="muted.400" /></Pressable>}
                                            borderBottomColor={'dark.700'}
                                            value={formik.values.passwordConfirmation}
                                            onChangeText={formik.handleChange('passwordConfirmation')}
                                        />
                                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                </Center>
                            </Stack>
                            <Button marginTop={10} disabled={loading} onPress={formik.handleSubmit}><Text bold>Crear una cuenta</Text></Button>

                        </Box>
                    </ScrollView>
                </Animatable.View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        /* backgroundColor: '#009387' */
    },
    header: {
        /* flex: 1,
        justifyContent: 'flex-end', */
        paddingHorizontal: 0,
        paddingBottom: 50,

    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
