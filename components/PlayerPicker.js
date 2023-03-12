//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const PlayerPicker = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
             onPress={() => navigation.navigate('Results')} 
            style={styles.endGameBtn}><Text>End Game</Text></TouchableOpacity>
            <Text >PlayerPicker</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Prompt')} >
                <Text>Play</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191B46',
    },
    endGameBtn:{
        backgroundColor:'red',
        position:'absolute',
        top:32,
        right:0,
        margin:16,
        padding:10
    }
});

//make this component available to the app
export default PlayerPicker;
