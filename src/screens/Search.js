import React, { useState, useMemo, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { FlatList, TextInput } from 'react-native';
import { searchMovies } from '../services/API';
import debounce from 'lodash.debounce';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search({ navigation }) {

    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const inputRef = useRef();

    const onCancel = () => {
        debouncedResults.cancel()
        setPage(1)
        setMovies([])
        inputRef.current.clear()
    }

    const onSearch = async (text) => {
        setPage(1)
        if (text.length <= 0) {
            setMovies([])
            return
        }
        const result = await searchMovies(text, page)
        setMovies(result)
    }

    const debouncedResults = useMemo(() => {
        return debounce(onSearch, 300);
    }, []);


    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    const renderItem = ({ item }) => {
        return (
            <View marginV-10>
                <Preview movie={item} onPress={onPreviewPress} />
            </View>
        )
    }

    const onPreviewPress = (id) => {
        navigation.navigate('Details', {
            movieId: id,
        })
    }

    return (
        <View useSafeArea margin-10>
            <View row center style={{ borderWidth: 1, borderRadius: 15, borderColor: 'grey' }}>
                <Ionicons style={{ marginHorizontal: 3, color: 'grey' }} name='search' size={25} />
                <TextInput
                    migrate
                    ref={inputRef}
                    style={{ height: 40, width: '80%' }}
                    onChangeText={debouncedResults}
                    placeholder='Search...'>
                </TextInput>
                <TouchableOpacity onPress={onCancel}>
                    <Ionicons style={{ marginHorizontal: 3, color: 'grey' }} name='close' size={25} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

function Preview({ movie, onPress = () => { } }) {
    return (
        <TouchableOpacity onPress={() => onPress(movie.id)}>
            <View row >
                <Image marginR-10 aspectRatio={0.7} style={{ height: 120 }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
                <View centerV style={{ width: '75%' }}>
                    <Text text70 >{movie.title}</Text>
                    <Text>{movie.release_date}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}