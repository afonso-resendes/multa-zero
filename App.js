import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import HistoricScreen from './screens/HistoricScreen';
import WalletScreen from './screens/WalletScreen';
import ShareScreen from './screens/ShareScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
                
        <Tab.Navigator labeled={false}
                screenOptions={{
                  "tabBarShowLabel": true,
                  "tabBarActiveTintColor": '#fff',
                  "tabBarInactiveTintColor": '#fff',
                  "tabBarStyle": [
                    {
                      "backgroundColor":"#00bfff",
                    },
                    null
                  ],
                  
                     
                }}>                
          <Tab.Screen name="Início" component={HomeScreen} 
          options={{
            
           
            tabBarIcon: ({focused}) => (
              <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconHome.png") : require("./imgs/IconHome.png")}/>
            ), 
            headerTitleStyle: {
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#00bfff',
            }       
                    }} />



          <Tab.Screen name="Histórico" component={HistoricScreen} 
          options={{
            
           
            tabBarIcon: ({focused}) => (
              <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconTabBarHistory.png") : require("./imgs/IconTabBarHistory.png")}/>
            ), 
            headerTitleStyle: {
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#00bfff',
            }       
                    }}
          />

          <Tab.Screen name="Carteira de Condutor" component={WalletScreen} 
          options={{
            
           
            tabBarIcon: ({focused}) => (
              <Image style={{width: 25, height: 25}} source={focused ? require("./imgs/IconTabBarDriverWaller.png") : require("./imgs/IconTabBarDriverWaller.png")}/>
            ), 
            headerTitleStyle: {
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#00bfff',
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
              backgroundColor: '#00bfff',
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
              backgroundColor: '#00bfff',
            }       
                    }}
            />
        </Tab.Navigator>
      </TailwindProvider>
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
