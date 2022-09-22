import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const NovaMatricula = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <View>
      <TextInput
        style={{backgroundColor: "transparent", marginTop: "15%", marginLeft: 25, marginRight: 25, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Matrícula"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />
      <TextInput
        style={{backgroundColor: "transparent", marginTop: 15, marginLeft: 25, marginRight: 25, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Marca do veículo"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />

      <TextInput
        style={{backgroundColor: "transparent", marginTop: 30, marginLeft: 25, marginRight: 25, marginBottom: 15, paddingBottom: 10, borderBottomColor: "#e8e8e9", borderBottomWidth: 1}}
        placeholder="Marca do veículo"
        placeholderTextColor="#8c8c8c"
        keyboardType="twitter"
      />

      <View style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, marginLeft: 25, marginRight: 25, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between",}}>
        <Text style={{alignSelf: "center", color: "#333"}}>Data de Compra</Text>
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
      <View style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9", paddingTop: 10, marginLeft: 25, marginRight: 25, marginTop: 15, paddingBottom: 10, flexDirection: "row", justifyContent: "space-between", }}>
        <Text style={{alignSelf: "center", color: "#333"}}>Data de Venda</Text>
        <Switch
        trackColor={{ false: "#e8e8e9", true: "#0f0" }}
        thumbColor={isEnabled2 ? "#fff" : "#fff"}
        ios_backgroundColor="#e8e8e9"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
      </View>
    </View>
  )
}

export default NovaMatricula