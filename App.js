import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNavigator from './StackNavigator';

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

import NovaMatricula from './screens/NovaMatricula';
import { Modal } from 'react-native-web';

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
        <Stack.Screen name='Adicionar Matricula' component={NovaMatricula} options={{headerShown: true, presentation: "modal",
                    headerRight: () => (
                      <TouchableOpacity
                      onPress={() => navigation.navigate("Adicionar Matricula")}
                      ><Text style={{fontSize: 14, color: "#fff", right: 0, }}>Guardar</Text></TouchableOpacity>
                    ),

                    headerLeft: () => (
                      <TouchableOpacity
                      onPress={() => navigation.navigate("Adicionar Matricula")}
                      ><Text style={{fontSize: 14, color: "#fff", right: 0, }}>Cancelar</Text></TouchableOpacity>
                    ),
                   
                    tabBarIcon: ({focused}) => (
                      <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconTabBarDriverWaller.png") : require("./imgs/IconTabBarDriverWaller.png")}/>
                    ), 
                    headerTitleStyle: {
                      color: '#fff',
        
                    },
        
                    headerStyle: {
                      backgroundColor: '#30a4fc',
        
                    }       
                    }}/>
        
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
