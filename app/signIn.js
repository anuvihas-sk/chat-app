import {  Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar} from 'expo-status-bar';
import { Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const signIn = () => {
  const router = useRouter();
  return (
    <View className="flex-2 pt-10">
      <StatusBar style="dark"/>
      <View style={{paddingTop: hp(8), paddingHorizontal: wp(8)}} className="flex-1 gap-12"/>
        <View className="items-center">
          <Image style={{height: hp(30)}} resizeMode="contain" source={require('../assets/images/logo.png')} />
        </View>

        <View className="gap-5 p-6">
          <Text style={{fontSize: hp(5)}} className="font-bold text-center">Sign In</Text>

          <View className="gap-4">
            <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-gray-100 rounded-xl">
              <Octicons name="mail" size={hp(2.7)} className="px-4 py-5" color="black" />
              <TextInput style={{fontSize: hp(2.5)}} className="flex-1" placeholder="Email address" />
            </View>

            <View className="gap-2">
              <View style={{height: hp(7)}} className="flex-row gap-4 px-5 bg-gray-100 rounded-xl">
                <Octicons name="lock" size={hp(2.7)} className="px-4 py-5" color="black" />
                <TextInput style={{fontSize: hp(2.5)}} className="flex-1" placeholder="Password" />
              </View>
              <Text style={{fontSize: hp(1.7)}} className="font-semibold text-right text-black">Forgot password?</Text>
            </View>

            <TouchableOpacity >
              <Text style={{fontSize: hp(2.5)}} className="font-bold text-center text-white bg-black rounded-xl py-4">Sign In</Text>
            </TouchableOpacity>
          
            <View className="flex-row gap-2 justify-center">
              <Text style={{fontSize: hp(1.7)}} className="font-semibold text-center text-black">Don't have an account?</Text>
              <Pressable onPress={() => router.push('/signUp')}>
                <Text style={{fontSize: hp(1.7)}} className="font-bold text-center text-red-600">Sign Up</Text>
              </Pressable>
            </View>

          </View>
        </View>
    </View>
  )
}

export default signIn
