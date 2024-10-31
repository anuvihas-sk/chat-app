import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
        <Spinner
          visible={true}
          textContent={'Wait karo ji...'}
          textStyle={{ color: 'white' }}
          overlayColor="black"
        />
      </View>
    )
}