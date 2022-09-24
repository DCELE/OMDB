import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
