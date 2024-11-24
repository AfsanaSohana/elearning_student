<template>
    <div class="quiz-container">
      <div class="header">
        <h1>Quiz Test</h1>
        <p>Answer the questions below and submit your answers!</p>
      </div>
      <div class="quiz-body">
        <!-- Single-choice Question -->
        <div v-for="(question, index) in quizQuestions" :key="index" class="question">
          <h3>Question {{ index + 1 }}: {{ question.text }}</h3>
          <div v-if="question.type === 'single-choice'" class="options">
            <div v-for="(option, optIndex) in question.options" :key="optIndex">
              <label>
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="option"
                  v-model="userAnswers[index]"
                />
                {{ option }}
              </label>
            </div>
          </div>
          <div v-else-if="question.type === 'true-false'" class="options">
            <label>
              <input
                type="radio"
                :name="'question-' + index"
                value="True"
                v-model="userAnswers[index]"
              />
              True
            </label>
            <label>
              <input
                type="radio"
                :name="'question-' + index"
                value="False"
                v-model="userAnswers[index]"
              />
              False
            </label>
          </div>
        </div>
      </div>
  
      <div class="quiz-footer">
        <button @click="submitQuiz" class="btn btn-primary">Submit</button>
      </div>
  
      <div v-if="showResults" class="quiz-results">
        <h3>Your Results</h3>
        <ul>
          <li v-for="(result, index) in quizResults" :key="index">
            Question {{ index + 1 }}: 
            <span :class="{'correct': result.isCorrect, 'incorrect': !result.isCorrect}">
              {{ result.isCorrect ? 'Correct' : 'Incorrect' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "QuizTest",
    data() {
      return {
        // List of quiz questions
        quizQuestions: [
          {
            text: "What is the capital of France?",
            type: "single-choice",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris",
          },
          {
            text: "5 + 7 = 12?",
            type: "true-false",
            correctAnswer: "True",
          },
          {
            text: "Which planet is known as the Red Planet?",
            type: "single-choice",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            correctAnswer: "Mars",
          },
          {
            text: "The Earth is flat?",
            type: "true-false",
            correctAnswer: "False",
          },
        ],
        userAnswers: {}, // Tracks user-selected answers
        showResults: false, // Toggles results display
        quizResults: [], // Stores the evaluation results
      };
    },
    methods: {
      // Evaluate the quiz answers
      submitQuiz() {
        this.quizResults = this.quizQuestions.map((question, index) => {
          return {
            isCorrect: this.userAnswers[index] === question.correctAnswer,
          };
        });
        this.showResults = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .quiz-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .quiz-body .question {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #fff;
  }
  
  .options {
    margin-top: 10px;
  }
  
  .options label {
    display: block;
    margin-bottom: 8px;
  }
  
  .quiz-footer {
    text-align: center;
    margin-top: 20px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .quiz-results {
    margin-top: 20px;
    padding: 15px;
    background-color: #e9ecef;
    border-radius: 6px;
  }
  
  .quiz-results ul {
    list-style: none;
    padding: 0;
  }
  
  .quiz-results li {
    margin-bottom: 10px;
  }
  
  .correct {
    color: green;
    font-weight: bold;
  }
  
  .incorrect {
    color: red;
    font-weight: bold;
  }
  </style>
  