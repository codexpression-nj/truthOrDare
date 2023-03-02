//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from 'react-native';
import { categories } from '../service/data';

// create a component
const Categories = ({ navigation }) => {
    const [category] = useState(categories)
    const Item = ({title}) => (
        <View style={styles.item}>
            <TouchableOpacity
            onPress={() =>  navigation.navigate('Request',{categoryTitle : title})}
                >
            <Text style={styles.title}>{title}</Text>

            </TouchableOpacity>
            
        </View>
      );
    return (
        <View style={styles.container}>
            <FlatList
                // horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
                data={category} 
                renderItem={({item}) => <Item title={item} />}
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
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Categories;
