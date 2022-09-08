import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack_nav';

export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}