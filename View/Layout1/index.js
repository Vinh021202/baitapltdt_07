import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity , SafeAreaView} from 'react-native';


const Layout1 = ({ navigation }) => {
    return (
        <SafeAreaView style = {{
            padding: 15, flex : 1 ,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
         
                <View style={{
                    marginTop : 15,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignContent:'center',
                }}>
                 <Text style={{
                     fontWeight:700,
                     fontSize:20,
                     textAlign:'center',
                     fontFamily:'VT323'
                 }}>A premium online store for sporter and their stylish choice</Text>
                </View>
                <View style={{
                     width:360,
                     height:380,
                     backgroundColor:'#E941411A',
                     borderRadius:50,
                     marginTop : 25,
                }}>
             <Image style={{
                  height:270,
                  width:290,
                  top:50,
                  left:30
             }}  source={require('../../assets/bifour_-removebg-preview.png')} ></Image>
            </View>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                top:10,
                left:12,
                height:50,
                width:350,
            }}>
                <Text style={{
                    fontFamily:'Ubuntu',
                    fontSize:26,
                    lineHeight:26,
                    textAlign:'center',
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}>POWER BIKE {'\n'} SHOP</Text>
            </View>
            <View style={{
                backgroundColor:'#E94141',
                  padding: 7,
                  borderRadius: 30,
                  width: '100%',
                  alignItems: 'center',
            }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Layout2")}}>
            <Text style={{
                 color:'white',
                 fontSize:25,
                 fontWeight:500,
                 fontFamily:'Ubuntu',
                 textAlign:'center',
                 
            }}>Get Started</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>
    );
}
export default Layout1;