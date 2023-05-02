import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Myfriends from './componen/const-data/friend/Myfriends';
import Header from './Clone_IG/Header';
import Story from './Clone_IG/Story';
import Feed from './Clone_IG/Feed';



export default function App() {
  return (
    <View style={{flex:10}}>
      <View>  
        <Header/>
      </View>

    <View style={{flex:1}}>
      <Story />
    </View>

    <View style={{flex:7}}>
      <Feed />
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});