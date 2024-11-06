import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/images/logo.png')} />
      </View>
    )
}