import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Jadwal = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#0082F7', fontWeight: 'bold', }}>Jadwal Pertemuan</Text>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
                    <Text style={{ color: '#FDB436', fontWeight: 'bold', }}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', elevation: 10, marginTop: 10, }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 10 }} colors={['#018BF7', '#00BAF7',]}>
                    <TouchableOpacity style={{ padding: 20, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={require('../image/Abera.jpg')} style={{ width: 70, height: 100, borderRadius: 35, borderColor: '#FFFFFF', borderWidth: 2 }} />
                            <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Mohamad Irfan Maulana, S.T.</Text>
                                <Text style={{ color: '#F5F5F5', fontWeight: 'bold', fontSize: 14, marginLeft: 10 }}>Sarjana Teknik</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <View style={{ flexDirection: 'row' }}>
                            </View>
                            <View style={{ marginTop: 15, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="time" size={23} color="#bdbdbd" />
                                    <Text style={{ color: '#F5F5F5', fontWeight: 'bold', marginLeft: 10, fontSize: 14, }}>18 April 2022</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="briefcase" size={23} color="#bdbdbd" />
                                    <Text style={{ color: '#F5F5F5', fontWeight: 'bold', marginLeft: 10, fontSize: 14, }}>Manager Mobile Developer PT Media Baru Internasional </Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Icon name="chevron-forward-circle" size={23} color="#FFFFFF" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

export default Jadwal;