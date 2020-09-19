<template>
  <div id="exam">
    <!-- <p>{{ this.subjects }}</p>
    <p>{{ this.exam }}</p> -->
    <ExamDetails
      :examIdx="this.$route.params.idx"
      :subjects="this.subjects"
      :exam="this.exam"
      :qs="this.qs"
      v-if="!takeExamSelected"
      v-on:takeExamPressed="onTakeExamPressed"
    ></ExamDetails>
    <QuestionSet
      v-else-if="!examFinished"
      :examIdx="this.$route.params.idx"
      v-on:endExam="onEndExam"
    ></QuestionSet>
    <ScoreCard
      v-else
      :examIdx="$route.params.idx"
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
      qs: 0,
      questions: []
    }
  },
  computed: {
    dataLoaded() {
      return this.exams != 0
    }
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
          console.log.subjects
        })
        .catch(err => {
          console.log(err)
        })
    },
    totalQuestions: function() {
      this.subjects.forEach(subject => {
        getAPI
          .get(
            'api/exam/' +
              this.$route.params.idx +
              '/subject/' +
              subject.id +
              '/questionList',
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.accessToken}`
              }
            }
          )
          .then(response => {
            //this.qs += response.data.length
            this.questions=response.data
            //console.log.subjects
          })
          .catch(err => {
            console.log(err)
          })
      })
    }
  },
  mounted() {
    this.loadSubjects()
    this.loadExam()
    this.totalQuestions()
  }
}
</script>

<style></style>
