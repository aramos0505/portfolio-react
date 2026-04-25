
import { StyleSheet, Text, View } from 'react-native'
import ProjectCard from '../components/ProjectCard'

export default function ProjectScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      <ProjectCard
        title="Bloom (2024)"
        image={require('../assets/bloom.jpg')}
        description="Acrylic on canvas, 16 x 20 inches. A self-portrait reflecting my personal journey of reconnecting with my heritage and growing into adulthood."
      />

      <ProjectCard
        title="Eden (2024)"
        image={require('../assets/eden.jpeg')}
        description="Acrylic on canvas, 16 x 20 inches. A still life painting of fruits and vegetables exploring color, balance, and natural beauty."
      />

      <ProjectCard
        title="Circus (2024)"
        image={require('../assets/circus.jpeg')}
        description="Acrylic on canvas, 16 x 20 inches. A surreal still life study that combines imaginative composition with symbolic visual elements."
      />
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
    marginBottom: 15,
    color: '#5c4033',
    textAlign: 'center'
  }
})