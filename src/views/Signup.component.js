import React from 'react';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Stack, Text, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export const SignUp = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <LayoutTemplante
            
            component={() =>
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
                        <FormControl>
                                <FormControl.Label>
                                <Text fontSize="xs" bold color={'dark.300'}>NOMBRE</Text>
                                </FormControl.Label>
                                <Input variant="underlined" borderBottomColor={'dark.700'} color={'black'} value={name} onChangeText={text => setName(text)} />
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Try different from previous passwords.
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
                    <Button marginTop={10}><Text bold>Crear una cuenta</Text></Button>

                </Box>
            }
        />
    );
};
