import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
