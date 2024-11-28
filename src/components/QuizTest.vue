<template>
    <div class="quiz-container">
      <div class="header">
        <h1>Quiz Test</h1>
        <p>Answer the questions below and submit your answers!</p>
      </div>
      <div class="quiz-body">
        <!-- Single-choice Question -->
        <div v-for="(q, index) in quizQuestions" :key="index" class="question">
          <h3>Question {{ index + 1 }}: {{ q.question }}</h3>
          <div v-if="q.question_type" class="options">
            <div>
              <label>
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="q.option_1"
                   @change="getAnswer(q,1)"
                />
                {{ q.options_1 }}
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="q.option_2"
                   @change="getAnswer(q,2)"
                />
                {{ q.options_2 }}
              </label>
            </div>
          </div>
          <div v-else class="options">
            <div>
              <label>
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="q.option_1"
                   @change="getAnswer(q,1)"
                />
                {{ q.options_1 }}
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="q.option_2"
                   @change="getAnswer(q,2)"
                />
                {{ q.options_2 }}
              </label>
            </div>
            <div>
              <label>
                <input type="radio" :name="'question-' + index" :value="q.option_3" @change="getAnswer(q,3)"/>
                {{ q.options_3 }}
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  :name="'question-' + index"
                  :value="q.option_4" @change="getAnswer(q,4)"
                />
                {{ q.options_4 }}
              </label>
            </div>
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
    import DataService from "../services/DataService";
  export default {
    name: "QuizTest",
    data() {
      return {
        // List of quiz questions
        quizQuestions: [],
        userAnswers: [], // Tracks user-selected answers
        showResults: false, // Toggles results display
        quizResults: [], // Stores the evaluation results
        countResult: 0, // Stores the evaluation results
      };
    },
    methods: {
      quiz() {
          let course_id=this.$route.params.course_id;
          DataService.quiz(course_id)
            .then(response => {
              if(response.data.data){
                this.quizQuestions= response.data.data;
              }else
                alert(response.data.error)
              
            })
            .catch(e => {
              console.log(e);
          });
        },
      getAnswer(q,e){
        if(q.correct_answer==e)
        this.countResult+=1
        this.userAnswers.push({ [q.id]: e });
      },
        // Evaluate the quiz answers
      submitQuiz() {
        
        this.quizResults = this.quizQuestions.map((question) => {
          // Find the answer corresponding to the current question's ID
          const userAnswer = this.userAnswers.find(answer => 
            Object.prototype.hasOwnProperty.call(answer, question.id)
          );
          // Check if the user's answer is correct
          return {
            isCorrect: userAnswer ? userAnswer[question.id] == question.correct_answer : false,
          };
        });
        this.showResults = true;

        var data = {
            student_id: sessionStorage.getItem('uid'),
            countResult: this.countResult,
            userAnswers:this.userAnswers,
            course_id:this.$route.params.course_id
          };
        DataService.quizResult(data)
            .then(response => {
              console.log(response)
            })
            .catch(e => {
              console.log(e);
          });
        console.log(this.quizResults)
      },
    },
    mounted() {
      this.quiz();
    }
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
  