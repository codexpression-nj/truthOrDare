import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Request from './components/Request';
import { NavigationContainer } from '@react-navigation/native';
import AddFriends from './components/AddFriends';
import Categories from './components/Categories';
import Results from './components/Results';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prompt from './components/Prompt';
import PlayerPicker from './components/PlayerPicker';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AddFriends">
    <Stack.Screen name="Prompt" component={Prompt} options={{headerShown:false}}/>
    <Stack.Screen name="AddFriends" component={AddFriends} options={{headerShown:false}}/>
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="PlayerPicker" component={PlayerPicker} />
    <Stack.Screen name="Request" component={Request} options={{headerShown:false}} />
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
