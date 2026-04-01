import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/screens/ModuleListScreen';
import ModuleViewScreen from './src/screens/ModuleViewScreen';
import ModuleAddScreen from './src/screens/ModuleAddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: 'Modules' }}
        />

        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: 'Module View' }}
        />

        {/* 2. Register the new screen here! */}
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: 'Add Module' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}