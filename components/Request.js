//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

// create a component
const Request = ({ navigation, route }) => {
    const type = route.params
    console.log(type.opt);
    return (
        <SafeAreaView style={styles.container}>
            {type.opt == 'truth'
                ?<LinearGradient
                    colors={['#019CF5', '#016BF7','#0052FF']}
                    style={styles.backg}
                >
                    <View  style={styles.titleView}>
                    <Text style={styles.title}>It's a truth</Text>
                    <Image  source={require('../assets/emojiTruth.png')} style={styles.emoji}/>
                    <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
                    </View>

                    <Text style={styles.questionRequest}>Request</Text>
                    <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.doneBtn}
                        onPress={() => navigation.navigate('Results')}
                    ><Text>Done</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.giveupBtn}
                        onPress={() => navigation.navigate('Results')}
                    >
                        <Text style={{color:'white'}}>Give up</Text></TouchableOpacity>
                    </View>
                </LinearGradient>
                : <LinearGradient
                    // Background Linear Gradient
                    // colors ={ type.opt ? 'magenta' : ['#019CF5', '#016BF7']}

                    colors={['#F1959B', '#F07470','#EA4C46']}
                    style={styles.backg}
                >
                    <View>
                    <Text style={styles.title}>It's a dare   </Text>
                    <Image  source={require('../assets/emojidare.png')} style={styles.emoji}/>
                    </View>
        
                    <Text style={styles.questionRequest}>Request</Text>
                    <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.doneBtn}
                        onPress={() => navigation.navigate('PlayerPicker')}
                    ><Text>Done</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.giveupBtn}
                        onPress={() => navigation.navigate('PlayerPicker')}
                    >
                        <Text style={{color:'white'}}>Give up</Text></TouchableOpacity>
                    </View>
                    
                </LinearGradient>
            }
        </SafeAreaView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    questionRequest:{
        color:'white'
    },
    backg:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneBtn:{
        backgroundColor:'white',
        width: '80%',
        padding: 15,
        margin: 5,
        borderRadius: 10,
 
        alignItems: 'center',
    },
    giveupBtn:{
        padding: 15,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        backgroundColor:'#191B46',
   
    },
    btns:{
        position:'absolute',
        bottom:0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleView:{
        alignSelf:'center',
        // position:'absolute',
        // top:80,
        alignContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:20,
    }
    ,
    emoji:{
        width: 60,
        height: 60,
        margin:20,
        alignItems:'center'
    }
});

//make this component available to the app
export default Request;
