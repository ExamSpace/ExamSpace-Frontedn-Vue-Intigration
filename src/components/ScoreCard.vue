<template>
  <div class="text-center">
    <h1 class="display-4">Results</h1>
    <p class="lead">
      Congrats on your results! If you don't like your results down below, feel
      free to take the quiz again!
    </p>

    <h1 class="Quiz">{{ examTitle }}</h1>
    <h2 class="Name">{{ this.$store.state.username }}</h2>

    <div class="table">
      <b-table :items="items"></b-table>
    </div>

    <div class="result">
      <p>
        Correct:
        <strong>{{ totalCorrect }}</strong>
      </p>
    </div>

    <div class="result">
      <p>
        Marks Deducted:
        <strong>{{ totalWrong }}</strong>
      </p>
    </div>

    <div class="result">
      <p>
        Total:
        <strong>{{ totalMarks }}/{{ TotalQuestions }}</strong>
      </p>
    </div>
    <div>
      <b-button @click="putGrade()">Save</b-button>
    </div>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  props: ['examIdx', 'exam', 'subjects', 'questions'],
  name: 'student_marks',
  data() {
    return {
      items: [],
      totalCorrect: 0,
      totalWrong: 0,
      totalMarks: 0,
      TotalQuestions: 0
    }
  },
  beforeMount() {
    var examid = this.examIdx
    var exam = this.exam
    var subjects = this.subjects
    subjects.forEach(subject => {
      var item = {
        SubjectName: '',
        TotalQuestions: 0,
        Untouched: 0,
        Wrong: 0,
        Correct: 0,
        MarksLost: 0,
        Total: 0,
        Percentage: 0,
        HighestMarks: 0,
        Status: ''
      }
      item.SubjectName = subject.name
      item.TotalQuestions = subject.questions.length

      // calc untouched
      subject.questions.forEach(ques => {
        if (ques.selectedOptionIdx === -1) {
          item.Untouched++
        } else if (ques.selectedOptionIdx != ques.answer) {
          item.Wrong++
        } else {
          item.Correct++
        }
      })

      item.MarksLost = item.Wrong * 0.25
      item.Total = item.Correct - item.MarksLost
      item.Percentage = Math.round(
        ((item.Correct - item.MarksLost) / item.TotalQuestions) * 100
      )
      item.HighestMarks = Math.max(
        item.Total,
        Math.floor(Math.random() * item.TotalQuestions)
      )
      if (item.Percentage < 70) {
        item.Status = 'Need Improvement!'
      } else {
        item.Status = 'Perfect!'
      }
      this.items.push(item)
    })
    this.items.forEach(item => {
      this.totalCorrect += item.Correct
      this.totalWrong += item.MarksLost
      this.totalMarks += item.Total
      this.TotalQuestions += item.TotalQuestions
    })
  },
  computed: {
    examTitle() {
      return this.exam.name
    }
  },
  methods: {
    putGrade() {
      this.subjects.forEach((e, id) => {
        getAPI
          .post(
            'api/exam/' + this.$route.params.idx + '/mark/new',
            {
              user: 1,
              exam: this.examIdx,
              subject: 1,
              total_questions: this.TotalQuestions,
              untouched: this.Untouched,
              wrong: this.Wrong,
              correct: this.totalCorrect,
              marks_lost: this.MarksLost,
              total: this.totalMarks,
              percentage: this.Percentage,
              highest_marks: this.HighestMarks,
              status: "Status"
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.accessToken}`
              }
            }
          )
          .then(response => {
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.result {
  p {
    font-size: 1.2em;
    margin-left: 35%;
    margin-bottom: 0;
    padding: 0;
  }
}
.table {
  width: 70%;
  /* margin-left: 15%; */
  margin: 0 auto;
  overflow: scroll;
  @media (max-width: 550px) {
    width: 95%;
  }
}
</style>
