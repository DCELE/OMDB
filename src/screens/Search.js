import React, { useState, useMemo } from 'react';
import { View, Text, Incubator } from 'react-native-ui-lib';
const { TextField } = Incubator
import { FlatList } from 'react-native';
import { searchMovies, searchShow } from '../services/API';
import debounce from 'lodash.debounce';

export default function Search({ navigation }) {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const onSearch = async () => {
        const movies = await searchMovies(searchTerm, 1)
        console.log(movies)
    }

    const onSearchChange = useMemo(() => {
        console.log("iaskdas")
        return debounce(onSearch, 300);
    }, []);

    return (
        <View useSafeArea>
            <View >
                <TextField
                    onChangeText={onSearchChange}
                    placeholder={'Search...'}>
                </TextField>
            </View>
        </View>
    );
}