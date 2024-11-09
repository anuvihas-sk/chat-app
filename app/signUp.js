import {  Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar} from 'expo-status-bar';
import { Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Alert } from 'react-native';
import CustomKeyboard from '../components/CustomKeyboard';
import { useAuth } from '../context/authContext';
import { db } from '../fireBase';

const signUp = () => {
  const router = useRouter();
  const mailRef = useRef("");
  const {register} = useAuth();
  const passwordRef = useRef("");
  const confirmpasswordRef = useRef("");

  const handleRegister = async () => {
    // Check if required fields are filled
    if (!mailRef.current || !passwordRef.current || !confirmpasswordRef.current) {
        Alert.alert("Sign Up", "Please fill all the fields!");
        return;
    }

    // Ensure password confirmation
    if (passwordRef.current !== confirmpasswordRef.current) {
        Alert.alert("Sign Up", "Passwords do not match!");
        return;
    }

    console.log("Attempting to register with email:", mailRef.current);

    // Call register and log the response
    let response = await register(mailRef.current, passwordRef.current, confirmpasswordRef.current);
    console.log("Register response:", response);

    // Check if registration was successful
    if (response?.success) {
        console.log("Registration successful, navigating to sign-in.");
        router.push("/signIn");
    } else {
        console.log("Registration failed with message:", response?.msg);
        Alert.alert("Sign Up Error", response?.msg || "Registration failed");
    }
};

  return (
    <CustomKeyboard>
      <StatusBar style="dark"/>
      <View style={{paddingTop: hp(8), paddingHorizontal: wp(8)}} className="flex-1 gap-12"/>
        <View className="items-center">
          <Image style={{height: hp(30)}} resizeMode="contain" source={require('../assets/images/logo.png')} />
        </View>

        <View className="gap-5 p-6">
          <Text style={{fontSize: hp(5)}} className="font-bold text-center">Sign Up</Text>

          <View className="gap-4">
            <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-gray-100 rounded-xl">

              <Octicons 
              name="mail" 
              size={hp(2.7)} 
              className="px-4 py-5" 
              color="black" />

              <TextInput 
              onChange={value => mailRef.current = value} 
              style={{fontSize: hp(2.5)}} 
              className="flex-1" 
              placeholder="Email address" />
            </View>

            <View className="gap-2">
              <View style={{height: hp(7)}} className="flex-row gap-4 px-5 bg-gray-100 rounded-xl">

                <Octicons 
                name="lock" 
                size={hp(2.7)} 
                className="px-4 py-5" 
                color="black" />

                <TextInput 
                secureTextEntry
                onChange={value => passwordRef.current = value} 
                style={{fontSize: hp(2.5)}} 
                className="flex-1" 
                placeholder="Password" />

              </View>
              <Text style={{fontSize: hp(1.7)}} className="font-semibold text-right text-black">Forgot password?</Text>
            </View>

            <View style={{height: hp(7)}} className="flex-row gap-4 px-5 bg-gray-100 rounded-xl">

              <Octicons  
              name="lock" 
              size={hp(2.7)} 
              className="px-4 py-5" 
              color="black" />

              <TextInput  
              secureTextEntry
              onChange={value => confirmpasswordRef.current = value}
              style={{fontSize: hp(2.5)}} 
              className="flex-1" 
              placeholder="Confirm password" />

            </View>

            <TouchableOpacity onPress={handleRegister} >
              <Text style={{fontSize: hp(2.5)}} className="font-bold text-center text-white bg-black rounded-xl py-4">Sign Up</Text>
            </TouchableOpacity>
          
            <View className="flex-row gap-2 justify-center">

              <Text 
              style={{fontSize: hp(1.7)}} 
              className="font-semibold text-center text-black">Already have an account?</Text>

              <Pressable onPress={() => router.push('/signIn')}>

                <Text 
                style={{fontSize: hp(1.7)}} 
                className="font-bold text-center text-red-600">Sign In</Text>

              </Pressable>

            </View>

          </View>
        </View>
    </CustomKeyboard>
  )
}

export default signUp
