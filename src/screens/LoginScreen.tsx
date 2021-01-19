import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Button, TextInput } from '../components/Themed';
import { buyItem } from '../redux/actions';

const LoginScreen = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        console.log("logging in....")
    }

    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>Login Screen</Text>
                <TextInput autoFocus style={styles.email} onChangeText={text => setEmail(text)} placeholder='Email' value={email} autoCompleteType='email' textContentType='emailAddress' />
                <TextInput style={styles.password} onChangeText={text => setPassword(text)} placeholder='Password' value={password} secureTextEntry />
                <Button onPress={handleLogin} style={styles.button}><Text style={{ color: 'white' }}> Login </Text></Button>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.tint,
    },
    bodyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        borderRadius: 8,
        elevation: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        width: 250,
        marginTop: 20
    },
    password: {
        width: 250,
        marginTop: 10
    },
    button: {
        marginTop: 30
    }
});
