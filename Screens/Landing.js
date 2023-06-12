import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

export default function Landing({navigation}) {
  return (
    <ImageBackground blurRadius={10} source= {{uri:"https://img.freepik.com/free-vector/complex-background-with-pale-details_23-2149118162.jpg?w=2000"}}
    style={{height:'100%', width:'100%'}}
    >

    <View style={{flex: 1,justifyContent:'center', alignItems:'center', }}>


<Image  style={{width:200, height:200, borderRadius:100}} source={{uri:'https://img.freepik.com/free-vector/qr-code-scanning-concept-with-characters_23-2148631693.jpg?w=2000'}} />
      <View> 
      <Text style={{ color: 'black', fontSize: 38, fontWeight: '900', textAlign: 'center' }}>Lets Get {'\n'} You Started </Text>
      </View>
      <StatusBar style="auto" />
      
     <TouchableOpacity  onPress={() => {navigation.navigate("Home")}} style={{
      marginVertical:20,
      height:40,
      padding: 10,
      paddingHorizontal: 60 ,
      marginHorizontal:10,
      backgroundColor:'#3EB489',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
      }}> 
      <Text style={{textTransform:'uppercase',color:'black',fontSize:18, fontWeight: '900',
}}>
      NEXT
      </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>

      
  );
}
