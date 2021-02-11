import React, {useState} from 'react';
import { View,Text, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text
            style={{
              color: "whitesmoke",
              fontWeight: "500",
              fontSize: 70,
              letterSpacing: 35,
            }}
          >
            CAPA
          </Text>
          <Text style={{ color: "whitesmoke" }}>
            #nofilter #analog #filmsnotdead
          </Text>
        </View>
        <ImageBackground
          source={require("../../assets/capa.jpg")}
          style={styles.image}
        >
          <Text style={{ color: "white" }}>EMAIL</Text>
          <TextInput
            style={styles.email}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="example@gmail.com"
            placeholderTextColor="white"
            clearTextOnFocus={true}
          />
          <Text style={{ color: "white" }}>Password</Text>
          <TextInput
            style={styles.pass}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="..........."
            placeholderTextColor="white"
            clearTextOnFocus={true}
          />
          <Text style={{ color: "white" }}>New Account</Text>
        </ImageBackground>
      </SafeAreaView>
    );    
}

const styles = StyleSheet.create({
  container: {},
  header:{
      height:250,
      backgroundColor:'black',
      justifyContent:'center'
  },
  image: {
    height:550,
    resizeMode: "contain",
    justifyContent: "center",
  },
});