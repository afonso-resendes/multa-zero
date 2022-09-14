import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'; //instalar

import React from 'react'

const ShareScreen = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor: "#e8e8e9", margin: 15, borderRadius: 15, padding: 10}}>
      <Text style={{textAlign: "center"}}>Como funciona?</Text>
      <Text style={{marginTop: 10}}>Partilha o teu referral code para fazer crescer a comunidade Multa Zero. Além disso, ganhas entre 5% a 50% de desconto no serviço que contratares por cada amigo que também solicitar os nossos serviços.
      </Text><Text style={{marginTop: 15, marginBottom: 30}}>
        Quanto mais referral codes partilhares mais probabilidades tens de ter estes descontos.
      </Text>
      <View style={{width: "100%", borderBottomWidth: 1, borderBottomColor: "#8c8c8c", }}></View>
      <Image style={{width: 30, height: 30, marginTop: -15, alignSelf: "center", bottom: 0, paddingBottom: 30}} source={require(".././imgs/IconDiscount.png")} />
    </View>

    <View style={{marginLeft: 15, marginRight: 15}}>
      <Text style={{alignSelf: "center", marginTop: 20, marginBottom: 15}}>Meus Convites</Text>
      <View style={{flexDirection: "row"}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", borderTopWidth: 1, borderTopColor: "#e8e8e9", borderRightWidth: 0.5, borderRightColor: "#e8e8e9",  width:"50%", padding: 10, alignItems: "center"}}>
        <Text>Por Descontar</Text>
        <Text style={{fontSize: 25, color: "green"}}>0</Text>
      </View>
      <View style={{borderTopWidth: 1, borderTopColor: "#e8e8e9", borderBottomWidth: 1, borderBottomColor: "#e8e8e9", width: "50%", padding: 10, alignItems: "center"}}>
        <Text>Usados</Text>
        <Text style={{fontSize: 25}}>0</Text>
      </View>
      </View>
      <View></View>
      <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}>
        <Text>Descontos aplicados</Text>
        <Text style={{justifyContent: "flex-end", color: "green"}}>0.00€</Text>
      </View>
      <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}>
        <Text>Ver convites</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require(".././imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
    </View>

    <View style={{alignSelf: "center", backgroundColor: "#e8e8e9", flexDirection: "row", marginTop: 30, padding: 10, borderRadius: 25}}>
      <Image style={{width: 18, height: 18, justifyContent: "center", marginRight: 10}} source={require(".././imgs/IconTabBarShare.png")} />
      <Text style={{color: "#00bfff"}}>Código Referral: TESTE1234</Text>
    </View>

    <LinearGradient style={{alignSelf: "center", marginTop: 15, width: "80%", bottom: 0, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#00bfff', 'blue']}>
        <TouchableOpacity style={{padding: 10,}}><Text style={{color: "#fff", textAlign: "center"}}>Começar Aqui</Text></TouchableOpacity>
      </LinearGradient>
    
    </ScrollView>
  )
}

export default ShareScreen