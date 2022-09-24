import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { searchShow } from '../services/API';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search({ }) {

    const [text, setText] = useState();
    const [search, setSearch] = useState();

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
            <SafeAreaView>
                <View >
                    <View >
                        <TextInput
                            onChangeText={setText}
                            value={text}
                            placeholder={'Search'}>
                        </TextInput>
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
                            <Text>
                                Search movie or TV show
                            </Text>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </React.Fragment>

    );
}