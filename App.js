import * as React from 'react';
import Navigation from './src/Navigation/TabBar';
import { NavigationContainer } from '@react-navigation/native';

function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}

export default App;