import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Navbar({ navigation }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Projects')}
      >
        <Text style={styles.buttonText}>Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    marginBottom: 25,
    borderRadius: 18,
    overflow: 'hidden'
  },

  button: {
    backgroundColor: '#fffbf4',
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d6c7b8'
  },

  buttonText: {
    color: '#5c4033',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5
  }
})