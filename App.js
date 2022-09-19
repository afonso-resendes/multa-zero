import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNavigator from './StackNavigator';

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

import NovaMatricula from './screens/NovaMatricula';

const Stack = createNativeStackNavigator();

export default function App() {

  const user = true
  if (user == false) {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="StackNavigator" screenOptions={{
    headerShown: false
      }}>
        <Stack.Screen name='Entrar' component={LoginScreen}/>
        <Stack.Screen name='Criar Conta' component={RegisterScreen}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StackNavigator" screenOptions={{
    headerShown: false
      }}>
        <Stack.Screen name='StackNavigator' component={StackNavigator}/>
        <Stack.Screen name='Nova Matricula' component={NovaMatricula} options={{presentation:"modal", headerShown: true}}/>
        
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
