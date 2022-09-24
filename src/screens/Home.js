import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { discoverMovies } from '../services/API';

export default function Home({ navigation }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        discoverMovies(1)
            .then(response => {
                console.log("asdasadsda", response)
            }).catch(error => {
                console.log("iosadaij", error)
            })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home</Text>
        </View>
    );
}