<template>
  <div id="questions">
    <b-container>
      <b-row>
        <b-col v-for="(exams, index) in examlist" :key="index">
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
                  {{ exams.name }}
                  <b-card-text>{{ exams.duration }} Minutes</b-card-text>
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
import DataService from '../services/DataService'

export default {
  name: 'exams-list',
  data() {
    return {
      examlist: [],
      currentExamList: null,
      currentIndex: -1,
      title: ''
    }
  },
  methods: {
    retrieveExams() {
      DataService.getAll()
        .then(response => {
          this.examlist = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted() {
    this.retrieveExams()
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
