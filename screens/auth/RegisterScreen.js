import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
    <Text>RegisterScreen</Text>
    <Button title="Register" onPress={() => navigation.navigate("Login")}/>
  </SafeAreaView>
  )
}

export default RegisterScreen