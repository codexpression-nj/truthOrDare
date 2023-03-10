//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Request = ({navigation,route}) => {
    const type = route.params
    console.log(type.opt);
    return (
        <View style={styles.container}>
            <Text>Request</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Results')  }
            ><Text>Done</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Results')  }
            ><Text>Give up</Text></TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0092F5',
    },

});

//make this component available to the app
export default Request;
