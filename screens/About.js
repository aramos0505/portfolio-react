import { Image, StyleSheet, Text, View } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>About Me</Text>

        <View style={styles.imageShadow}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/aramos0505/portfolio-react/master/assets/about.jpg'
            }}
            style={styles.image}
          />
        </View>

        <Text style={styles.text}>
          Hello my name is Angelee Ramos. Im a junior studying Digital Media at
          the University of Central Florida.
        </Text>

        <Text style={styles.text}>
          When I'm not working on school projects, I like to spend time outside
          with family, read webcomics, and paint!
        </Text>

        <Text style={styles.text}>
          Skills: React Native, JavaScript, UI Design
        </Text>

        <Text style={styles.text}>
          Interests: Painting, sewing, design
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dbeeff'
  },

  card: {
    backgroundColor: '#f5f0e6',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d6c7b8',
    width: '90%',
    alignSelf: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5c4033',
    textAlign: 'center'
  },

  text: {
    fontSize: 16,
    marginBottom: 12,
    color: '#5c4033',
    textAlign: 'center',
    lineHeight: 28
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
    width: 220,
    height: 220,
    borderRadius: 20
  }
})