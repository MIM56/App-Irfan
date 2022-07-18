import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', elevation: 3, paddingTop: 7, paddingBottom: 7, marginHorizontal: 20, marginBottom: 10, borderRadius: 5, }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 20, }}>
                <Icon name="home" size={23} color="#87CEEB" />
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 10, }}>
                <Icon name="calendar" size={23} color="#87CEEB" />
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Janji</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 10, }}>
                <Icon name="chatbubbles" size={23} color="#87CEEB" />
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Pesan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 10, }}>
                <Icon name="person" size={23} color="#87CEEB" />
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>User</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuBar;