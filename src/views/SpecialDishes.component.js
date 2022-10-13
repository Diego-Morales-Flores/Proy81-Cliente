import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Image, Stack, Text, WarningOutlineIcon, useTheme, VStack, ScrollView, Heading, AspectRatio, HStack, ChevronLeftIcon, AlertDialog } from "native-base";
import { CALDO_DE_POLLO, PIQUE_MACHO, SAJTA, SPECIAL_DISHES } from '../constants/images';
import { CardButton } from '../components/CardButton.component';
import useUser from "../hooks/useUser";
import useStoreDishes from '../hooks/useStoreDishes';
const specialDishes = [
    { id: 1, name: 'Sajta', departament: 'La Paz', price: 20, imagen: SAJTA },
    { id: 2, name: 'Caldo de Pollo', departament: 'La Paz', price: 15, imagen: CALDO_DE_POLLO },
    { id: 3, name: 'Pique macho', departament: 'La Paz', price: 25, imagen: PIQUE_MACHO },
]

export const SpecialDishes = ({ navigation, dishesState, setDishesState }) => {
    const {
        colors
    } = useTheme();
    const agregar = (id) => {
        let findDish = dishesState.find(item => item.id === id)
        if (findDish) {
            let dishes = []
            dishesState.forEach(item => {
                if (item.id === id) {
                    dishes.push({
                        ...item,
                        amount: item.amount + 1
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
        else {
            let busqueda = specialDishes.find(item => item.id === id)
            let auxiliar = dishesState
            auxiliar.push({
                ...busqueda,
                amount: 1
            })
            setDishesState(auxiliar)
        }
    }
    return (
        <LayoutTemplante
            image={SPECIAL_DISHES}
            header={() =>
                <VStack flex="1" pt='10'>
                    <HStack space={10
                    } alignContent={'flex-end'} width='100%'>
                        <Button onPress={() => navigation.navigate('Menu')}><ChevronLeftIcon /></Button>

                        <Button onPress={() => navigation.navigate('Carrito')} >Carrito</Button>
                    </HStack>
                    <Center flex={1} >
                        <Text bold fontSize={'3xl'}>
                            Platos Especiales
                        </Text>
                    </Center>
                </VStack>
            }
            component={() =>
                <Box>
                    <ScrollView w={["100%", "100%"]} h="100%">
                        <VStack flex="1" space={1}>
                            {
                                specialDishes.map(item =>
                                    <Center flex={1} key={item.id}>
                                        <CardButton name={item.name} departament={item.departament} price={item.price} imagen={item.imagen}
                                            onAction={() => agregar(item.id)}
                                        />

                                    </Center>
                                )
                            }

                        </VStack>
                    </ScrollView>;
                </Box>
            }
        />
    );
};
