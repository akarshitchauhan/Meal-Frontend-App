import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name='Categories' component={CategoriesScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          <Stack.Screen
            name='MealCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',

            }} />
          <Stack.Screen
            name='MealOverview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{ title: 'Meal Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
