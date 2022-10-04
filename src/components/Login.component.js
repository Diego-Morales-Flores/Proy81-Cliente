import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, Input, Layout, ViewPager } from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
export const Login = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const renderInputIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />
        </TouchableWithoutFeedback>
    );
    const EmailIcon = (props) => (
        <Icon {...props} name='email'/>
      );
      const KeyIcon = (props) => (
        <Icon {...props} name='thermometer'/>
      );
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    return (
        <ImageBackground source={require('../../images/font_1.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.container} >
                <View style={styles.header}>
                    {/* <Text style={styles.text_header}>Welcome!</Text> */}
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)'
                    }]}
                >
                    <Text /* style={styles.text} */ category='h4'>¡Bienvenidos!</Text>
                    <Text /* style={styles.text} */ category='s2' appearance='hint'>Inicia sesión para continuar</Text>
                        {/* <Icon name={'email'} style={styles.icon} fill='#8F9BB3'/> */}
                        <Input
                        accessoryLeft={EmailIcon}
                            style={styles.input}
                            placeholder='Correo electrónico'
                            value={email}
                            onChangeText={setEmail}
                        />

                    <Input
                        style={styles.input}
                        accessoryLeft={KeyIcon}
                        placeholder='Contraseña'
                        value={password}
                        secureTextEntry={secureTextEntry}
                        onChangeText={setPassword}
                        accessoryRight={renderInputIcon}
                    />
                </Animatable.View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
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
        justifyContent: "center"
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
