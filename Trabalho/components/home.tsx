import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground  } from 'react-native';
import imagem from '../assets/images/imagem1.png';
import Sobre from './sobre';

 
export default function App() {
const [page, setPage] = React.useState('home');
const image = { uri: "../assets/images/background.png" };
 
const renderPage = () => {
if (page === 'home') {
return (
<View style={styles.container}>         
    <ImageBackground source={image} style={styles.container}>
    <View>
      <Image source={imagem} style={{ width: 126, height: 125 }} />
    </View>
<Text style={styles.title}>Rota Rápida</Text>
<Text style={styles.descricao}>Rota Rápida: encontre o caminho ideal em segundos! 
    Chegue mais rápido com nossas rotas eficientes.</Text>
    <br/>
    <br/>
    <br/>

<TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
<Text style={styles.buttonText}>Entrar</Text>
</TouchableOpacity>
</ImageBackground>
</View>
);} else if (page === 'sobre') {
    return <Sobre />;
}
 
};
 
return <View style={styles.container}>{renderPage()}</View>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
 
        descricao:{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'regular',
            color: '#fff',
            marginBottom: 20,
        },


        title:{
        fontSize: 36,
        color: '#fff',
        marginBottom: 20,
        textDecorationLine: 'underline'
        },
 
        button: {
        backgroundColor: '#CB28CE',
        width: 156,
        height: 52,
        padding: 8,
        borderRadius: 30,
        },
 
        buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 32,
       
        },
})