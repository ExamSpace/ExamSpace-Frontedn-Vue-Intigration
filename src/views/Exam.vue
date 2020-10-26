<template>
  <div id="exam">
    <!-- <p>{{ this.questions.length }}</p> -->
    <!-- <p>{{ this.subjects }}</p>
    <p>{{ this.exam }}</p> -->
    <ExamDetails
      :examIdx="this.$route.params.idx"
      :subjects="this.subjects"
      :exam="this.exam"
      :questions="this.questions"
      v-if="!takeExamSelected"
      v-on:takeExamPressed="onTakeExamPressed"
    ></ExamDetails>
    <QuestionSet
      v-else-if="!examFinished"
      :examIdx="this.$route.params.idx"
      :subjects="this.subjects"
      :exam="this.exam"
      v-on:endExam="onEndExam"
    ></QuestionSet>
    <ScoreCard
      v-else
      :exam="this.exam"
      :examIdx="$route.params.idx"
      :subjects="this.subjects"
      :remainingTime="remainingTime"
    ></ScoreCard>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
import ExamDetails from '@/components/ExamDetails.vue'
import QuestionSet from '@/components/QuestionSet.vue'
import ScoreCard from '@/components/ScoreCard.vue'
export default {
  name: 'Exam',
  components: {
    ExamDetails,
    QuestionSet,
    ScoreCard
  },
  data: function() {
    return {
      takeExamSelected: false,
      examFinished: false,
      remainingTime: 0,
      subjects: [],
      exam: [],
      questions: []
      // grade: []
    }
  },
  computed: {
    dataLoaded() {
      return this.exams != 0
    }
  },
  created() {
    // this.totalQuestions()
    // this.loadSubjects()
  },
  methods: {
    onTakeExamPressed: function() {
      this.takeExamSelected = true
    },
    onEndExam: function(data) {
      this.remainingTime = data.rem
      this.examFinished = true
    },
    loadExam: function() {
      getAPI
        .get('api/exam/' + this.$route.params.idx, {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
        })
        .then(response => {
          this.exam = response.data
          console.log.exam
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadSubjects: function() {
      getAPI
        .get('api/exam/' + this.$route.params.idx + '/subjectList', {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
        })
        .then(response => {
          this.subjects = response.data
          console.log(this.subjects)
          this.subjects.forEach(e => {
            for (var i = e.questions.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1))
              ;[e.questions[i], e.questions[j]] = [
                e.questions[j],
                e.questions[i]
              ]
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    totalQuestions: function() {
      getAPI
        .get('api/exam/' + this.$route.params.idx + '/questionList', {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
        })
        .then(response => {
          this.questions = response.data
          console.log.questions
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.loadExam()
    this.totalQuestions()
    this.loadSubjects()
  }
}
</script>

<style></style>
