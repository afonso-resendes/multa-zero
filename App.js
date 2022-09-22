import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import firebase from 'firebase'
import StackNavigator from './StackNavigator';

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

<<<<<<< HEAD
import NewTrafficTicketScreen from './screens/NovaMatricula';
import React, {Component} from 'react';
import NovaMatricula from './screens/NovaMatricula';
=======
import NovaMatricula from './screens/NovaMatricula';
import { Modal } from 'react-native-web';
>>>>>>> caf834add46feaa9045a3a8da12d64b97bf9b142

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCWVdOO0NXlHClvwpCQgBmWzx1uyARvvJw",
  authDomain: "multa-zero-teste.firebaseapp.com",
  projectId: "multa-zero-teste",
  storageBucket: "multa-zero-teste.appspot.com",
  messagingSenderId: "16299537096",
  appId: "1:16299537096:web:e27440727e3213ef662bfd"
};

<<<<<<< HEAD
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}




export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="StackNavigator" screenOptions={{
      headerShown: false
        }}>
          <Stack.Screen name='Entrar' component={LoginScreen} navigation={this.props.navigation}/>
          <Stack.Screen name='Register' component={RegisterScreen} navigation={this.props.navigation} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
      )
    }
    
=======
  

  const user = true
  if (user == false) {
>>>>>>> caf834add46feaa9045a3a8da12d64b97bf9b142
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="StackNavigator" screenOptions={{
    headerShown: false
      }}>
<<<<<<< HEAD
        <Stack.Screen name='StackNavigator' component={StackNavigator}/>
        <Stack.Screen name='Adicionar Matricula' component={NovaMatricula} navigation={this.props.navigation} options={{headerShown: true, presentation: "modal",
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
=======
        <Stack.Screen name='Entrar' component={LoginScreen}/>
        <Stack.Screen name='Criar Conta' component={RegisterScreen}/>
>>>>>>> caf834add46feaa9045a3a8da12d64b97bf9b142
        
        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
<<<<<<< HEAD
  
  
}

export default App
=======


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
>>>>>>> caf834add46feaa9045a3a8da12d64b97bf9b142
