import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search';

// const SearchStackNavigator = createStackNavigator({
//   Search: {
//     screen: Search,
//     navigationOptions: {
//       title: 'Rechercher'
//     }
//   }
// })

// export default createAppContainer(SearchStackNavigator)

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
