import { View, Text, SafeAreaView, Button } from 'react-native'
import React, {useLayoutEffect} from 'react'

import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown:true,
      });
  }, [])
  return (
    <SafeAreaView>
    <Text>RegisterScreen</Text>
    <Button title="Register" onPress={() => navigation.navigate("Login")}/>
  </SafeAreaView>
  )
}

export default RegisterScreen