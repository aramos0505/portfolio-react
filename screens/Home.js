import { motion } from 'framer-motion'
import { Image, StyleSheet, Text, View } from 'react-native'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Navbar navigation={navigation} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text style={styles.title}>Welcome to My Portfolio</Text>

          <View style={styles.imageShadow}>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.image}
            />
          </View>

          <Text style={styles.text}>
            Hello! My name is Angelee Ramos, I'm a junior studying Digital Media
            at the University of Central Florida.
          </Text>
        </motion.div>
      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dbeeff',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#5c4033'
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5c4033'
  },

  imageShadow: {
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    elevation: 6
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 20
  }
})