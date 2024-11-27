import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './screens/QuizScreen.jsx';
import questions from './assets/questions.json';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {questions.map((question, index) => (
          <Stack.Screen
            key={question.id}
            name={`Question${question.id}`}
          >
            {props => (
              <QuizScreen
                {...props}
                question={question}
                currentIndex={index + 1}
                totalQuestions={questions.length}
              />
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
