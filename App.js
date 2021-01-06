import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Homepage, Contacts } from './models';

const Tab = createBottomTabNavigator();

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
          name="Item 2" 
          component={Contacts}
          options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "account-box") }} 
        />
        <Tab.Screen 
          name="Item 3" 
          component={Homepage}
          options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "arm-flex") }} 
        />
        <Tab.Screen 
          name="Item 4" 
          component={Homepage}
          options={{ tabBarIcon: ({ focused, color, size }) => returnIcon(focused, "bell-circle") }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;