import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native-web';
import { Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';


const signIn = () => {
  return (
    <View className="flex-2">
      <StatusBar style="dark"/>
      <View style={{paddingTop: hp(8), paddingHorizontal: wp(8)}} className="flex-1 gap-12"/>
        <View className="items-center">
          <Image style={{height: hp(30)}} resizeMode="contain" source={require('../assets/images/logo.png')} />
        </View>

        <View className="gap-10">
          <Text style={{fontSize: hp(5)}} className="font-bold text-center">Sign In</Text>
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-gray-100 rounded-xl">
            <Octicons name="mail" size={hp(2.7)} className="px-4 py-4" color="black" />
          </View>
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-gray-100 rounded-xl">
            <Octicons name="mail" size={hp(2.7)} className="px-4 py-4" color="black" />
          </View>
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-gray-100 rounded-xl">
            <Octicons name="mail" size={hp(2.7)}  className="px-4 py-4" color="black" />
          </View>
        </View>
    </View>
  )
}

export default signIn
