import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
        <Tab.Navigator>
          <Tab.Screen name="Início" component={HomeScreen}/>
          <Tab.Screen name="Histórico" component={HistoricScreen} />
          <Tab.Screen name="Carteira" component={WalletScreen} />
          <Tab.Screen name="Partilha" component={ShareScreen} />
          <Tab.Screen name="Definições" component={SettingsScreen} />
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
