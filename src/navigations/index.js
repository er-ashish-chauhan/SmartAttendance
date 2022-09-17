import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';;
import DrawerNavigator from './drawer_nav';

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}