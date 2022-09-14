import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <ScrollView>
    <View style={{margin: 15}}>
      <Text style={{fontSize: 20, marginTop: 25, }}>Utilizador</Text>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Código Referral</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Telemóvel SOS</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Classificar</Text></TouchableOpacity>
      
      <Text style={{fontSize: 20, marginTop: 25, }}>Informações</Text>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Sobre Multa Zero</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Contacte-nos</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Privacidade</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>FAQs</Text></TouchableOpacity>

      <Text style={{fontSize: 20, marginTop: 25, }}>Notificações</Text>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Mensagens informativas</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, paddingBottom: 10}}><Text>Atualizações dos casos</Text></TouchableOpacity>

      
    </View>
    <View>
      <TouchableOpacity style={{ marginTop: 15, borderBottomWidth: 1, borderBottomColor: "#e8e8e9", borderTopWidth: 1, borderTopColor: "#e8e8e9", alignItems: "center", width: "100%", paddingTop: 10, paddingBottom: 10}}><Text style={{color: "#00bfff"}}>Terminar Sessão</Text></TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 25, marginBottom: 25, borderBottomWidth: 1, borderBottomColor: "#e8e8e9", borderTopWidth: 1, borderTopColor: "#e8e8e9", alignItems: "center", width: "100%", paddingTop: 10, paddingBottom: 10}}><Text style={{color: "#f00"}}>Remover Conta</Text></TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default SettingsScreen