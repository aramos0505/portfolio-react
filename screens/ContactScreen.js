import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactForm from '../components/ContactForm'

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <ContactForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dbeeff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5c4033'
  }
})