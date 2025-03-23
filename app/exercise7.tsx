import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert, StyleSheet } from "react-native";

type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const QuizApp = () => {
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [questions, setQuestions] = useState<Question[]>([]); 
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const fetchQuestions = async () => {
    if (numQuestions < 10 || numQuestions > 30) {
      Alert.alert("Invalid Input", "Please enter a number between 10 and 30.");
      return;
    }
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${numQuestions}&type=multiple`);
      const data = await response.json();
      setQuestions(data.results as Question[]); 
      setCurrentQuestion(0);
      setScore(0);
      setQuizFinished(false);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch questions. Please try again.");
    }
  };

  const handleAnswer = (selectedAnswer: string) => {
    const currentQ = questions[currentQuestion]; 

    if (!currentQ) return;

    if (currentQ.correct_answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!questions.length || quizFinished ? (
        <>
          <Text style={styles.title}>Trivia Quiz</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter number of questions"
            onChangeText={(text) => setNumQuestions(Number(text))}
          />
          <TouchableOpacity onPress={fetchQuestions} style={styles.button}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
          {quizFinished && <Text style={styles.scoreText}>Score: {score}/{numQuestions}</Text>}
        </>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{questions[currentQuestion]?.question || "Loading question..."}</Text>
          {questions[currentQuestion] &&
            [...(questions[currentQuestion].incorrect_answers || []), questions[currentQuestion].correct_answer]
              .filter(Boolean) // Remove undefined values
              .sort(() => Math.random() - 0.5) // Shuffle answers
              .map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswer(answer)}
                  style={styles.answerButton}
                >
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))
          }
        </View>
      )}
    </ScrollView>
  );
};




const styles = StyleSheet.create({
  container: {
    padding: 180,
    alignItems: "center",
    backgroundColor: "pink",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  scoreText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  answerButton: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  answerText: {
    fontSize: 16,
  },
});

export default QuizApp;