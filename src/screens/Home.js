import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { FlatList } from 'react-native';
import { discoverMovies } from '../services/API';
import MoviePreview from '../components/MoviePreview'

export default function Home({ navigation }) {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovies = () => {
        if (isLoading) return
        setIsLoading(true)
        discoverMovies(page)
            .then(response => {
                setMovies(prev => [...prev, ...response.results])
                setPage(prev => prev + 1)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const onPreviewPress = (id) => {
        navigation.navigate('Details', {
            movieId: id,
        })
    }

    const renderItem = ({ item }) => {
        return <MoviePreview item={item} onPress={() => onPreviewPress(item.id)}></MoviePreview>
    }

    return (
        <View useSafeArea paddingH-20 center>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Discover Movies</Text>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button label={'Load more'} onPress={fetchMovies}></Button>
        </View>
    );
}
