import React, { useEffect, useState } from 'react';

import { Box, Button, Image, Center, Text, HStack, AspectRatio, VStack, DeleteIcon, ScrollView, ChevronLeftIcon, FlatList, Spacer } from "native-base";
import { DEFAULT, LUNCH } from '../constants/images';
import useUser from "../hooks/useUser";
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IMAGE_FONT_1 } from '../constants/images';
import useTrolley from "../hooks/useTrolley";
import { EXTRAS, SPECIALS } from '../constants/datos';
import { format } from "date-fns";
export const Invoice = ({ navigation }) => {
    const { user } = useUser();
    const { trolley, setTrolley } = useTrolley();
    
    const terminar = () => {
        
        setTrolley({
            extras: [],
            lunches: [],
            dishes: [],
            total: 0
        })
        navigation.navigate('Menu')
    }

    useEffect(() => console.log("Renderiza Shopping"), [])
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
                    <Text bold fontSize={'md'}>DETALLES DE LA COMPRA</Text>
                    <Box borderBottomWidth="1" _dark={{
                        borderColor: "muted.50"
                    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between">
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="coolGray.800" bold>
                                    {`Nombre: ${user.name} ${user.lastname}`}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" alignSelf="flex-start" bold>
                                {format(Date.now(), 'dd/MM/yyyy hh:mm:ss')}
                            </Text>

                        </HStack>
                        <Spacer />

                    </Box>
                    <Text bold fontSize={'sm'} pt={5}>Productos en la compra:</Text>
                    <Box>
                        <FlatList data={trolley.dishes} renderItem={({
                            item
                        }) => <Box borderBottomWidth="1" _dark={{
                            borderColor: "muted.50"
                        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                                <HStack space={[2, 3]} justifyContent="space-between">
                                    <VStack>
                                        <Text _dark={{
                                            color: "warmGray.50"
                                        }} color="coolGray.800" bold>
                                            {item.name}
                                        </Text>
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }}>
                                            {'Costo c/u: ' + item.price + ' Bs. Cantidad: ' + item.amount}
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                    <Text fontSize="xs" _dark={{
                                        color: "warmGray.50"
                                    }} color="coolGray.800" alignSelf="flex-start" bold>
                                        {`Total: ${item.price * item.amount} Bs`}
                                    </Text>
                                </HStack>
                            </Box>} keyExtractor={item => item.id} />
                        <FlatList data={trolley.extras} renderItem={({
                            item
                        }) => <Box borderBottomWidth="1" _dark={{
                            borderColor: "muted.50"
                        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                                <HStack space={[2, 3]} justifyContent="space-between">
                                    <VStack>
                                        <Text _dark={{
                                            color: "warmGray.50"
                                        }} color="coolGray.800" bold>
                                            {item.name}
                                        </Text>
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }}>
                                            {'Costo c/u: ' + item.price + ' Bs. Cantidad: ' + item.amount}
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                    <Text fontSize="xs" _dark={{
                                        color: "warmGray.50"
                                    }} color="coolGray.800" alignSelf="flex-start" bold>
                                        {`Total: ${item.price * item.amount} Bs`}
                                    </Text>
                                </HStack>
                            </Box>} keyExtractor={item => item.id} />
                        <FlatList data={trolley.lunches} renderItem={({
                            item
                        }) => <Box borderBottomWidth="1" _dark={{
                            borderColor: "muted.50"
                        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                                <HStack space={[2, 3]} justifyContent="space-between">
                                    <VStack>
                                        <Text _dark={{
                                            color: "warmGray.50"
                                        }} color="coolGray.800" bold>
                                            {item.lunch}
                                        </Text>
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }}>
                                            {'Costo c/u: ' + 15 + ' Bs. Cantidad: ' + item.amount}
                                        </Text>
                                    </VStack>
                                    <Spacer />
                                    <Text fontSize="xs" _dark={{
                                        color: "warmGray.50"
                                    }} color="coolGray.800" alignSelf="flex-start" bold>
                                        {`Total: ${15 * item.amount} Bs`}
                                    </Text>
                                </HStack>
                            </Box>} keyExtractor={item => item.lunch} />
                        <VStack width={'100%'} space={2} pt={2}>
                            <Text fontSize={'lg'} bold>Costo total del pedido: {trolley.total} Bs</Text>
                            <Spacer />
                            <Button width={'100%'} onPress={terminar}>Aceptar</Button>
                        </VStack>

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
        marginTop: 10
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
