import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Image, Stack, Text, WarningOutlineIcon, useTheme, VStack, ScrollView, Heading, AspectRatio, HStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { CALDO_DE_POLLO, PIQUE_MACHO, SAJTA, SPECIAL_DISHES } from '../constants/images';
import { CardButton } from '../components/CardButton.component';
const specialDishes = [
    { id: 1, name: 'Sajta', departament: 'La Paz', price: 20, imagen: SAJTA },
    { id: 2, name: 'Caldo de Pollo', departament: 'La Paz', price: 15, imagen: CALDO_DE_POLLO },
    { id: 3, name: 'Pique macho', departament: 'La Paz', price: 32, imagen: PIQUE_MACHO },
]

export const Extras = ({ navigation }) => {
    const {
        colors
    } = useTheme();
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password1, setPassword1] = React.useState('');
    return (
        <LayoutTemplante
            image={SPECIAL_DISHES}
            component={() =>
                <Box>
                    <ScrollView w={["100%", "100%"]} h="100%">
                        <VStack flex="1">
                            {
                                specialDishes.map(item =>
                                    <Center flex={1} key={item.id}>
                                        <CardButton name={item.name} departament={item.departament} price={item.price} imagen={item.imagen}/>
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
