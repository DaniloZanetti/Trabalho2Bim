import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image  } from 'react-native';
import imagem from '../assets/images/imagem1.png';
import Sobre from './sobre';
 
export default function App() {
const [page, setPage] = React.useState('home');
 
const renderPage = () => {
if (page === 'home') {
return (
<View style={styles.container}>
<Text style={styles.title}>Destino Certo</Text>
<Text style={styles.descricao}>Explore o mundo ao seu redor com o nosso aplicativo</Text>
<View>
      <Image source={imagem} style={{ width: 400, height: 400 }} />
    </View>
<TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
<Text style={styles.buttonText}>Entrar</Text>
</TouchableOpacity>
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
        backgroundColor: '#fff',
        },
 
        descricao:{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'regular',
            color: '#313131',
            marginBottom: 20,
        },
 
        title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#5B91FF',
        marginBottom: 20,
        },
 
        button: {
        backgroundColor: '#5B91FF',
        width: 200,
        padding: 8,
        borderRadius: 30,
        },
 
        buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
       
        },
})