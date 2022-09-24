import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/Colors'

// Screens
import Search from '../screens/Search';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name='Home' component={HomeStack} options={{ title: 'OMDB', headerTitleAlign: 'center' }} />
            <Tab.Screen name='Search' component={Search} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}