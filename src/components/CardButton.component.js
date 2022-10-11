import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutTemplante } from '../components/Layout.templante.component';
import { Box, Button, Center, FormControl, Icon, Input, Image, Stack, Text, WarningOutlineIcon, useTheme, VStack, ScrollView, Heading, AspectRatio, HStack } from "native-base";
import { DEFAULT } from '../constants/images';

export const CardButton = (props) => {
    const {
        onClick = () => console.log("falta funcion"),
        imagen,
        name = "nombre",
        price = 0,
        departament = 'La Paz',
        onAction = ()=>console.log("f")
    } = props
    return <Box alignItems="center">
        <Box maxW="80" rounded="2xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1" >
            <Box>
                <AspectRatio w="100%" ratio={16 / 7}>
                    <Image source={imagen ? imagen : DEFAULT} alt="image" height={'auto'} width={'100%'} />
                </AspectRatio>
            </Box>
            <Stack pt={1} space={3}>
                <HStack space={2} /*  justifyContent="center" */>
                    <VStack pl={4} space={2} width={'50%'}>
                        <Heading size="md" ml="-1" color={'black'}>
                            {name}
                        </Heading>
                        <Text color="coolGray.400" fontWeight="400">
                            {departament}
                        </Text>
                    </VStack>
                    <Text color="coolGray.500" bold fontSize={'5xl'} >
                        {`${price}bs`}
                    </Text>
                </HStack >
                <Center pb={2}>
                    <Button width={'80%'} colorScheme="success" onPress={onAction}>
                        Agregar al carrito
                    </Button>
                </Center>
            </Stack>
        </Box>
    </Box>
};