import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'



const ios = Platform.OS === 'ios';

const CustomKeyboard = ({children}) => {
  return (
    <KeyboardAvoidingView
    behavior={ios? "padding" : "height"}
    style={{flex : 1}}
    >
        <ScrollView 
        style={{flex : 1}}
        bouce={false}
        showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default CustomKeyboard
