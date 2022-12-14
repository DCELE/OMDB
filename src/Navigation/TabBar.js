import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

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
                    } else if (rn === 'Search ') {
                        iconName = focused ? 'search' : 'search-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name='Home' component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name='Search ' component={SearchStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}