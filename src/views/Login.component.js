import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Stack, Text, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export const Login = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password1, setPassword1] = React.useState('');
    return (
        <LayoutTemplante
            
            component={() =>
                <Box>
                    <Text fontSize="xl" bold color={'black'}>¡Bienvenidos!</Text>
                    <Text color={'text.400'} >Inicia sesión para continuar</Text>
                    <Stack direction="row" mb="2.5" mt="4" space={4} width={'full'}>
                        <Center width={'15%'}>
                            <Box bg="primary.50" alignItems="center"
                                p="2" rounded="xl">
                                <Icon as={<MaterialIcons name="email" />} size={6} color="primary.800" marginTop={2} marginBottom={2} />
                            </Box>
                        </Center>
                        <Center width={'80%'} >
                        <FormControl>
                                <FormControl.Label>
                                <Text fontSize="xs" bold color={'dark.300'}>CORREO ELECTRÓNICO</Text>
                                </FormControl.Label>
                                <Input variant="underlined" borderBottomColor={'dark.700'} color={'black'} value={email} onChangeText={text => setEmail(text)} />
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Try different from previous passwords.
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
                            <FormControl>
                                <FormControl.Label><Text fontSize="xs" bold color={'dark.300'}>CONSTRASEÑA</Text></FormControl.Label>
                                <Input variant="underlined" placeholder="" color={'black'} type={showPassword ? "text" : "password"}
                                    InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />}
                                        size={4} mr="2" color="muted.400" /></Pressable>}
                                    borderBottomColor={'dark.700'}
                                    value={password} onChangeText={setPassword}
                                    onch
                                />
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Try different from previous passwords.
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </Center>

                        

                    </Stack>
                    <Button><Text bold>Iniciar sesión</Text></Button>
                    <Box alignItems={'center'}>
                    <Text color={'dark.500'} marginTop={6}>
                        ¿Olvidaste tu contraseña?
                    </Text>

                    <Text color={'dark.500'} marginTop={4}>
                        ¿Nuevo usuario? {' '}
                        <Text  color={'orange.400'} bold>
                        Registrate
                    </Text>
                    </Text>




                    </Box>
                </Box>
            }
        />
    );
};

const styles = StyleSheet.create({
    input: {
        /* flex: 1, */
        margin: 2,
        marginTop: 10
    },
    container: {
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    icon: {
        flex: 1,
        width: 32,
        height: 32,
    },
    container: {
        flex: 1,
        /* backgroundColor: '#009387' */
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
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
