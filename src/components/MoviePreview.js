import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native-ui-lib'

export default function MoviePreview({ item, onPress = () => { } }) {

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