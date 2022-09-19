import { View, Text, TouchableOpacity, ScrollView, Linking, Image, Switch } from 'react-native'
import React, {useState} from 'react'

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
    <View style={{margin: 15}}>
      <View style={{borderBottomColor: "#000", borderBottomWidth: 1, borderBottomColor: "#e8e8e9", marginLeft: -15, marginRight: -15}}>
      <Text style={{fontSize: 18, marginTop: 25, paddingLeft: 15, marginBottom: 10}}>UTILIZADOR</Text>
      </View>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between", }}>
        <Text>Código Referral</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={{justifyContent: "flex-end", marginRight: 10, color: "#8c8c8c" }}>TESTE1234</Text>
          <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${999999999}`)} style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text>Telemóvel SOS</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={{justifyContent: "flex-end", marginRight: 10, color: "#8c8c8c" }}>999999999</Text>
          <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`https://apps.apple.com/pt/app/multa-zero-mz/id1535432355`)} style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text>Classificar</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      
      <View style={{borderBottomColor: "#000", borderBottomWidth: 1, borderBottomColor: "#e8e8e9", marginLeft: -15, marginRight: -15}}>
      
      <Text style={{fontSize: 18, marginTop: 25, paddingLeft: 15, marginBottom: 10}}>INFORMAÇÕES</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(`https://www.dotdashmeredith.com`)} style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text>Sobre Multa Zero</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:test@multazero.pt`)} style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text>Contacte-nos</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`http://link.privacy.policy.com`)} style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text>Privacidade</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`http://link.faqs.com`)} style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text>FAQs</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>

      <View style={{borderBottomColor: "#000", borderBottomWidth: 1, borderBottomColor: "#e8e8e9", marginLeft: -15, marginRight: -15}}>

      <Text style={{fontSize: 18, marginTop: 25, paddingLeft: 15, marginBottom: 10}}>NOTIFICAÇÕES</Text>
      </View>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text style={{alignSelf: "center"}}>Mensagens informativas</Text>
        <View >
        <Switch
        trackColor={{ false: "#e8e8e9", true: "#0f0" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#e8e8e9"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between", }}>
        <Text style={{alignSelf: "center"}}>Atualizações dos casos</Text>
        <Switch
        trackColor={{ false: "#e8e8e9", true: "#0f0" }}
        thumbColor={isEnabled2 ? "#fff" : "#fff"}
        ios_backgroundColor="#e8e8e9"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
      </TouchableOpacity>

      
    </View>
    <View>
      <TouchableOpacity style={{ marginTop: 15, borderBottomWidth: 1, borderBottomColor: "#e8e8e9", borderTopWidth: 1, borderTopColor: "#e8e8e9", alignItems: "center", width: "100%", paddingTop: 10, paddingBottom: 10}}><Text style={{color: "#30a4fc"}}>Terminar Sessão</Text></TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 25, marginBottom: 15, borderBottomWidth: 1, borderBottomColor: "#e8e8e9", borderTopWidth: 1, borderTopColor: "#e8e8e9", alignItems: "center", width: "100%", paddingTop: 10, paddingBottom: 10}}><Text style={{color: "#f00"}}>Remover Conta</Text></TouchableOpacity>
      <Text style={{alignSelf: "center", marginBottom: 15, color: "#8c8c8c"}}>Versão 1.0.3</Text>
    </View>
    </ScrollView>
  )
}

export default SettingsScreen