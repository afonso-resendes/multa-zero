import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'



const HistoricScreen = () => {

  
  
  return (
    <View style={{paddingLeft: 15, paddingRight: 15, backgroundColor: "#fff", flex: 1}}>
      <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}>
        <Text style={{color: "#8c8c8c"}}>Registo Individual de Condutor</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}>
        <Text style={{color: "#8c8c8c"}}>Processos</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}>
        <Text style={{color: "#8c8c8c"}}>Notificações</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}>
        <Text style={{color: "#8c8c8c"}}>Reuniões</Text>
        <Image style={{justifyContent: "flex-end", width: 15, height: 15}} source={require("../../imgs/IconCrumbsArrow.png")}/>
      </TouchableOpacity>
      </View>
  )
}

export default HistoricScreen