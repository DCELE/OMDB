import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Incubator } from 'react-native-ui-lib';
const { TextField } = Incubator
import { FlatList } from 'react-native';
import { searchShow } from '../services/API';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search({ navigation }) {

    const [text, setText] = useState([]);
    const [search, setSearch] = useState("");

    const onSearch = () => {
        searchShow(text.searchMovieOrTv.movies, text.searchMovieOrTv.tv)
            .then(([movies, tv]) => {
                const data = [...movies, ...tv]
                setSearch(data)
            }).catch(() => {
            })
    }

    return (
        <React.Fragment>
            <View useSafeArea>
                <View >
                    <View >
                        <TextField
                            onChangeText={setText}
                            value={text}
                            placeholder={'Search'}>
                        </TextField>
                    </View>
                    <TouchableOpacity
                        onPress={onSearch}>
                        <Ionicons name={'search-outline'} />
                    </TouchableOpacity>

                </View>
                <View >
                    {search && search.length > 0 && (
                        <FlatList
                            columns={2}
                            data={search}
                        ></FlatList>
                    )}

                    {!search && (
                        <View >
                            <Text >
                                Search movie or TV show
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </React.Fragment>

    );
}