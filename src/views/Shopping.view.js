import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Image, Center, FormControl, Icon, Input, Stack, Text, WarningOutlineIcon, HStack, AspectRatio, VStack, DeleteIcon, ScrollView, ChevronLeftIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { LayoutTemplante2 } from '../components/Layout2.templante.component';
import useStoreDishes from '../hooks/useStoreDishes';
import { DEFAULT, LUNCH } from '../constants/images';
import useStoreExtras from '../hooks/useStoreExtras';
import useStoreLunch from '../hooks/useStoreLunch';
export const Shopping = ({ navigation }) => {
    const storeDishes = useStoreDishes()
    const storeLunch = useStoreLunch()
    const storeExtras = useStoreExtras()

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
    const deleteExtras = (id) => {
        let dishes = []
        storeExtras.storeExtras.forEach(item => {
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
        storeExtras.setStoreExtras(dishes)
    }
    const deleteLunch = (id) => {
        let Lunches = []
        storeLunch.storeLunch.forEach(item => {
            if (item.lunch === id) {
                if (item.amount > 1)
                    Lunches.push({
                        ...item,
                        amount: item.amount - 1
                    })
            }
            else {
                Lunches.push({
                    ...item
                })
            }
        })
        storeLunch.setStoreLunch(Lunches)
    }
    return (
        <LayoutTemplante2
            component={() =>
                <Box>
                    <ScrollView w={["100%", "100%"]} h="95%">
                        {
                            (storeDishes.storeDishes.length === 0 && storeExtras.storeExtras.length === 0) ? <Center><Text color={'black'} bold>No hay ningun producto en el carrito</Text></Center> : null
                        }
                        <VStack flex="1" space={1}>
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
                        </VStack>
                        <VStack flex="1" space={1}>
                            {
                                storeExtras.storeExtras.map(
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

                                            <VStack pt={9} ><Button onPress={() => deleteExtras(item.id)}>
                                                <DeleteIcon color='white' />
                                            </Button>
                                            </VStack>


                                        </HStack>
                                    </Box>
                                )
                            }
                        </VStack>
                        <VStack flex="1" space={1}>
                            {
                                storeLunch.storeLunch.map(
                                    item => <Box width={'100%'} height={'116px'} rounded="2xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1" key={item.lunch}>
                                        <HStack>
                                            <Box p={2} width={'150px'} /* height={'150px'} */ >
                                                <AspectRatio w="100%" >
                                                    <Image rounded="2xl" source={LUNCH ? LUNCH : DEFAULT} alt="image" height={'auto'} width={'100%'} />
                                                </AspectRatio>
                                            </Box>
                                            <VStack pr={2} width='150'>
                                                <Text color={'dark.100'} fontSize={'xl'} bold>{item.lunch}</Text>
                                                <Text color={'amber.600'}>Costo Total: {15 * item.amount} Bs</Text>
                                                <Text color={'amber.600'}>Cantidad: {item.amount}</Text>
                                            </VStack>

                                            <VStack pt={9} ><Button onPress={() => deleteLunch(item.lunch)}>
                                                <DeleteIcon color='white' />
                                            </Button>
                                            </VStack>


                                        </HStack>
                                    </Box>
                                )
                            }
                        </VStack>
                    </ScrollView>
                    <HStack width={'100%'} space={2}>
                    <Button onPress={() => navigation.navigate('Menu')}><ChevronLeftIcon /></Button>
                    <Button width={'50%'} disabled><Text bold>Realizar compra</Text></Button>
                    </HStack>

                </Box>
            }
        />
    );
};
