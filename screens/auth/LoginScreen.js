import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Button title="Register" onPress={() => navigation.navigate("Register")}/>
    </SafeAreaView>
  )
}

export default LoginScreen