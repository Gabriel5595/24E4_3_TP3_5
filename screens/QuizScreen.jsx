import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from '../components/progressBar/index.jsx';

export default function QuizScreen({ navigation, question, currentIndex, totalQuestions }) {
  const handleAnswer = () => {
    if (currentIndex < totalQuestions) {
      navigation.navigate(`Question${currentIndex + 1}`);
    } else {
      alert('Quiz finalizado! Obrigado por participar.');
      // Reinicia o quiz (opcional)
      navigation.navigate('Question1');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{`Questão ${currentIndex} de ${totalQuestions}`}</Text>
      <ProgressBar progress={currentIndex / totalQuestions} />

      <Text style={styles.question}>{question.text}</Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={handleAnswer}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
