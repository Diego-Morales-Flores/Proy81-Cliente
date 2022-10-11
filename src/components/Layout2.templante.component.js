import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IMAGE_FONT_1 } from '../constants/images';

export const LayoutTemplante2 = ({ image, header=()=>null, component=()=>null }) => {
    return (
        <ImageBackground source={image?image:IMAGE_FONT_1} resizeMode="cover" style={styles_0.image}>
            <View style={styles_0.container} >
                <View style={styles_0.header}>
                    {header()}
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles_0.footer, {
                        backgroundColor: 'rgba(255, 255, 255, 1)'
                    }]}
                >
                    {component()}
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
