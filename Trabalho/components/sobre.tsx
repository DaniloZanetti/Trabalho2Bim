import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image  } from 'react-native';
import imagem from '../assets/images/imagem1.png';
import Home from './home';

export default function App() {
const [page, setPage] = React.useState('sobre');

const renderPage = () => {
if (page === 'sobre') {
return (
<View style={styles.container}>
<Text style={styles.title}>Destino Certo</Text>
<Text style={styles.descricao}>Explore o muxxxxxxndo ao seu redor com o nosso aplicativo</Text>
<View>
      <Image source={imagem} style={{ width: 400, height: 400 }} />
    </View>
<TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
<Text style={styles.buttonText}>Entar</Text>
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

        descricao:{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'regular',
            color: '#313131',
            marginBottom: 20,
        },

        title: {
        fontSize: 24,
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