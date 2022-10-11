import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Stack, Text, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export const Menu = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password1, setPassword1] = React.useState('');
    return (
        <Box bgColor={'white'} height={'full'}>
            <Box /* alignItems={'center'} */ ml={10}>

                <Text color={'dark.100'} bold fontSize="2xl">
                    ¿Hambriento Jose?
                </Text>
            </Box>
            <Box /* alignItems={'center'} */ml={10}>

                <Text color={'dark.500'} bold fontSize="sm">
                    LO QUE A TU PALADAR LE {' '}
                    <Text color={'orange.500'}>
                    ENCANTA
                    </Text>
                </Text>
            </Box>
            <Stack direction={'column'} paddingTop={8}>
                <Center>
                    <Button variant="unstyled" >
                    <Box bg="orange.500" alignItems="center"
                                p="2" rounded="md" width={'300'}>
                            <Box bg="orange.600" alignItems="center"
                                p="2" rounded="xl" width={'150'}>
                                <Icon as={<MaterialIcons name="keyboard" />} size={10} color="white" marginTop={2} marginBottom={2} />
                            </Box>
                            <Text color={'white'} fontSize={'3xl'}>
                                Almuerzo
                            </Text>
                        </Box>
                    </Button>
                </Center>
                <Center>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Platos Especiales')}>
                    <Box bg="yellow.400" alignItems="center"
                                p="2" rounded="md" width={'300'}>
                            <Box bg="yellow.600" alignItems="center"
                                p="2" rounded="xl" width={'150'}>
                                <Icon as={<MaterialIcons name="keyboard" />} size={10} color="white" marginTop={2} marginBottom={2} />
                            </Box>
                            <Text color={'black'} fontSize={'3xl'}>
                                Platos Especiales
                            </Text>
                        </Box>
                    </Button>
                    
                </Center>
                <Center>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Extras')}>
                    <Box bg="primary.800" alignItems="center"
                                p="2" rounded="md" width={'300'}>
                            <Box bg="primary.900" alignItems="center"
                                p="2" rounded="xl" width={'150'}>
                                <Icon as={<MaterialIcons name="keyboard" />} size={10} color="white" marginTop={2} marginBottom={2} />
                            </Box>
                            <Text color={'white'} fontSize={'3xl'}>
                                Extras
                            </Text>
                        </Box>
                    </Button>
                    
                </Center>
            </Stack>
        </Box>
    );
};
