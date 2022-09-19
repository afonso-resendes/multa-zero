
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import HomeScreen from './screens/navigator/HomeScreen';
import { useNavigation } from '@react-navigation/native'

import HistoricScreen from './screens/navigator/HistoricScreen';
import WalletScreen from './screens/navigator/WalletScreen';
import ShareScreen from './screens/navigator/ShareScreen';
import SettingsScreen from './screens/navigator/SettingsScreen';


const Tab = createBottomTabNavigator();
const StackNavigator = () => {
const navigation = useNavigation()
  
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
     
               
                <Tab.Navigator labeled={false}
                        screenOptions={{
                          "tabBarShowLabel": true,
                          "tabBarActiveTintColor": '#fff',
                          "tabBarInactiveTintColor": '#fff',
                          "tabBarStyle": [{
                              "backgroundColor":"#30a4fc",
                            }, null ], }}>                
                  <Tab.Screen name="Início" component={HomeScreen} 
                        options={{
                              tabBarIcon: ({focused}) => (
                                    <Image 
                                        style={{width: 25, height: 25}} 
                                        source={
                                          focused ? require("./imgs/IconHome.png"
                                              ) : require(
                                                "./imgs/IconHome.png"
                                              )}/> 
                                ), 
                                  headerTitleStyle: { color: '#fff' },
                                  headerStyle: { backgroundColor: '#30a4fc'}       
                                }} 
                    />
        
        
        
                  <Tab.Screen name="Histórico" component={HistoricScreen} 
                  options={{
                    
                   
                    tabBarIcon: ({focused}) => (
                      <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconTabBarHistory.png") : require("./imgs/IconTabBarHistory.png")}/>
                    ), 
                    headerTitleStyle: {
                      color: '#fff'
                    },
                    headerStyle: {
                      backgroundColor: '#30a4fc',
                    }       
                            }}
                  />
        
                  <Tab.Screen name="Carteira de Condutor" component={WalletScreen} 
                  options={{
                    headerRight: () => (
                      <TouchableOpacity
                      onPress={() => navigation.navigate("Nova Matricula")}
                      ><Text style={{fontSize: 25, color: "#fff", right: 15, top: -2}}>+</Text></TouchableOpacity>
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
                    }}
                  />
                  
        
        
                  <Tab.Screen name="Partilha" component={ShareScreen} 
                  options={{
                    
                   
                    tabBarIcon: ({focused}) => (
                      <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconTabBarShare.png") : require("./imgs/IconTabBarShare.png")}/>
                    ), 
                    headerTitleStyle: {
                      color: '#fff'
                    },
                    headerStyle: {
                      backgroundColor: '#30a4fc',
                    }       
                            }}
                  
                  />
        
        
                  <Tab.Screen name="Definições" component={SettingsScreen} options={{
                    
                   
                    tabBarIcon: ({focused}) => (
                      <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconTabBarSettings.png") : require("./imgs/IconTabBarSettings.png")}/>
                    ), 
                    headerTitleStyle: {
                      color: '#fff'
                    },
                    headerStyle: {
                      backgroundColor: '#30a4fc',
                    }       
                            }}
                    />
                </Tab.Navigator>
       
    </View>
  )
}

export default StackNavigator