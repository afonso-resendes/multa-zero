import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'; //instalar

const HomeScreen = () => {

  var [x, setX] = useState(1)
  var [y, setY] = useState(1)
  var [z, setZ] = useState(14)

    var fadeAnim = useRef(new Animated.Value(x)).current  // Initial
    var [primeiro, setPrimeiro] = useState("O que fazemos")
    
   
    const f = () => {    
        Animated.timing(

          fadeAnim,
          {
            toValue: -x,
            duration: 500,
            useNativeDriver: true,
            
          },
          setX(-x),
          setY(-y)

          
        ).start();

      j()
    }

    const j = () => {
      if (x == -1) {
        setPrimeiro("O que fazemos")
        setZ(14)
      } else {
        setPrimeiro("Gestão de multas, em especial as de velocidade, álcool e telemóvel.")
        setZ(10)
        
      }
    }
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:true,
        });
    }, [])
  return (
    <SafeAreaView style={{backgroundColor: "#fff", height: "150%", flex: 1}}>
      <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 20}}>
        <TouchableOpacity onPress={f} style={{padding: 10, height: 110, transform: [{scaleX: fadeAnim}], paddingBottom: 50, borderRadius: 15, paddingTop: 50, marginRight: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center", height: 150, marginTop: -5, fontSize: z, transform: [{scaleX: x}]}}>{primeiro}</Text>
          <Text style={{position: "absolute", bottom: 10, right: 5, opacity: y}}>Ler +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, paddingBottom: 50, borderRadius: 15, paddingTop: 50, marginLeft: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>Vantagens</Text>
          <Text style={{position: "absolute", bottom: 10, right: 5}}>Ler +</Text>

        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", justifyContent: "center",}}>
        <TouchableOpacity style={{padding: 10, height: 80, paddingTop: 15, borderRadius: 15,  marginRight: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>Sucesso</Text>
          <Text style={{position: "absolute", bottom: 10, right: 5}}>Ler +</Text>
          
          <Text style={{textAlign: "center", marginTop: 5, fontSize: 18, color: "green"}}>93%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, paddingTop: 15, height: 80, borderRadius: 15,  marginLeft: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Text style={{textAlign: "center"}}>Poupança</Text>
          <Text style={{position: "absolute", bottom: 10, right: 5}}>Ler +</Text>

          <Text style={{textAlign: "center", marginTop: 5, fontSize: 18, color: "green"}}>3000.00€</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient style={{alignSelf: "center", marginTop: "30%", width: 150, bottom: 0, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#30a4fc', '#2084c4']}>
        <TouchableOpacity style={{padding: 10,}}><Text style={{color: "#fff", textAlign: "center"}} onPress={() => navigation.navigate("Nova Multa")}>Começar Aqui</Text></TouchableOpacity>
      </LinearGradient>
      <Text style={{marginTop: 15, marginLeft: 15, marginRight: 15, textAlign: "center", color: "#8c8c8c"}}>Defenda-se! Não fique sem carta, não agrave os custos do seu seguro e não perca pontos.</Text>
    
    </SafeAreaView>
  )
}

export default HomeScreen