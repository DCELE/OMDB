import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native-ui-lib'
import { getMovieDetail } from '../services/API'




export default function Details({ navigation }) {
    const [movieDetail, setMovieDetail] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovieDetail = () => {
        if (isLoading) return
        setIsLoading(true)
        getMovieDetail(movieId)
            .then(response => {
                console.log(response.results)
                setMovieDetail()
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchMovieDetail()
    }, [])

    return (
        <View useSafeArea style={{ flex: 1, alignItems: 'center' }}>
            <ScrollView>

                <Text>{movieDetail}</Text>
                </ScrollView>
            <Button label={'Load more'} onPress={fetchMovies}></Button>
        </View>
    );
}

