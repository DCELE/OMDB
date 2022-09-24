import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Incubator } from 'react-native-ui-lib';
const { TextField } = Incubator
import { FlatList } from 'react-native';
import { searchMovies } from '../services/API';
import debounce from 'lodash.debounce';

export default function Search({ navigation }) {

    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([]);

    const onSearch = async (text) => {
        setPage(1)
        if (text.length <= 0) {
            setMovies([])
            return
        }
        const result = await searchMovies(text)
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

    return (
        <View useSafeArea>
            <View >
                <TextField
                    onChangeText={debouncedResults}
                    placeholder={'Search...'}>
                </TextField>
            </View>
        </View>
    );
}