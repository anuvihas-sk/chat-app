import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native-web';
import { Image } from 'react-native';


const signIn = () => {
  return (
    <View className="flex-1">
      <StatusBar style="dark"/>
      <View style={{paddingTop: hp(9), paddingHorizontal: wp(2)}} className="flex-1 gap-12"/>
        <View className="items-center">
          <Image style={{height: hp(30)}} resizeMode="contain" source={require('../assets/images/logo.png')} />
        </View>

        <View className="gap-10">
          <Text style={{fontSize: wp(5)}} className="font-bold text-center">Sign In</Text>
        </View>
    </View>
  )
}

export default signIn
