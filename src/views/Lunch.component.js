import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Image, Stack, Text, WarningOutlineIcon, useTheme, VStack, ScrollView, Heading, AspectRatio, HStack, ChevronLeftIcon, AlertDialog, Checkbox, Radio } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { CALDO_DE_POLLO, LUNCH, PIQUE_MACHO, SAJTA, SPECIAL_DISHES } from '../constants/images';
import { CardButton } from '../components/CardButton.component';
import useUser from "../hooks/useUser";
import useStoreDishes from '../hooks/useStoreDishes';
import useStoreLunch from '../hooks/useStoreLunch';
const specialDishes = [
    { id: 1, name: 'Sajta', departament: 'La Paz', price: 20, imagen: SAJTA },
    { id: 2, name: 'Caldo de Pollo', departament: 'La Paz', price: 15, imagen: CALDO_DE_POLLO },
    { id: 3, name: 'Pique macho', departament: 'La Paz', price: 25, imagen: PIQUE_MACHO },
]

export const Lunch = ({ navigation }) => {
    const {
        colors
    } = useTheme();
    const user = useUser();
    const storeDishes = useStoreDishes()
    const [isOpen, setIsOpen] = React.useState(false);
    /* useEffect(() => {
        console.log(storeDishes.storeDishes);
    }, [storeDishes.storeDishes]) */
    const [lunch, setLunch] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const storeLunch = useStoreLunch()
    /* useEffect(()=>{
        console.log(storeLunch.storeLunch);
    },[storeLunch.storeLunch]) */
    const agregar = () => {
        let findLunch = storeLunch.storeLunch.find(item => item.lunch === lunch)
        if (findLunch) {
            let dishes = []
            storeLunch.storeLunch.forEach(item => {
                if (item.lunch === lunch) {
                    dishes.push({
                        ...item,
                        amount: item.amount + Number(amount)
                    })
                }
                else {
                    dishes.push({
                        ...item
                    })
                }
            })
            storeLunch.setStoreLunch(dishes)
        }
        else {
            let auxiliar = storeLunch.storeLunch
            auxiliar.push({
                lunch,
                amount: Number(amount)
            })
            storeLunch.setStoreLunch(auxiliar)
        }
        setLunch('')
        setAmount('')
    }
    return (
        <LayoutTemplante
            image={LUNCH}
            header={() =>
                <VStack flex="1" pt='10'>
                    <HStack space={10
                    } alignContent={'flex-end'} width='100%'>
                        <Button onPress={() => navigation.navigate('Menu')} ><ChevronLeftIcon /></Button>

                        <Button onPress={() => navigation.navigate('Carrito')} >Carrito</Button>
                    </HStack>
                    <Center flex={1} >
                        <Text bold color={'white'} fontSize={'3xl'}>
                            Almuerzo
                        </Text>
                    </Center>
                </VStack>
            }
            component={() =>
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
                                <Button disabled={amount==='' || lunch===''} width={'68%'} onPress={agregar}>{`Total a Pagar: ${amount * 15} Bs`}</Button>
                            </HStack>
                        </VStack>
                    </ScrollView>
                </Box>
            }
        />
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
    }
})