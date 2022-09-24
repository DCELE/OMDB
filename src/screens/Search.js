import React, { useState, useMemo, useEffect, useRef } from 'react';
import { View, Text, Incubator, Image, TextField, TouchableOpacity } from 'react-native-ui-lib';
//const { TextField } = Incubator
import { FlatList } from 'react-native';
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
                <Preview movie={item} />
            </View>
        )
    }

    return (
        <View useSafeArea margin-10>
            <View row centerV style={{ borderWidth: 1 }}>
                <Ionicons style={{ marginHorizontal: 3 }} name='search' size={25} />
                <TextField
                    ref={inputRef}
                    style={{ height: 40, width: '70%' }}
                    onChangeText={debouncedResults}
                    placeholder={'Search...'}>
                </TextField>
                <TouchableOpacity onPress={onCancel}>
                    <Ionicons style={{ marginHorizontal: 3 }} name='close' size={25} />
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

function Preview({ movie }) {
    return (
        <View row>
            <Image marginR-10 aspectRatio={0.7} style={{ height: 120 }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
            <View centerV>
                <Text text70>{movie.title}</Text>
                <Text>{movie.release_date}</Text>
            </View>
        </View>
    )
}