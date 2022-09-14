import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'; //instalar

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:true,
        });
    }, [])
  return (
    <SafeAreaView style={{backgroundColor: "#fff", height: "100%", flex: 1}}>
      <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 20}}>
        <TouchableOpacity style={{padding: 10, paddingBottom: 50, borderRadius: 15, paddingTop: 50, marginRight: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>O que fazemos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, paddingBottom: 50, borderRadius: 15, paddingTop: 50, marginLeft: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>Vantagens</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", justifyContent: "center",}}>
        <TouchableOpacity style={{padding: 10, height: 70, paddingTop: 15, borderRadius: 15,  marginRight: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>Sucesso</Text>
          <Text style={{textAlign: "center", marginTop: 5, fontSize: 18, color: "green"}}>93%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, paddingTop: 15, height: 70, borderRadius: 15,  marginLeft: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>Poupança</Text>
          <Text style={{textAlign: "center", marginTop: 5, fontSize: 18, color: "green"}}>3000.00€</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient style={{alignSelf: "center", marginTop: "30%", width: 150, bottom: 0, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#00bfff', 'blue']}>
        <TouchableOpacity style={{padding: 10,}}><Text style={{color: "#fff", textAlign: "center"}}>Começar Aqui</Text></TouchableOpacity>
      </LinearGradient>
      <Text style={{marginTop: 15, marginLeft: 15, marginRight: 15, textAlign: "center", color: "#8c8c8c"}}>Defenda-se! Não fique sem carta, não agrave os custos do seu seguro e não perca pontos.</Text>
    
    </SafeAreaView>
  )
}

export default HomeScreen