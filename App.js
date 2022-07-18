import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import MenuBar from './src/components/MenuBar';
import Header from './src/components/Header';
import Jadwal from './src/components/Jadwal';

const App = () => {
  const [pencarian, SetPencarian] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4', }}>
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10, }}>
        <Header pencarian={pencarian} SetPencarian={SetPencarian} />
        <Jadwal />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: '#0082F7', fontWeight: 'bold' }}>Jadwal Pertemuan</Text>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
            <Text style={{ color: '#FDB436', fontWeight: 'bold' }}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MenuBar />
    </View >
  );
};

export default App;