//import liraries
import React, { Component, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// create a component
let nextId = 0;
const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const AddFriends = ({ navigation }) => {
    const [name, setName] = useState('');
    const [players, setPlayers] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Players {nextId +1}</Text>
            <View style={styles.view}>
                <TextInput style={styles.input} onChangeText={e => setName(e)} value={name}
                ></TextInput>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        console.log(name);
                        setPlayers([
                            ...players,
                            { id: nextId++, name: name }
                        ]);
                        setName('')

                    }
                    }

                >
                    <Text style={{ color: 'white' }}>Add</Text>
                </TouchableOpacity>
               
          
            </View>
            <FlatList
                    data={players}
                    renderItem={({ item }) => <Item title={item.name} />}
                    keyExtractor={item => item.id}
                />
            <TouchableOpacity
                style={styles.nextbtn}
                onPress={() => navigation.navigate('Categories')}
            >
                {/* <Text>Continue</Text> */}
                <AntDesign name="arrowright" size={32} color="#F67913" />
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
        paddingTop: 100,
        backgroundColor: '#191B46',
    },
    input: {
        borderWidth: 1,
        width: '90%',
        borderColor: '#dedede',
        flex: 3,
        borderRadius: 10,
        margin: 16,
        padding: 10,
        color: 'white'
    },
    view: {
        width: '100%',
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        // flex:3

    },
    title: {
        color: 'white',
        fontSize: 20,
        margin: 16
    },
    avatar: {
        // flex:1
        margin: 10,
        // padding:10,
        borderRadius: 100,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        padding: 15,
        margin: 10,
        borderRadius: 10,
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: '#F67913',

    },
    nextbtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 10
    }
});

//make this component available to the app
export default AddFriends;
