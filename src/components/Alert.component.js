import React, { useState } from "react";
import { Stack, Alert, IconButton, HStack, VStack, CloseIcon, Text, Center, NativeBaseProvider } from "native-base";


export default ({ status, title, display = 'none' }) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Alert w="100%" status={status} display={display}>
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                                <Alert.Icon mt="1" />
                                <Text fontSize="md" color="coolGray.800">
                                    {title}
                                </Text>
                            </HStack>
                            <IconButton variant="unstyled" _focus={{
                                borderWidth: 0
                            }} icon={<CloseIcon size="3" />} _icon={{
                                color: "coolGray.600"
                            }} />
                        </HStack>
                    </VStack>
                </Alert>
            </Center>
        </NativeBaseProvider>
    );
};
