import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress }) {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${progress * 100}%` }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
});