import { View, Text, Button, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'; //instalar




const LoginScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown:true,
      });
  }, [])
  return (
    <SafeAreaView style={{backgroundColor: "#fff", flex: 1}}>
      <Image style={{width: 180, height: 50, alignSelf: "center", marginTop: 60}} source={require("../.././imgs/logo.psd")} />
        
      <TextInput
        style={{backgroundColor: "transparent", marginTop: 130, marginLeft: 25, marginRight: 25, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Email"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />
      <TextInput
        style={{backgroundColor: "transparent", marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Senha"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />
        <TouchableOpacity style={{ alignContent: "center", width: "100%"}}><Text style={{color: "#30a4fc", textAlign: "center", fontSize: 12, textAlign: "right", marginRight: 25}}>Recuperar senha de acesso</Text></TouchableOpacity>
        <LinearGradient style={{alignSelf: "center", marginTop: 30, width: "80%", bottom: 0, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#30a4fc', '#2084c4']}>
        <TouchableOpacity style={{padding: 10,}}><Text style={{color: "#fff", textAlign: "center"}} onPress={() => navigation.navigate("Nova Multa")}>Entrar</Text></TouchableOpacity>
      </LinearGradient>
      <View style={{backgroundColor: "#e8e8e9", alignSelf: "center", marginTop: 10, borderRadius: 100, width: 30, height: 30}}><Text style={{fontSize: 12, top: 7.5, textAlign: "center"}}>OU</Text></View>
      <View style={{borderWidth: 0.5, borderColor: "#e8e8e9", marginTop: -15, zIndex: -1}}></View>
      <View style={{flexDirection: 'row', justifyContent: "space-evenly", marginTop: 20}}>
        <TouchableOpacity style={{width: 35, height: 35, backgroundColor: "#000", shadowColor: "#000", shadowOffset: {width: 2, height: 2,}, shadowRadius: 10, shadowOpacity: 0.15}}></TouchableOpacity>
        <TouchableOpacity style={{width: 35, height: 35, backgroundColor: "#fff", shadowColor: "#000", shadowOffset: {width: 2, height: 2,}, shadowRadius: 10, shadowOpacity: 0.15}}></TouchableOpacity>
        <TouchableOpacity style={{width: 35, height: 35, backgroundColor: "#fff", shadowColor: "#000", shadowOffset: {width: 2, height: 2,}, shadowRadius: 10, shadowOpacity: 0.15}}></TouchableOpacity>
        <TouchableOpacity style={{width: 35, height: 35, backgroundColor: "#fff", shadowColor: "#000", shadowOffset: {width: 2, height: 2,}, shadowRadius: 10, shadowOpacity: 0.15}}></TouchableOpacity>
      </View>
      <View style={{borderWidth: 0.5, borderColor: "#e8e8e9", marginTop: 10, zIndex: -1}}></View>
        <TouchableOpacity style={{bottom: 75, position: "absolute", alignContent: "center", width: "100%"}} onPress={() => navigation.navigate("Register")}><Text style={{color: "#000", textAlign: "center", fontSize: 13}}>Ainda não tem conta?</Text></TouchableOpacity>
        <TouchableOpacity style={{bottom: 50, position: "absolute", alignContent: "center", width: "100%"}} onPress={() => navigation.navigate("Register")}><Text style={{color: "#30a4fc", textAlign: "center"}}>Criar uma nova conta</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen