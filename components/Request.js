//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Request = ({navigation,route}) => {
    const pickedCategory = route.params
    console.log(pickedCategory.categoryTitle);

    return (
        <View style={styles.container}>
            <Text>Request</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Request;
