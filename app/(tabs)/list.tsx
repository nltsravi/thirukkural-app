import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const divisions = [
  {
    id: 'arathupaal',
    title: 'அறத்துப்பால்',
    description: 'Virtue (அறம்)',
    chapters: 38,
  },
  {
    id: 'porutpaal',
    title: 'பொருட்பால்',
    description: 'Wealth (பொருள்)',
    chapters: 70,
  },
  {
    id: 'inbathupaal',
    title: 'இன்பத்துப்பால்',
    description: 'Love (இன்பம்)',
    chapters: 25,
  },
];

export default function ListScreen() {
  const router = useRouter();

  const navigateToChapters = (divisionId: string) => {
    router.push({
      pathname: '/(tabs)/chapters',
      params: { division: divisionId }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thirukkural Divisions</Text>
        <Text style={styles.headerSubtitle}>Select a division to view its chapters</Text>
      </View>

      <View style={styles.divisionsContainer}>
        {divisions.map((division) => (
          <TouchableOpacity
            key={division.id}
            style={styles.divisionCard}
            onPress={() => navigateToChapters(division.id)}
          >
            <Text style={styles.divisionTitle}>{division.title}</Text>
            <Text style={styles.divisionDescription}>{division.description}</Text>
            <Text style={styles.chapterCount}>{division.chapters} Chapters</Text>
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
  divisionsContainer: {
    padding: 20,
    gap: 20,
  },
  divisionCard: {
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
  divisionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 8,
  },
  divisionDescription: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  chapterCount: {
    fontSize: 16,
    color: '#888',
  },
}); 