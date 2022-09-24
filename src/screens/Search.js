import React, { useState } from 'react';
import { View, Text, Incubator } from 'react-native-ui-lib';
const { TextField } = Incubator
import { FlatList } from 'react-native';
import { searchShow } from '../services/API';
import debounce from 'lodash.debounce';

export default function Search({ navigation }) {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const onSearch = () => {

    }

    const onSearchChange = useMemo(() => {
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