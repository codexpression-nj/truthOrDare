//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { categories } from '../service/data';
import Dots from 'react-native-dots-pagination';

// create a component
const Categories = ({ navigation }) => {
    const [category] = useState(categories)
    const Item = ({ title }) => (
        <View style={styles.itemBox}>
            <TouchableOpacity
                style={[styles.itemCategory, { backgroundColor: title.backgroundColor }]}
                onPress={() => navigation.navigate('PlayerPicker', { categoryTitle: title })}
            >
                <Text style={styles.title}>{title.name}</Text>
            </TouchableOpacity>

        </View>
    );
    return (
        <View style={styles.container}>

            <Text style={styles.topTitle}>Select Category</Text>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <FlatList
                    data={category}
                    renderItem={({ item }) => <Item title={item} />}
                    numColumns={2}
                />
            </View>
            {/* <View style={styles.dot}>
            <Dots activeDotHeight={20} width={400}  activeColor={'#F67913'}  length={4} active={1} />

            </View> */}

        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#191B46',
        paddingTop: 100,
    },
    itemCategory: {
        height: 100,
        width: 180,
        backgroundColor: 'red',
        // justifyContent:'space-around'
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    itemBox: {
        //    justifyContent:'space-v',
        alignItems: 'center',
        //    width: 1,
    },
    dot:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
        margin: 10,
     
    }
    ,
    title: {
        color: 'white',
        margin: 16,
        fontSize: 20
    },
    topTitle: {
        color: 'white',
        fontSize: 20,
        margin: 16
    },
});

//make this component available to the app
export default Categories;
