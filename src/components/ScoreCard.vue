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
        <strong>{{ totalMarksLost }}</strong>
      </p>
    </div>

    <div class="result">
      <p>
        Total:
        <strong>{{ totalMarks }}/{{ TotalQuestions }}</strong>
      </p>
    </div>
    <b-button v-if="emptyMark" @click="saveMarks">Save Marks</b-button>
    <b-button v-else @click="updateMarks">Update Marks</b-button>
    <div>
      <b-button @click="showRank(examIdx)" class="mt-2">Check Rank</b-button>
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
      totalMarksLost: 0,
      totalMarks: 0,
      TotalQuestions: 0,
      StoreUntouched: 0,
      StorePercentage: 0,
      StoreHighestMarks: 0,
      StoreStatus: '',
      emptyMark: true,
      marks: []
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
      if (item.Total < 0) {
        item.Total = 0
      } else {
        item.Total
      }
      item.Percentage = Math.round(
        ((item.Correct - item.MarksLost) / item.TotalQuestions) * 100
      )
      if (item.Percentage < 0) {
        item.Percentage = 0
      } else {
        item.Percentage
      }
      item.HighestMarks = 25


      if (item.Percentage < 90 && item.Percentage > 85) {
        item.Status = 'Great'
      } else if (item.Percentage < 85 && item.Percentage > 75) {
        item.Status = 'Good'
      } else if (item.Percentage < 75 && item.Percentage > 65) {
        item.Status = 'Average'
      } else if (item.Percentage < 65 && item.Percentage > 55) {
        item.Status = 'Below Average'
      } else if (item.Percentage < 55 && item.Percentage > 50) {
        item.Status = 'Need Imporvement'
      } else if (item.Percentage < 50) {
        item.Status = 'Fail'
      } else {
        item.Status = 'Excellent'
      }
      this.items.push(item)
    })
    this.items.forEach(item => {
      this.totalCorrect += item.Correct
      this.totalWrong += item.Wrong
      this.totalMarksLost += item.MarksLost
      this.totalMarks += item.Total
      this.TotalQuestions += item.TotalQuestions
      this.StoreUntouched += item.Untouched
      this.StorePercentage += item.Percentage
      this.StoreHighestMarks += item.HighestMarks
      this.StoreStatus += item.Status
    })
  },
  mounted() {
    this.emptyMark = true
    getAPI
      .get('api/exam/' + this.$route.params.idx + '/marksPerUser', {
        headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
      })
      .then(response => {
        this.marks = response.data
        if (this.marks.length > 0) {
          this.emptyMark = false
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    examTitle() {
      return this.exam.name
    }
  },
  methods: {
    saveMarks() {
      this.subjects.forEach(e => {
        getAPI
          .post(
            'api/exam/' + this.$route.params.idx + '/mark/new',
            {
              exam: this.examIdx,
              subject: e.id,
              total_questions: this.TotalQuestions, //works
              untouched: this.StoreUntouched, //works
              wrong: this.totalWrong, //works
              correct: this.totalCorrect, //works
              marks_lost: this.totalMarksLost, //works
              total: this.totalMarks, //works
              percentage: this.StorePercentage, //works
              highest_marks: this.StoreHighestMarks, //works
              status: this.StoreStatus //works
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
      this.emptyMark = false
    },
    updateMarks() {
      this.marks.forEach(e => {
        getAPI
          .patch(
            'api/exam/' + this.$route.params.idx + '/mark/' + e.id,
            {
              untouched: this.StoreUntouched, //works
              wrong: this.totalWrong, //works
              correct: this.totalCorrect, //works
              marks_lost: this.totalMarksLost, //works
              total: this.totalMarks, //works
              percentage: this.StorePercentage, //works
              highest_marks: this.StoreHighestMarks, //works
              status: this.StoreStatus //works
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
    },
    showRank(idx) {
      this.$router.push({ name: 'Rank', params: { idx: idx } })
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
  @media (max-width: 550px) {
    width: 95%;
  }
}
</style>
