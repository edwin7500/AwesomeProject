import { StatusBar } from 'expo-status-bar';
import {Text, View,TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (

    <View style={{flex: 1,justifyContent:'center', alignItems:'center'}}>
      <View>
        <TouchableOpacity  onPress={() => {navigation.navigate("Qr")}}
        >
            <Text style={{backgroundColor: "#3EB489", 
                padding: 10,
                paddingHorizontal: 60 ,
                fontWeight: '900',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10 ,
                marginTop: 20,
                fontSize:20,
                textAlign:'center'
              }}
            >QR Generator</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => {navigation.navigate("SavedQR")}}
        >
            <Text style={{backgroundColor: "#3EB489", 
                padding: 10,
                paddingHorizontal: 60 ,
                fontWeight: '900',
                flexDirection: 'row',
                alignItems: 'center',
                fontSize:20,
                borderRadius: 10 ,
                marginTop: 20,
                textAlign:'center'

              }}
            >My Scans</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => {navigation.navigate("SaveScreen")}}
        >
            <Text style={{backgroundColor: "#3EB489", 
                padding: 10,
                paddingHorizontal: 60 ,
                fontWeight: '900',
                flexDirection: 'row',
                fontSize:20,
                alignItems: 'center',
                borderRadius: 10 ,
                marginTop: 20,
                textAlign:'center'

              }}
            >My QR</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />    

      {/* <QRCode value='https://www.youtube.com/'/> */}

    </View>
    

      
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
