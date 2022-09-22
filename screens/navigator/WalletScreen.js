import { View, Text, Touchable, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const WalletScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
    <View style={{height: "100%", top: "27.5%", marginLeft: 15, marginRight: 15}}>
      <Image style={{width: 120, height: 120, alignSelf: "center"}} source={require("../../imgs/IconTabBarDriverWaller.png")} />
      <Text style={{textAlign: "center", marginTop: 15, }}>Não tem registos na carteira de condutor.</Text>
      <View style={{borderBottomWidth: 1, borderBottomColor: "#e8e8e9"}}><Text style={{textAlign: "center", marginBottom: 15, marginTop: 8, fontSize: 12, color: "#8c8c8c"}}>Utilize o botão "+" para adicionar novo registo do veículo.</Text>
    </View>
    </View>
    </View>
  
  )
}

export default WalletScreen