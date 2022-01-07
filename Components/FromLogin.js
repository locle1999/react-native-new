import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import auth from '@react-native-firebase/auth';
import "@react-native-firebase/app"
import { NavigationContainer } from '@react-navigation/native';

export default class FromLogin extends Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    componentDidMount() {
        const { navigation } = this.props
        auth()
            .onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? 'Product' : 'Đăng nhập')
            })
    }
    onFooterLinkPress = () => {
        this.props.navigation.navigate('Signup')
    }
    onLoginPress = () => {
        const { email, password } = this.state
        const { navigation } = this.props
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Product'))
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is ko có!');
                }

                console.error(error);
            });
    }

    render() {
        // let { navigation } = this.props
        return (
            <>
                <View style={styles.container}>
                    <KeyboardAwareScrollView
                        style={{ flex: 1, width: '100%' }}
                        keyboardShouldPersistTaps="always">

                        <Image style={{ width: 100, height: 100, borderRadius: 60, alignSelf: "center" }} source={require("../public/logo-loctroi.png")} />
                        <TextInput
                            style={styles.input}
                            placeholder='E-mail'
                            placeholderTextColor="#aaaaaa"
                            onChangeText={(email) => { this.setState({ email }) }}
                            value={this.state.email}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#aaaaaa"
                            secureTextEntry
                            placeholder='Password'
                            onChangeText={(password) => { this.setState({ password }) }}
                            value={this.state.password}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.onLoginPress()}>
                            <Text style={styles.buttonTitle}>Log in</Text>
                        </TouchableOpacity>
                        <View style={styles.footerView}>
                            <Text style={styles.footerText}>Don't have an account? <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})