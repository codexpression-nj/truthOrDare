//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { categories } from '../service/data';

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
            <FlatList
                data={category}
                renderItem={({ item }) => <Item title={item} />}
                numColumns={2}

            />
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
    }
    ,
    title: {
        color: 'white',
        margin: 16,
        fontSize: 20
    }
});

//make this component available to the app
export default Categories;
