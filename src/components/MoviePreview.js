import React from 'react'
import { Image, View, Text } from 'react-native-ui-lib'

export default function MoviePreview({ item }) {

    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={{ width: '100%' }}
                aspectRatio={0.5}
            />
            <Text> Movie {item.title}</Text>
        </View>
    )
}