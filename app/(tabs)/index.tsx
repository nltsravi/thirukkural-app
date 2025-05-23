import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const navigateToChapters = () => {
    router.push('/(tabs)/list');
  };

  const navigateToLearn = () => {
    router.push('/(tabs)/learn');
  };

  const navigateToProfile = () => {
    router.push('/(tabs)/profile');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/thiruvallur.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.tilesContainer}>
        <TouchableOpacity style={styles.tile} onPress={navigateToChapters}>
          <Text style={styles.tileTitle}>Chapters</Text>
          <Text style={styles.tileDescription}>Explore Thirukkural Chapters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={navigateToLearn}>
          <Text style={styles.tileTitle}>Learn</Text>
          <Text style={styles.tileDescription}>Learn Thirukkural</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={navigateToProfile}>
          <Text style={styles.tileTitle}>Profile</Text>
          <Text style={styles.tileDescription}>Your Learning Progress</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 300,
    backgroundColor: '#f4511e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  tilesContainer: {
    padding: 20,
    gap: 20,
  },
  tile: {
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
  tileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 8,
  },
  tileDescription: {
    fontSize: 16,
    color: '#666',
  },
});
