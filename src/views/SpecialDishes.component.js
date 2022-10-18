import React, { useEffect } from 'react';

import { Box, Button, Center, Text, VStack, ScrollView, HStack, ChevronLeftIcon } from "native-base";
import { SPECIAL_DISHES } from '../constants/images';
import { CardButton } from '../components/CardButton.component';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import useTrolley from "../hooks/useTrolley";
import { SPECIALS } from '../constants/datos';


export const SpecialDishes = ({ navigation }) => {
    const { trolley, setTrolley } = useTrolley();
    const agregarDishes = (id) => {
        let findDishes = trolley.dishes.find(item => item.id === id)
        if (findDishes) {
            let dishes = []
            let total = trolley.total
            trolley.dishes.forEach(item => {
                if (item.id === id) {
                    dishes.push({
                        ...item,
                        amount: item.amount + 1
                    })
                    total = total + item.price
                }
                else {
                    dishes.push({
                        ...item
                    })
                }
            })
            setTrolley({
                extras: trolley.extras,
                lunches: trolley.lunches,
                dishes,
                total
            })
        }
        else {
            let busqueda = SPECIALS.find(item => item.id === id)
            let auxiliar = trolley.dishes
            let total = trolley.total + busqueda.price

            auxiliar.push({
                ...busqueda,
                amount: 1
            })
            setTrolley({
                extras: trolley.extras,
                lunches: trolley.lunches,
                dishes: auxiliar,
                total
            })
        }
    }
    //useEffect(() => console.log(trolley), [trolley])
    useEffect(() => console.log("Renderiza SpecialDishes"), [])
    return (
        <ImageBackground source={SPECIAL_DISHES} resizeMode="cover" style={styles.image}>
            <View style={styles.container} >
                <View style={styles.header}>
                    <VStack flex="1" pt='10'>
                        <HStack space={10
                        } alignContent={'flex-end'} width='100%'>
                            <Button onPress={() => navigation.navigate('Menu')}><ChevronLeftIcon /></Button>

                            <Button onPress={() => navigation.navigate('Carrito')} >{`Carrito, total ${trolley.total} Bs`}</Button>
                        </HStack>
                        <Center flex={1} >
                            <Text bold fontSize={'3xl'} color={'white'}>
                                Platos Especiales
                            </Text>
                        </Center>
                    </VStack>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: 'rgba(255, 255, 255, 1)'
                    }]}
                >
                    <Box>
                        <ScrollView w={["100%", "100%"]} h="100%">
                            <VStack flex="1" space={1}>
                                {
                                    SPECIALS.map(item =>
                                        <Center flex={1} key={item.id}>
                                            <CardButton name={item.name} departament={item.departament} price={item.price} imagen={item.imagen}
                                                onAction={() => agregarDishes(item.id)}
                                            />

                                        </Center>
                                    )
                                }

                            </VStack>
                        </ScrollView>;
                    </Box>
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
