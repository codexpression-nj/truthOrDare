import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Request from './components/Request';
import { NavigationContainer } from '@react-navigation/native';
import AddFriends from './components/AddFriends';
import Categories from './components/Categories';
import Results from './components/Results';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="AddFriends" component={AddFriends} />
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="Request" component={Request} />
    <Stack.Screen name="Results" component={Results} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
