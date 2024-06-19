import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import imagem from '../assets/images/icon.png';
import Home from './home';
 
export default function App() {
const [page, setPage] = React.useState('sobre');
const image = { uri: "../assets/images/background.png" };
        
const renderPage = () => {
if (page === 'sobre') {
return (
<View style={styles.container}>
    <ImageBackground source={image} style={styles.container}>
    <View>
      <Image source={imagem} style={{ width: 58, height: 87 }} />
    </View>
    
<Text style={styles.titleprincipal}>Localização Atual</Text>
<br/>
<br/>
<br/>
<br/>
<br/>
    <Text style={styles.title}>Latitude: 0.0</Text>
    <Text style={styles.title}>Latitude: 0.0</Text>

    </ImageBackground>      
    <TouchableOpacity style={[styles.buttonobter, { alignSelf: 'flex-start' }]}>
<Text style={styles.buttonTextobter}>Obter</Text>
</TouchableOpacity>



<TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
<Text style={styles.buttonText}>Voltar</Text>
</TouchableOpacity>

</View>

);
} else if (page === 'home') {
    return <Home />;
}
 
};
 
return <View style={styles.container}>{renderPage()}</View>;
}
const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        },

        titleprincipal:{
            fontSize: 36,
            textDecorationLine: 'underline',
            color: '#FFF',
            
        },
 
        title: {
            width: 300,
            height: 45,
            justifyContent: 'center',
            alignContent: 'center',
            border: '1px solid #B1B1B1', /* Borda sólida de 2 pixels de espessura */
            borderRadius: 5, /* Arredonda as bordas em 10 pixels */
            padding: 8,/* Espaçamento interno para evitar que o texto encoste na borda */
            elevation: 5, // Elevação para adicionar sombra
            shadowColor: '#B1B1B1', // Cor da sombra
            shadowOffset: { width: 0, height: 2 }, // Configuração do deslocamento da sombra
            shadowOpacity: 0.8, // Opacidade da sombra
            shadowRadius: 4, // Raio da sombra
            fontSize: 20,
            fontWeight: 500,
            color: '#232323',
            marginBottom: 20,
            backgroundColor: '#ffff',
            textAlign: 'left',
        },

        container1:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start', // Alinha os itens à esquerda
            paddingHorizontal: 5,
            
        },

        buttonobter:{
            backgroundColor: '#5B91FF',
            padding: 8,
            width: 80,
            borderRadius: 4,
            marginLeft: 40,
            marginRight: 260,
            marginTop: -50,
        },

        buttonTextobter:{
            color: 'white',
            fontSize: 20,
            fontWeight: '400',
            textAlign: 'center',
            marginTop: -2,
        },
 
 
        button: {
            backgroundColor: '#5B91FF',
            width: 310,
            padding: 8,
            borderRadius: 30,
            cursor: 'pointer'
            
            

        },
 
        buttonText: {
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 20,
        },
})