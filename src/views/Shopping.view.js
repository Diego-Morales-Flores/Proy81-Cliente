import React, { useEffect } from 'react';

import { Box, Button, Image, Center, Text, HStack, AspectRatio, VStack, DeleteIcon, ScrollView, ChevronLeftIcon } from "native-base";
import { DEFAULT, LUNCH } from '../constants/images';

import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IMAGE_FONT_1 } from '../constants/images';

export const Shopping = ({ navigation, dishesState, setDishesState, extrasState, setExtrasState, lunchesState, setLunchesState }) => {

    const deleteDish = (id) => {
        let dishes = []
        dishesState.forEach(item => {
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
        setDishesState(dishes)
    }
    const deleteExtras = (id) => {
        let dishes = []
        extrasState.forEach(item => {
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
        setExtrasState(dishes)
    }
    const deleteLunch = (id) => {
        let Lunches = []
        lunchesState.forEach(item => {
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
        setLunchesState(Lunches)
    }
    useEffect(()=>{
        console.log(dishesState, extrasState, lunchesState);
    },[dishesState, extrasState, lunchesState])
    useEffect(()=>console.log("Renderiza Shopping"),[])
    return (
        <ImageBackground source={IMAGE_FONT_1} resizeMode="cover" style={styles_0.image}>
            <View style={styles_0.container} >
                <View style={styles_0.header}>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles_0.footer, {
                        backgroundColor: 'rgba(255, 255, 255, 1)'
                    }]}
                >
                    <Box>
                    <ScrollView w={["100%", "100%"]} h="94%">
                        {
                            (dishesState.length === 0 && extrasState.length === 0) ? <Center><Text color={'black'} bold>No hay ningun producto en el carrito</Text></Center> : null
                        }
                        <VStack flex="1" space={1}>
                            {
                                dishesState.map(
                                    item => <Center flex={1} key={item.id}>
                                        <Box width={'100%'} height={'116px'} rounded="2xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
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
                                    </Center>
                                )
                            }
                            {
                                extrasState.map(
                                    item => <Center flex={1} key={item.id}>
                                        <Box width={'100%'} height={'116px'} rounded="2xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
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
                                    </Center>
                                )
                            }
                            {
                                lunchesState.map(
                                    item => <Center key={item.lunch} flex={1}><Box width={'100%'} height={'116px'} rounded="2xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
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
                                    </Center>
                                )
                            }
                        </VStack>
                    </ScrollView>
                    <HStack width={'100%'} space={2} pt={2}>
                        <Button onPress={() => navigation.navigate('Menu')}><ChevronLeftIcon /></Button>
                        <Button width={'50%'} disabled><Text bold>Realizar compra</Text></Button>
                    </HStack>

                </Box >
                </Animatable.View>
            </View>
        </ImageBackground>
    );
};

const styles_0 = StyleSheet.create({
    input: {
        /* flex: 1, */
        margin: 2,
        marginTop:10
      },
    container: {
        flexDirection: 'row',
      },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover',
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
        /* flex: 1, */
        /* justifyContent: 'flex-end', */
        paddingHorizontal: 0,
        paddingBottom: 15,

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
