import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'; //instalar

const HomeScreen = (props) => {

  // primeiro
  var [x, setX] = useState(1)
  var [y, setY] = useState(1)
  var [mT, setMT] = useState(-5)
  var [z, setZ] = useState(14)

    var fadeAnim = useRef(new Animated.Value(x)).current  // Initial
    var lerMais = useRef(new Animated.Value(x)).current  // Initial
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

          
        ).start();

      j()
    }

    const j = () => {
      if (x == -1) {
        setTimeout(() => {
          setPrimeiro("O que fazemos")
<<<<<<< HEAD
          
=======
>>>>>>> caf834add46feaa9045a3a8da12d64b97bf9b142
          setZ(14)
          setY(1)
          setMT(-5)
        }, 250);
      } else {
        setTimeout(() => {
          setPrimeiro("Gestão de multas, em especial as de velocidade, álcool e telemóvel.")
          setZ(11)
          setY(0)
          setMT(-15)
        }, 250);
          
      }
    }

    //segundo

    var [x2, setX2] = useState(1)
    var [y2, setY2] = useState(1)
    var [mT2, setMT2] = useState(-5)
    var [z2, setZ2] = useState(14)
  
      var fadeAnim2 = useRef(new Animated.Value(x2)).current  // Initial
      var lerMais = useRef(new Animated.Value(x2)).current  // Initial
      var [segundo, setSegundo] = useState("Vantagens")
      
     
      const f2 = () => {    
          Animated.timing(
  
            fadeAnim2,
            {
              toValue: -x2,
              duration: 500,
              useNativeDriver: true,
              
            },
            setX2(-x2),
  
            
          ).start();
  
        j2()
      }
  
      const j2 = () => {
        if (x2 == -1) {
          setTimeout(() => {
            setSegundo("Vantagens")
            setZ2(14)
            setY2(1)
            setMT2(-5)
          }, 250);
        } else {
          setTimeout(() => {
            setSegundo("Continue a conduzir e não perca pontos nem a carta de condução. Mude a sua relação com as autoridades. Tenha os documentos sempre consigo.")
            setZ2(10)
            setY2(0)
            setMT2(-30)
          }, 250);
            
        }
      }



    //terceiro

    var [x3, setX3] = useState(1)
    var [y3, setY3] = useState(1)
    var [mT3, setMT3] = useState(-5)
    var [z3, setZ3] = useState(14)
  
      var fadeAnim3 = useRef(new Animated.Value(x3)).current  // Initial
      var lerMais3 = useRef(new Animated.Value(x3)).current  // Initial
      var [terceiro, setTerceiro] = useState("Vantagens")
      var [terceiro2, setTerceiro2] = useState("93%")
      
     
      const f3 = () => {    
          Animated.timing(
  
            fadeAnim3,
            {
              toValue: -x3,
              duration: 500,
              useNativeDriver: true,
              
            },
            setX3(-x3),
  
            
          ).start();
  
        j3()
      }
  
      const j3 = () => {
        if (x3 == -1) {
          setTimeout(() => {
            setTerceiro("Vantagens")
            setTerceiro2("93%")
            setZ3(14)
            setY3(1)
            setMT3(0)
          }, 250);
        } else {
          setTimeout(() => {
            setTerceiro("Taxa de sucesso considerando o número de casos defendidos")
            setTerceiro2("")
            setZ3(10)
            setY3(0)
            setMT3(5)
          }, 250);
            
        }
      }


      //quarto

    var [x4, setX4] = useState(1)
    var [y4, setY4] = useState(1)
    var [mT4, setMT4] = useState(-5)
    var [z4, setZ4] = useState(14)
  
      var fadeAnim4 = useRef(new Animated.Value(x4)).current  // Initial
      var lerMais4 = useRef(new Animated.Value(x4)).current  // Initial
      var [quarto, setQuarto] = useState("Poupança")
      var [quarto2, setQuarto2] = useState("3000,00€")
      
     
      const f4 = () => {    
          Animated.timing(
  
            fadeAnim4,
            {
              toValue: -x4,
              duration: 500,
              useNativeDriver: true,
              
            },
            setX4(-x4),
  
            
          ).start();
  
        j4()
      }
  
      const j4 = () => {
        if (x4 == -1) {
          setTimeout(() => {
            setQuarto("Poupança")
            setQuarto2("3000,00€")
            setZ4(14)
            setY4(1)
            setMT4(0)
          }, 250);
        } else {
          setTimeout(() => {
            setQuarto("Considerando que continuará a conduzir, não perde pontos e não vê o seu seguro agravado.")
            setQuarto2("")
            setZ4(10)
            setY4(0)
            setMT4(0)
          }, 250);
            
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
          <Animated.Text style={{textAlign: "center", height: 150, marginTop: mT, fontSize: z, transform: [{scaleX: fadeAnim}]}}>{primeiro}</Animated.Text>
          <Text style={{position: "absolute", bottom: 10, right: 5, opacity: y}}>Ler +</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={f2} style={{padding: 10, height: 110, transform: [{scaleX: fadeAnim2}], paddingBottom: 50, borderRadius: 15, paddingTop: 50, marginLeft: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Animated.Text style={{textAlign: "center", height: 150, marginTop: mT2, fontSize: z2, transform: [{scaleX: fadeAnim2}]}}>{segundo}</Animated.Text>
          <Text style={{position: "absolute", bottom: 10, right: 5, opacity: y2}}>Ler +</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", justifyContent: "center",}}>
        <TouchableOpacity onPress={f3} style={{padding: 10, height: 80, transform: [{scaleX: fadeAnim3}], paddingTop: 15, borderRadius: 15,  marginRight: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Animated.Text style={{textAlign: "center",  marginTop: mT3, fontSize: z3, transform: [{scaleX: fadeAnim3}]}}>{terceiro}</Animated.Text>
          <Text style={{position: "absolute", bottom: 10, right: 5, opacity: y3}}>Ler +</Text>
          
          <Text style={{textAlign: "center", marginTop: 5, fontSize: 18, color: "green"}}>{terceiro2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={f4} style={{padding: 10, height: 80, transform: [{scaleX: fadeAnim4}], paddingTop: 15, borderRadius: 15, marginLeft: 10, width: 160, backgroundColor: "#f6f6f6"}}>
          <Animated.Text style={{textAlign: "center",  marginTop: mT4, fontSize: z4, transform: [{scaleX: fadeAnim4}]}}>{quarto}</Animated.Text>
          <Text style={{position: "absolute", bottom: 10, right: 5, opacity: y4}}>Ler +</Text>
          
          <Text style={{textAlign: "center", marginTop: 5, fontSize: 18, color: "green"}}>{quarto2}</Text>
        </TouchableOpacity>
      </View>

<<<<<<< HEAD
      <LinearGradient style={{alignSelf: "center", marginTop: "30%", width: 200, bottom: 0, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#30a4fc', '#2084c4']}>
        <TouchableOpacity style={{padding: 10}}><Text style={{color: "#fff", textAlign: "center"}}>Começar Aqui</Text></TouchableOpacity>
=======
      <LinearGradient style={{alignSelf: "center", marginTop: "30%", width: 150, bottom: 0, borderRadius: 35}} start={{x: 0, y: 0 }} end={{x: 1, y: 1}} colors={['#30a4fc', '#2084c4']}>
        <TouchableOpacity style={{padding: 10,}}><Text style={{color: "#fff", textAlign: "center"}}>Começar Aqui</Text></TouchableOpacity>
>>>>>>> caf834add46feaa9045a3a8da12d64b97bf9b142
      </LinearGradient>
      <Text style={{marginTop: 15, marginLeft: 15, marginRight: 15, textAlign: "center", color: "#8c8c8c"}}>Defenda-se! Não fique sem carta, não agrave os custos do seu seguro e não perca pontos.</Text>
    
    </SafeAreaView>
  )
}

export default HomeScreen