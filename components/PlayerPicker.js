//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dots from 'react-native-dots-pagination';

// create a component
const PlayerPicker = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
             onPress={() => navigation.navigate('Results')} 
            style={styles.endGameBtn}><Text style={{color:'red'}}> End Game</Text>
            </TouchableOpacity>

            <Text style={{color:'white'}}>PlayerPicker</Text>
            <TouchableOpacity
                style={styles.playBtn}
                onPress={() => navigation.navigate('Prompt')} >
                <Text style={{color:'white'}}>Play</Text>
            </TouchableOpacity>
            {/* <View style={styles.dot}>
            <Dots activeDotHeight={20} width={400}  activeColor={'#F67913'}  length={4} active={2} />

            </View> */}
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
        // backgroundColor:'red',
        position:'absolute',
        top:32,
        right:0,
        margin:16,
        padding:10,
        borderWidth:1,
        borderColor:'red'
    },
    playBtn:{
        backgroundColor:'#F67913',
        padding: 15,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    dot:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
    },
});

//make this component available to the app
export default PlayerPicker;
