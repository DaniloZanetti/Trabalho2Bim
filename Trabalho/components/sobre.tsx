import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imagem from '../assets/images/icon.png';
import Home from './home';
 
export default function App() {
const [page, setPage] = React.useState('sobre');
 
const renderPage = () => {
if (page === 'sobre') {
return (
<View style={styles.container}>
<Text style={styles.titleprincipal}>Localização Atual</Text>

<View>
      <Image source={imagem} style={{ width: 400, height: 400 }} />
    </View>

<Text style={styles.title}>Latitude: 0.0</Text>
<Text style={styles.title}>Longitude: 0.0</Text>
<TouchableOpacity style={styles.buttonVoltar} onPress={() => setPage('home')}>
<Text style={styles.buttonText}>obter</Text>
<Text style={styles.button}>Voltar</Text>
</TouchableOpacity>
</View>
);} else if (page === 'home') {
    return <Home />;
}
 
};
 
return <View style={styles.container}>{renderPage()}</View>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        },

        titleprincipal:{
            fontSize: 35,
            fontWeight: 'bold',
            color: '#5B91FF',
            marginBottom: 5,
        },
 
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        backgroundColor: '#ffff',
        textAlign: 'left',

        },
 
        button: {
            backgroundColor: '#5B91FF',
            width: 200,
            padding: 8,
            borderRadius: 30,
        },
 
        buttonTextVoltar: {
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 20,
        },
})