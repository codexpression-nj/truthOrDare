//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const PlayerPicker = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>PlayerPicker</Text>
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
});

//make this component available to the app
export default PlayerPicker;
