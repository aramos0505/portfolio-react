import { Image, StyleSheet, Text, View } from 'react-native'

export default function ProjectCard({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.imageShadow}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>

      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f5f0e6'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5c4033'
  },

  imageShadow: {
    width: 220,
    borderRadius: 16,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3
    },

    elevation: 5
  },

  image: {
    width: 220,
    height: 140,
    borderRadius: 16
  },

  description: {
    color: '#5c4033',
    lineHeight: 24
  }
})