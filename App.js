import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import Landing from './Screens/Landing';
import Home from './Screens/Home';
import Qr from './Screens/Qr';
import SaveScreen from './Screens/SaveScreen';
export default function App() {

  const MainNavigator = createStackNavigator();

  return (

    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{ headerShown: false ,  headerTitleAlign: 'center'}}>
        <MainNavigator.Screen name='Landing' component={Landing} />
        <MainNavigator.Screen name='Home' component={Home} options={{ headerShown: true }}  />
        <MainNavigator.Screen name='Qr' component={Qr} options={{ headerShown: true }}   />
        <MainNavigator.Screen name='SaveScreen' component={SaveScreen} options={{ headerShown: true }}   />

        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
      
  );
}

