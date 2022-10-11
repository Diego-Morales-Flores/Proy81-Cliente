import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Image, Center, FormControl, Icon, Input, Stack, Text, WarningOutlineIcon, HStack, AspectRatio, VStack, DeleteIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { LayoutTemplante2 } from '../components/Layout2.templante.component';
import useStoreDishes from '../hooks/useStoreDishes';
import { DEFAULT } from '../constants/images';


export const Shopping = ({ navigation }) => {
    const storeDishes = useStoreDishes()

    const deleteDish = (id) => {

        let dishes = []
        storeDishes.storeDishes.forEach(item => {
            if (item.id === id) {
                if (item.amount > 1)
                    dishes.push({
                        ...item,
                        amount: item.amount - 1
                    })
            }
            else {
                dishes.push({
                    ...item
                })
            }
        })
        storeDishes.setStoreDishes(dishes)
    }

    return (
        <LayoutTemplante2

            component={() =>
                <Box>
                    {
                        storeDishes.storeDishes.map(
                            item => <Box width={'100%'} height={'116px'} rounded="2xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1" key={item.id}>
                                <HStack>
                                    <Box p={2} width={'150px'} /* height={'150px'} */ >
                                        <AspectRatio w="100%" >
                                            <Image rounded="2xl" source={item.imagen ? item.imagen : DEFAULT} alt="image" height={'auto'} width={'100%'} />
                                        </AspectRatio>
                                    </Box>
                                    <VStack pr={2} width='150'>
                                        <Text color={'dark.100'} fontSize={'2xl'} bold>{item.name}</Text>
                                        <Text color={'amber.600'}>Costo Total: {item.price * item.amount} Bs</Text>
                                        <Text color={'amber.600'}>Cantidad: {item.amount}</Text>
                                    </VStack>

                                    <VStack pt={9} ><Button onPress={() => deleteDish(item.id)}>
                                    <DeleteIcon color='white' />
                                    </Button>
                                    </VStack>


                                </HStack>
                            </Box>
                        )
                    }

                    <Button marginTop={50}><Text bold>Realizar compra</Text></Button>

                </Box>
            }
        />
    );
};
