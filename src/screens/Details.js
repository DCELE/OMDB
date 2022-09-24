import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native-ui-lib'
import { getMovieDetail } from '../services/API'

export default function Details({ navigation, route }) {

    const { movieId } = route.params
    const [movieDetail, setMovieDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchMovieDetail = () => {
        getMovieDetail(movieId)
            .then(response => {
                setMovieDetail(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchMovieDetail()
    }, [])

    return (
        <View useSafeArea style={{ flex: 1, alignItems: 'center' }}>
            {isLoading ? <IsLoading /> : <Loaded movieDetail={movieDetail} />}
        </View>
    );
}

function IsLoading() {
    return (
        <View>
            <Text>Is Loading...</Text>
        </View>
    )
}

function Loaded({ movieDetail }) {
    return (
        <React.Fragment>
            <View>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}` }}
                    style={{ width: '100%' }}
                    aspectRatio={1}
                />

                <View marginH-20 marginB-20 abs absB >
                    <View row>
                        <View center marginR-15 style={{ borderColor: 'white', borderWidth: 1, width: 35, height: 35, borderRadius: 100 }}>
                            <Text white>{movieDetail.vote_average.toFixed(1)}</Text>
                        </View>
                        <Text text50 white>{movieDetail.title}</Text>

                    </View>
                    <Text white marginT-10>{movieDetail.release_date}</Text>
                    <Text white marginT-10>{movieDetail.genre_ids}</Text>
                </View>
            </View>
            <View marginL-15 marginR-15>
                <Text text50 marginT-10 marginB-10>Synopsis</Text>
                <Text>{movieDetail.overview}</Text>
            </View>

        </React.Fragment>
    )
}
