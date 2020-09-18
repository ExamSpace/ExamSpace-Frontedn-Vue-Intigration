<template>
  <div id="questions">
    <b-container>
      <b-row>
        <b-col v-for="(exam, index) in exams" :key="index">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body>
                  {{ exam.name }}
                  <b-card-text>{{ exam.duration }} Minutes</b-card-text>
                  <!-- <div>{{ retrieveSubjects(exams.id) }}</div> -->
                  <b-card-text>{{ subjects.length }} Subjects</b-card-text>
                  <b-card-text>
                    by EduHive Originals
                  </b-card-text>
                  <b-button @click="takeExam(index)" variant="primary"
                    >Participate Exam</b-button
                  >
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
import store from '../store'
export default {
  data: function() {
    return {
      exams: [],
      subjects: [],
      id: ''
    }
  },
  methods: {
    loadExams: function() {
      getAPI
        .get('api/exam/list', {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
        })
        .then(response => {
          this.exams = response.data
          console.log.exams
        })
        .catch(err => {
          console.log(err)
        })
    },
    callSubjects: function() {
      for (exam of this.exams) {
        this.loadSubjects(2)
      }
    },
    loadSubjects: function() {
      for (exam in exams) {
        getAPI
          .get('api/exam/' + this.exam.id + '/subjectList', {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          })
          .then(response => {
            this.subjects = response.data
            console.log.subjects
          })
          .catch(err => {
            console.log(err)

          })
      }
    },
    takeExam(idx) {
      this.$router.push({ name: 'exam', params: { idx: idx } })
    }
  },
  mounted() {
    this.loadExams()
    this.loadSubjects()
    this.callSubjects()
  }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
