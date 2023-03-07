//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Prompt = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
            <TouchableOpacity style={styles.truthBox}
                onPress={() => navigation.navigate('Request')}>
            <Text style={styles.text}>Truth</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.truthBox}>
            <Text style={styles.text}>Dares</Text>

            </TouchableOpacity>
            </View>
           
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
    truthBox:{
        width:'45%',
        height:150,
        margin:5,
        backgroundColor:'#F67913',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:5
    },
    text:{
        color:'white', fontSize:24,fontWeight:200
    }
  ,
    view:{
        flexDirection:'row',
    }
});

//make this component available to the app
export default Prompt;
