import React from 'react';
import { View,Text, StyleSheet, Image} from 'react-native';

const Soal3 = () => {
  return (
      <View style={style.body}>
        <View style={{flex:1, justifyContent: "center"}}>
           <Image source={require('../../assets/LOGO_IBIK.png')} style={{width:150, height:150}} />
        </View>
        <Text style={{marginBottom: 100, color:'white'}}>loading...</Text>
      </View>
  );
}

export default Soal3;

const style = StyleSheet.create({
  body :{
    flex:1,
    alignItems: 'center',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "purple"
  }
});
