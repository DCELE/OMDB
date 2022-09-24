import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native-ui-lib';
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

    const renderItem = ({ item }) => {
        <MoviePreview item={item}></MoviePreview>
    }

    return (
        <View useSafeArea paddingH-20 center>
            <Text>OMDB</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Discover Movies</Text>
            <FlatList
                data={movies}
                renderItem={movie}
                keyExtractor={item => item.id}
            />
            <Button label={'Load more'} onPress={fetchMovies}></Button>
        </View>
    );
}

function movie({ item, navigation}) {
    console.log(item)

    const onPress = () => {

    }

    return (
        <TouchableOpacity marginV-35 onPress={onPress} >
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={{ width: '100%', borderRadius: 20 }}
                aspectRatio={0.5}
            />
            <View marginH-20 marginB-40 abs absB >
                <View row>
                    <View center marginR-15 style={{ borderColor: 'white', borderWidth: 1, width: 35, height: 30, borderRadius: 100 }}>
                        <Text white>{item.vote_average}</Text>
                    </View>
                    <Text text50 white>{item.title}</Text>
                </View>
                <Text numberOfLines={2} white>{item.overview}</Text>
            </View>
        </TouchableOpacity>
    )
}