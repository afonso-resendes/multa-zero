import { View, Text, Image, TextInput, ScrollView, Linking, TouchableOpacity, Switch } from 'react-native'
import React, {useState, useLayoutEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient'; //instalar

import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown:true,
      });
  }, [])

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <View style={{backgroundColor: "#fff", flex: 1}}>
      <ScrollView>
       <TextInput
        style={{backgroundColor: "transparent", marginTop: 50, marginLeft: 25, marginRight: 25, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Primeiro Nome"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />
      <TextInput
        style={{backgroundColor: "transparent", marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 30, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Último Nome"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />


      <TextInput
        style={{backgroundColor: "transparent", marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
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
      <TextInput
        style={{backgroundColor: "transparent", marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 30, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Repetir Senha"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />

      <TextInput
        style={{backgroundColor: "transparent", marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Telemóvel (Opcional)"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />
      <TextInput
        style={{backgroundColor: "transparent", marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 30, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Código de Referral (Opcional)"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />
      <View style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", marginLeft: 25, marginRight: 25, paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text style={{alignSelf: "center"}}>Motorista Profissional</Text>
        <View >
        <Switch
        trackColor={{ false: "#e8e8e9", true: "#0f0" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#e8e8e9"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", marginLeft: 25, marginRight: 25, paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between", }}>
        <Text style={{alignSelf: "center"}}>Com Protocolo</Text>
        <Switch
        trackColor={{ false: "#e8e8e9", true: "#0f0" }}
        thumbColor={isEnabled2 ? "#fff" : "#fff"}
        ios_backgroundColor="#e8e8e9"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
      </View>
      <View style={{marginLeft: 25, marginRight: 25, flexDirection: "row"}}>
        <View style={{flexDirection: "row", marginRight: 25,}}>
        <TouchableOpacity style={{width: 30, height: 30, borderWidth: 1, borderRadius: 10, borderColor: "#2084c4", marginTop: 10}}></TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`http://link.privacy.policy.com`)} style={{paddingTop: 12, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text style={{fontSize: 12, marginLeft: 10, width: "80%"}}>Tomei conhecimento da Política de Privacidade</Text>
      </TouchableOpacity>

      </View>
      <Image style={{marginTop: 20, justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>

      </View>

      <View style={{marginLeft: 25, marginRight: 25, borderTopWidth: 1, borderTopColor: "#e8e8e9", flexDirection: "row"}}>
        <View style={{flexDirection: "row", marginRight: 25,}}>
        <TouchableOpacity style={{width: 30, height: 30, borderWidth: 1, borderRadius: 10, borderColor: "#2084c4", marginTop: 10}}></TouchableOpacity>
      <View style={{paddingTop: 12, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text style={{fontSize: 12, marginLeft: 10, width: "90%"}}>Presto o meu consentimento, livre e voluntário, para a recolha e tratamento dos meus dados pessoais para o envio de comunicações próprias e de terceiros relativas a serviços, notícias, convites, eventos, e outras atividades relacionadas.</Text>
      </View>

      </View>

      </View>

      <LinearGradient style={{alignSelf: "center", marginTop: 30, width: "80%", marginBottom: 50, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#30a4fc', '#2084c4']}>
        <TouchableOpacity style={{padding: 10,}}><Text style={{color: "#fff", textAlign: "center"}} onPress={() => navigation.navigate("Nova Multa")}>Registar</Text></TouchableOpacity>
      </LinearGradient>
      </ScrollView>
    </View>
  )
}

export default RegisterScreen