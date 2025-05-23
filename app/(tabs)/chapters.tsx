import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const chapters = {
  arathupaal: [
    { id: 1, title: 'கடவுள் வாழ்த்து', description: 'Praise of God' },
    { id: 2, title: 'வான்சிறப்பு', description: 'The Greatness of Rain' },
    // Add more chapters
  ],
  porutpaal: [
    { id: 1, title: 'இறைமாட்சி', description: 'The Greatness of a King' },
    { id: 2, title: 'கல்வி', description: 'Learning' },
    // Add more chapters
  ],
  inbathupaal: [
    { id: 1, title: 'தகையணங்குறுத்தல்', description: 'The Description of the Lover' },
    { id: 2, title: 'குறிப்பறிதல்', description: 'The Recognition of Signs' },
    // Add more chapters
  ],
};

export default function ChaptersScreen() {
  const { division } = useLocalSearchParams();
  const divisionChapters = chapters[division as keyof typeof chapters] || [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {division === 'arathupaal' && 'அறத்துப்பால்'}
          {division === 'porutpaal' && 'பொருட்பால்'}
          {division === 'inbathupaal' && 'இன்பத்துப்பால்'}
        </Text>
        <Text style={styles.headerSubtitle}>Select a chapter to read</Text>
      </View>

      <View style={styles.chaptersContainer}>
        {divisionChapters.map((chapter) => (
          <TouchableOpacity key={chapter.id} style={styles.chapterCard}>
            <Text style={styles.chapterNumber}>Chapter {chapter.id}</Text>
            <Text style={styles.chapterTitle}>{chapter.title}</Text>
            <Text style={styles.chapterDescription}>{chapter.description}</Text>
          </TouchableOpacity>
        ))}
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
  chaptersContainer: {
    padding: 20,
    gap: 15,
  },
  chapterCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chapterNumber: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 8,
  },
  chapterDescription: {
    fontSize: 16,
    color: '#666',
  },
}); 