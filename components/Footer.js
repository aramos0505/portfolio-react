import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'

export default function Footer() {
  const openEmail = () => {
    Linking.openURL('mailto:your@email.com')
  }

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2026 Angelee Ramos</Text>
      <Text style={styles.text}>Digital Media Student | Artist | Designer</Text>
      <Text style={styles.text}>University of Central Florida</Text>

      <TouchableOpacity onPress={openEmail}>
        <Text style={styles.email}>angeleeramos05@email.com</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 30,
    alignItems: 'center'
  },

  text: {
    color: '#5c4033',
    marginBottom: 4
  },

  email: {
    color: '#5c4033',
    textDecorationLine: 'underline',
    fontWeight: '600',
    marginTop: 6
  }
})