import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Soal4Rfc from './src/component/Soal4Rfc';
import Soal4Rcc from './src/component/Soal4Rcc';
import Soal1 from './src/component/Soal1';
import Soal2 from './src/component/Soal2';
import Soal3 from './src/component/Soal3';


export default function App() {
  return (
    <View style={styles.container}>
  {/* <Soal1/> */}
  {/* <Soal2/> */}
  <Soal3/>
  {/* <Soal4Rcc/> */}
  {/* <Soal4Rfc/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
