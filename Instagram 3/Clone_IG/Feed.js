import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { UserFeedObj } from './Data';

const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <Image style={styles.image} source={require('../assets/boy.png')} />
            <Text style={styles.username}>Zackking</Text>
          </View>
          <Image style={styles.postImage} source={require('../assets/meme-1.jpg')} />
          
        </View>
        <View style={styles.actions}>
          <View style={styles.action}>
            <FontAwesome5 name="heart" color="black" size={20} />
          </View>

          <View style={styles.action}>
            <FontAwesome5 name="comment" color="black" size={20} />
          </View>

          <View style={styles.action}>
            <FontAwesome5 name="paper-plane" color="black" size={20} />
          </View>
        </View>
        <Text style={styles.actionText}><Text style={styles.boldText}>Zackking </Text>SIUUUUUU 7-0 dibantai ipul</Text>

        <View style={styles.container}>
          <View style={styles.userInfo}>
            <Image style={styles.image} source={require('../assets/evos.jpg')} />
            <Text style={styles.username}>evosesports</Text>
          </View>
          <Image style={styles.postImage} source={require('../assets/meme-2.jpg')} />
        </View>

        <View style={styles.actions}>
          <View style={styles.action}>
            <FontAwesome5 name="heart" color="black" size={20} />
          </View>

          <View style={styles.action}>
            <FontAwesome5 name="comment" color="black" size={20} />
          </View>

          <View style={styles.action}>
            <FontAwesome5 name="paper-plane" color="black" size={20} />
          </View>
        </View>
        <Text style={styles.actionText}><Text style={styles.boldText}>evosesports </Text>EVOS Legends 
        mampu membalaskan dendam regular season dan mengalahkan Raja dari 
        segala Raja dengan skor 3-2!🔥🔥Yuk kawal terus EVOS Legends sampai final, fams!</Text>
       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 2,
    marginLeft: 6,
    borderColor: 'white',
    borderRadius: 100,
  },
  username: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  postImage: {
    width: '100%',
    height: 400,
    marginTop: 10,
    resizeMode: 'cover',
  },
  icon: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  action: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 1,
  },
actionText: {
  fontSize: 16,
},
boldText: {
  fontWeight: 'bold',
  }
  
});

export default Feed;
