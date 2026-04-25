import { useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields before submitting.')
      return
    }

    alert('Form submitted successfully!')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#5c4033"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#5c4033"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor="#5c4033"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f5f0e6',
    borderColor: '#d6c7b8',
    color: '#5c4033'
  },

  button: {
    backgroundColor: '#f5f0e6',
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d6c7b8'
  },

  buttonText: {
    color: '#5c4033',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5
  }
})