//import liraries
import React, { Component } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// create a component
const AddFriends = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Players 1</Text>
            <View style={styles.view}>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity style={styles.addButton}>
                    <Text style={{color:'white'}}>Add</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Categories')  }
            >
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop:100,
        backgroundColor: '#191B46',
    },
    input:{
        borderWidth:1,
        width:'90%',
        borderColor:'#dedede',
        flex:3,
        borderRadius: 10,
        margin:16,
        padding:10,
    },
    view:{
        width: '100%',
        alignItems: 'center',
        display:"flex",
        flexDirection:"row",
        // flex:3

    },
    title:{
        color:'white',
        fontSize:20,
        margin:16
    },
    avatar:{
        // flex:1
        margin:10,
        // padding:10,
        borderRadius:100,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    },
    addButton:{
        padding:15,
        margin:10,
        borderRadius: 10,
        flex:0.5,
        alignItems:'center',
        backgroundColor:'#35B4FF',

    }
});

//make this component available to the app
export default AddFriends;
