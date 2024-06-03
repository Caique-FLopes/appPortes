// src/App.js or src/navigation/AppNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilterScreen from './screens/FilterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FilterScreen">
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        {/* Outras telas podem ser adicionadas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;