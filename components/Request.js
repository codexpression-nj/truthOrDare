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
                    // Background Linear Gradient
                    // colors ={ type.opt ? 'magenta' : ['#019CF5', '#016BF7']}

                    colors={['#019CF5', '#016BF7']}
                    style={styles.backg}
                >
                    <Text>Request</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results')}
                    ><Text>Done</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results')}
                    ><Text>Give up</Text></TouchableOpacity>
                </LinearGradient>
                : <LinearGradient
                    // Background Linear Gradient
                    // colors ={ type.opt ? 'magenta' : ['#019CF5', '#016BF7']}

                    colors={['#FA696A', '#EB5856']}
                    style={styles.backg}
                >
                    <Text>Request</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results')}
                    ><Text>Done</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Results')}
                    ><Text>Give up</Text></TouchableOpacity>
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
    backg:{
        flex: 1,
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // objectFit:'cover'
    }

});

//make this component available to the app
export default Request;
