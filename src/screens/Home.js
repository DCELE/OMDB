import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { FlatList } from 'react-native';
import { discoverMovies } from '../services/API';

export default function Home({ navigation }) {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovies = () => {
        if (isLoading) return
        setIsLoading(true)
        console.log(movies)
        discoverMovies(page)
            .then(response => {
                console.log(response.results)
                setMovies(prev => [...prev, response.results])
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <View useSafeArea style={{ flex: 1, alignItems: 'center' }}>
            <Text>OMDB</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Discover Movies</Text>
            <FlatList
                data={movies}
                renderItem={movie}
                keyExtractor={movie => movie.id}
            />
            <Button label={'Load more'} onPress={fetchMovies}></Button>
        </View>
    );
}

function movie({ item }) {
    console.log(item)

    return (
        <Text> Movie {item.id}</Text>
    )
}