import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Image, Stack, Text, WarningOutlineIcon, useTheme, VStack, ScrollView, Heading, AspectRatio, HStack, ChevronLeftIcon, AlertDialog } from "native-base";
import { CALDO_DE_POLLO, EXTRAS_IMAGE, PIQUE_MACHO, SAJTA, SPECIAL_DISHES } from '../constants/images';
import { CardButton } from '../components/CardButton.component';
import useUser from "../hooks/useUser";
import useStoreExtras from '../hooks/useStoreExtras';
import { EXTRAS } from '../constants/datos';

export const Extras = ({ navigation, extrasState, setExtrasState}) => {
    const {
        colors
    } = useTheme();
    const user = useUser();
    const storeExtras = useStoreExtras()
    const [isOpen, setIsOpen] = React.useState(false);
    /* useEffect(() => {
        console.log(extrasState);
    }, [extrasState]) */
    const agregar = (id) => {
        let findDish = extrasState.find(item=>item.id===id)
        if(findDish){
            let dishes = []
            extrasState.forEach(item=>{
                if(item.id===id){
                    dishes.push({
                        ...item,
                        amount:item.amount+1
                    })
                }
                else{
                    dishes.push({
                        ...item
                    })
                }
            })
            setExtrasState(dishes)
        }
        else{
            let busqueda = EXTRAS.find(item=>item.id===id)
            let auxiliar = extrasState
            auxiliar.push({
                ...busqueda,
                amount:1
            })
            setExtrasState(auxiliar)
        }
    }
    return (
        <LayoutTemplante
            image={EXTRAS_IMAGE}
            header={() =>
                <VStack flex="1" pt='10'>
                    <HStack space={10
                    } alignContent={'flex-end'} width='100%'>
                        <Button onPress={() => navigation.navigate('Menu')}><ChevronLeftIcon /></Button>

                        <Button onPress={() => navigation.navigate('Carrito')} >Carrito</Button>
                    </HStack>
                    <Center flex={1} >
                        <Text bold fontSize={'3xl'}>
                            EXTRAS
                        </Text>
                    </Center>
                </VStack>
            }
            component={() =>
                <Box>
                    <ScrollView w={["100%", "100%"]} h="100%">
                        <VStack flex="1" space={1}>
                            {
                                EXTRAS.map(item =>
                                    <Center flex={1} key={item.id}>
                                        <CardButton name={item.name} departament={item.departament} price={item.price} imagen={item.imagen}
                                        onAction = {()=>agregar(item.id)}
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
