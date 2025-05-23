import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn Thirukkural</Text>
        <Text style={styles.headerSubtitle}>Discover the wisdom of Thiruvalluvar</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Thirukkural</Text>
        <Text style={styles.paragraph}>
          Thirukkural is a classic Tamil text consisting of 1,330 couplets dealing with the everyday virtues of an individual. It is considered one of the greatest works ever written on ethics and morality.
        </Text>

        <Text style={styles.sectionTitle}>Structure</Text>
        <Text style={styles.paragraph}>
          The text is divided into three sections:
          {'\n\n'}1. அறத்துப்பால் (Virtue) - 38 chapters
          {'\n'}2. பொருட்பால் (Wealth) - 70 chapters
          {'\n'}3. இன்பத்துப்பால் (Love) - 25 chapters
        </Text>

        <Text style={styles.sectionTitle}>Learning Path</Text>
        <Text style={styles.paragraph}>
          Start your journey by exploring the chapters in each section. Each couplet contains profound wisdom that can be applied to daily life.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f4511e',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
}); 