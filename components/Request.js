//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// create a component
const Request = ({ navigation, route }) => {
    const type = route.params
    console.log(type.opt);
    return (
        <SafeAreaView style={styles.container}>
            {type.opt == 'truth'
                ?<LinearGradient
                    colors={['#019CF5', '#016BF7']}
                    style={styles.backg}
                >
                    <Text style={styles.title}>It's a truth</Text>
                    <Text >Request</Text>
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

                    colors={['#FA696A', '#EB5856']}
                    style={styles.backg}
                >
                    <Text style={styles.title}>It's a dare   </Text>

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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    questionRequest:{
        color:'white'
    },
    backg:{
        flex: 1,
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // objectFit:'cover'
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
    title:{
        color:'white',
        fontSize:20,
        position:'absolute',
        top:32
    }


});

//make this component available to the app
export default Request;
