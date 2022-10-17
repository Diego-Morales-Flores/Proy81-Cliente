import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Box, Button, Center, Input, Text, VStack, ScrollView, HStack, ChevronLeftIcon, Radio } from "native-base";
import { LUNCH } from '../constants/images';
import { View, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import useTrolley from "../hooks/useTrolley";
export const Lunch = ({ navigation }) => {
    const [lunch, setLunch] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const { trolley, setTrolley } = useTrolley();
    const agregarDishes = (id) => {
        let find = trolley.lunches.find(item => item.id === id)
        if (find) {
            let Lunches = []
            let total = trolley.total
            trolley.lunches.forEach(item => {
                if (item.id === id) {
                    Lunches.push({
                        ...item,
                        amount: item.amount + Number(amount)
                    })
                    total = total + item.price
                }
                else {
                    Lunches.push({
                        ...item
                    })
                }
            })
            setTrolley({
                extras:trolley.extras,
                lunches: Lunches,
                dishes: trolley.dishes,
                total
            })
        }
        else {

            let auxiliar = trolley.lunches
            let total = trolley.total + (Number(amount)*15)
            auxiliar.push({
                lunch,
                amount: Number(amount)
            })
            setTrolley({
                extras: trolley.extras,
                lunches: auxiliar,
                dishes: trolley.dishes,
                total
            })
        }
        setLunch('')
        setAmount('')
    }
    useEffect(() => console.log("Renderiza Lunch"), [])
    return (
        <ImageBackground source={LUNCH} resizeMode="cover" style={styles.image}>
            <View style={styles.container} >
                <View style={styles.header}>
                    <VStack flex="1" pt='10'>
                        <HStack space={10
                        } alignContent={'flex-end'} width='100%'>
                            <Button onPress={() => navigation.navigate('Menu')} ><ChevronLeftIcon /></Button>

                            <Button onPress={() => navigation.navigate('Carrito')} >{`Carrito, total ${trolley.total} Bs`}</Button>
                        </HStack>
                        <Center flex={1} >
                            <Text bold color={'white'} fontSize={'3xl'}>
                                Almuerzo
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
                            <VStack flex="1" space={2}>
                                <Text bold style={styles.text_title}>Entrada</Text>
                                <Text bold style={styles.text_secondary}>Ensalada de rabano</Text>
                                <Text bold style={styles.text_title}>Sopa</Text>
                                <Text bold style={styles.text_secondary}>Sopa de Mani</Text>
                                <Text bold style={styles.text_title}>Segundos</Text>
                                <Radio.Group value={lunch} onChange={nextValue => {
                                    setLunch(nextValue);
                                }}>
                                    <VStack flex="1" space={4}>
                                        <Radio value="Albondigas" colorScheme="purple">
                                            <Text style={styles.text_secondary}>Albondigas</Text>
                                        </Radio >
                                        <Radio value="Milanesa de pollo" color={'amber.100'} colorScheme="purple">
                                            <Text style={styles.text_secondary}>Milanesa de pollo</Text>
                                        </Radio >
                                        <Radio value="Asado a la olla" colorScheme="purple">
                                            <Text style={styles.text_secondary}>Asado a la olla</Text>
                                        </Radio >
                                    </VStack>
                                </Radio.Group>
                                <Text bold style={styles.text_title}>Postre</Text>
                                <Text bold style={styles.text_secondary}>Flan de Chocolate</Text>
                                <HStack space={2} pt={10}>
                                    <Input value={amount} keyboardType="numeric" size="xl" placeholder="Cantidad" width={'30%'}
                                        onChangeText={
                                            text => {
                                                setAmount(text)
                                                console.log(amount);
                                            }
                                        } />
                                    <Button disabled={amount === '' || lunch === ''} width={'68%'} onPress={agregarDishes}>{`Total a Pagar: ${amount * 15} Bs`}</Button>
                                </HStack>
                            </VStack>
                        </ScrollView>
                    </Box>
                </Animatable.View>
            </View>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    text_title: {
        color: '#f97316',
        fontSize: 18,
    },
    text_secondary: {
        color: '#a1a1aa',
        fontSize: 16,
    },
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
