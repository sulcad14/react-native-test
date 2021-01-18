import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Homepage, Contacts, Shop, Info, BillingForm } from './models';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ShopStack = () =>
{
    return (
        <Stack.Navigator initialRouteName="Shop" headerMode="none">
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name="BillingForm" component={BillingForm} />
        </Stack.Navigator>
    );
}

const App = () =>
{
    const returnIcon = (focused, iconName) =>
    {
        if (focused)
        {
            return <MaterialCommunityIcons name={iconName} color={"#0099ff"} size={30} />;
        }
        else
        {
            return <MaterialCommunityIcons name={iconName} color={"#a6a6a6"} size={30} />;
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Homepage}
                    options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "home") }}
                />
                <Tab.Screen
                    name="Contacts"
                    component={Contacts}
                    options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "account-box") }}
                />
                <Tab.Screen
                    name="Shop"
                    component={ShopStack}
                    options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "cart") }}
                />
                <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "bell-circle") }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
