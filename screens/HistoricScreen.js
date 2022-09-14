import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HistoricScreen = () => {
  return (
    <View>
      <TouchableOpacity style={{borderBottomColor: "#e8e8e9", paddingLeft: 15, borderBottomWidth: 1, flexDirection: "row", padding: 10}}><Text style={{color: "#8c8c8c"}}>Registo Individual de Condutor</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomColor: "#e8e8e9", paddingLeft: 15, borderBottomWidth: 1, flexDirection: "row", padding: 10}}><Text style={{color: "#8c8c8c"}}>Processos</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomColor: "#e8e8e9", paddingLeft: 15, borderBottomWidth: 1, flexDirection: "row", padding: 10}}><Text style={{color: "#8c8c8c"}}>Notificações</Text></TouchableOpacity>
      <TouchableOpacity style={{borderBottomColor: "#e8e8e9", paddingLeft: 15, borderBottomWidth: 1, flexDirection: "row", padding: 10}}><Text style={{color: "#8c8c8c"}}>Reuniões</Text></TouchableOpacity>
    </View>
  )
}

export default HistoricScreen