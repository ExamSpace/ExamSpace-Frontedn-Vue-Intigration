<template>
  <div id="questions">
    <b-container>
      <b-row>
        <b-col md="6" class="mb-3" v-for="(exam, index) in exams" :key="index">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="5">
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
                  <b-card-text>
                    by Examspace
                  </b-card-text>
                  <b-button @click="takeExam(index)" variant="primary"
                    >Participate Exam
                  </b-button>
                  <b-button
                    @click="showRank(index)"
                    variant="primary"
                    class="mt-2"
                    >Show Rankings
                  </b-button>
                  <b-button
                    variant="primary"
                    class="mt-2 ml-3"
                    @click="enrollExam(index)"
                    v-if="!enroll"
                  >
                    Enroll
                  </b-button>
                  <b-button
                    variant="primary"
                    class="mt-2 ml-3"
                    @click="unenrollExam(index)"
                    v-else
                  >
                    Unenroll
                  </b-button>
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
export default {
  data: function() {
    return {
      exams: [],
      subjects: [],
      id: '',
      counter: 0,
      enroll: false
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
    loadSubjects: function() {
      getAPI
        .get('api/exam/subjectList', {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
        })
        .then(response => {
          this.subjects = response.data
          console.log.subjects
        })
        .catch(err => {
          console.log(err)
        })
      return this.subjects
    },
    takeExam(idx) {
      var idy = this.exams[idx].id
      this.$router.push({ name: 'exam', params: { idx: idy } })
    },
    enrollExam(idx) {
      var idy = this.exams[idx].id
      getAPI
        .post(
          'api/exam/' + idy + '/enroll',
          {
            exam: idy
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          // if (response.data) {
          //   this.$alert('You are already enrolled for this exam')
          // }
          this.enroll = true
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    unenrollExam(idx) {
      var idy = this.exams[idx].id
      getAPI
        .post(
          'api/exam/' + idy + '/enroll',
          {
            exam: null
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          // if (response.data) {
          //   this.$alert('You are already enrolled for this exam')
          // }
          this.enroll = false
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    showRank(idx) {
      var idy = this.exams[idx].id
      this.$router.push({ name: 'Rank', params: { idx: idy } })
    }
  },
  mounted() {
    this.loadExams()
    this.loadSubjects()
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
