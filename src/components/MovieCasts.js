import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { View, Text, Image } from 'react-native-ui-lib'
import { getMovieCast } from '../services/API'

export default function MovieCasts({ id }) {

    const [cast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMovieCast(id)
            .then(response => {
                setCast(response.cast)
            }).catch(error => {

            })
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View center marginH-5 style={{ width: 100 }}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
                    style={{ width: '100%', borderRadius: 5 }}
                    aspectRatio={1}
                />
                <Text style={{ flex: 1, flexWrap: 'wrap' }}>{item.name}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text text60 marginV-5>Cast</Text>
            <FlatList
                horizontal
                data={cast}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
