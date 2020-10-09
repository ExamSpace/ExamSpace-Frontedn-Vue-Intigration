<template>
  <div id="quiz">
    <h2 style="text-align: center">{{ exam.name }}</h2>
    <b-container>
      <b-row>
        <b-col sm="12" md="8" lg="8" xl="8">
          <b-card no-body style="border: none">
            <b-tabs pills card>
              <b-tab
                v-for="(subject, subjectIdx) in subjects"
                :key="subjectIdx"
              >
                <template v-slot:title>
                  {{ subject.name }} ({{ subject.currentIndex + 1 }} /
                  {{ subject.questions.length }})
                </template>
                <div>
                  <div class="question">
                    <h4>
                      {{ subject.questions[subject.currentIndex].question }}
                    </h4>
                  </div>
                  <div
                    class="question-option"
                    v-for="(option, optionIdx) in options"
                    :key="optionIdx"
                    :class="{
                      selected:
                        subject.questions[subject.currentIndex]
                          .selectedOptionIdx === optionIdx
                    }"
                    @click="
                      optionSelected(
                        subjectIdx,
                        subject.currentIndex,
                        optionIdx
                      )
                    "
                  >
                    <span>{{ slugs[optionIdx] }}.</span>
                    {{
                      Object.values(subject.questions[subject.currentIndex])[
                        optionIdx + 3
                      ]
                    }}
                  </div>
                  <div class="question-navigation">
                    <b-button
                      variant="primary"
                      @click="previousQuestion(subjectIdx)"
                      style="background-color: rgb(0, 22, 121); border-color: rgb(0, 22, 121);"
                      :disabled="subject.currentIndex === 0"
                      >Previous</b-button
                    >
                    <b-button
                      variant="success"
                      @click="nextQuestion(subjectIdx)"
                      style="margin-left: 1rem"
                      :disabled="
                        subject.currentIndex === subject.questions.length - 1
                      "
                      >Next</b-button
                    >
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col sm="12" md="4" lg="4" xl="4">
          <div class="time-wrapper">
            <div class="timer">
              <p>Time Remaining</p>
              <p>{{ hour }} : {{ minute }} : {{ second }}</p>
            </div>
            <b-button
              variant="warning"
              block
              @click="$emit('endExam', { rem: remainingTime })"
              >End Exam</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'QuestionSet',
  props: ['examIdx', 'subjects', 'exam'],
  data: function() {
    return {
      slugs: ['A', 'B', 'C', 'D'],
      options: ['option1', 'option2', 'option3', 'option4'],
      remainingTime: 0,
      interval: ''

      // selectedOptionIdx: -1
      // currentIndex: 0,
      // answered: 0
    }
  },
  watch: {
    remainingTime: function() {
      if (this.remainingTime === 0) {
        clearInterval(this.interval)
        var rem = this.remainingTime
        this.$emit('endExam', { rem })
      }
    }
  },
  beforeMount() {
    this.subjects.map(e => (e.currentIndex = 0))
    this.subjects.map(e => (e.answered = 0))
    this.subjects.map(e => e.questions.map(i => (i.selectedOptionIdx = -1)))
  },
  mounted() {
    this.remainingTime = parseInt(this.exam.duration)
    this.remainingTime *= 60
    this.interval = setInterval(() => {
      this.remainingTime--
    }, 1000)
    console.log(this.examIdx)
  },
  filters: {
    subjectQuestions: function(sid) {
      return this.questions.filter(question => question.subject === sid)
    }
  },
  computed: {
    hour() {
      return Math.floor(this.remainingTime / (60 * 60))
    },
    minute() {
      var rem = this.remainingTime % (60 * 60)
      return Math.floor(rem / 60)
    },
    second() {
      var rem = this.remainingTime % (60 * 60)
      rem %= 60
      return rem
    }
    // currentIndex() {
    //   var current = []
    //   this.subjects.map(e => current.push(0))
    //   return current
    // },
    // answered() {
    //   var answer = []
    //   this.subjects.map(e => answer.push(0))
    //   return answer
    // }
    // selectedOptionIdx() {
    //   var selected = []
    //   for (var i = 0; i < this.subjects.length; i++) {
    //     selected.push([])
    //     for (var j = 0; j < this.subjects[i].questions.length; j++) {
    //       selected[i].push(-1)
    //     }
    //   }
    //   return selected
    // }
  },
  methods: {
    nextQuestion: function(subjectIdx) {
      // var payload = {
      //   examidx: parseInt(this.examIdx),
      //   subidx: subjectIdx
      // }
      // this.$store.dispatch('next', payload)
      this.subjects[subjectIdx].currentIndex++
    },
    previousQuestion: function(subjectIdx) {
      // var payload = {
      //   examidx: parseInt(this.examIdx),
      //   subidx: subjectIdx
      // }
      // this.$store.dispatch('previous', payload)
      this.subjects[subjectIdx].currentIndex--
    },
    updateChoice(payload) {
      if (
        // state.exams[payload.examidx].subjects[payload.subidx].questions[
        //   payload.quesidx
        // ].selectedOptionIdx === payload.optidx
        this.subjects[payload.subidx].questions[payload.quesidx]
          .selectedOptionIdx == payload.optidx
      ) {
        // state.exams[payload.examidx].subjects[payload.subidx].questions[
        //   payload.quesidx
        // ].selectedOptionIdx = -1
        this.subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx = -1
        this.subjects[payload.subidx].answered -= 1
      } else {
        // state.exams[payload.examidx].subjects[payload.subidx].questions[
        //   payload.quesidx
        // ].selectedOptionIdx = payload.optidx
        this.subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx = -1
        this.subjects[payload.subidx].answered -= 1
      }
    },
    optionSelected: function(subidx, quesidx, optidx) {
      var payload = {
        examidx: parseInt(this.examIdx),
        subidx: subidx,
        quesidx: quesidx,
        optidx: optidx
      }
      // this.$store.dispatch('update_choice', payload)
      console.log('Here')
      // this.updateChoice(payload)
      if (
        this.subjects[payload.subidx].questions[payload.quesidx]
          .selectedOptionIdx === payload.optidx
      ) {
        this.subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx = -1
        this.subjects[payload.subidx].answered -= 1
      } else {
        this.subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx = payload.optidx
        this.subjects[payload.subidx].answered += 1
      }
    }
  }
}
</script>

<style lang="scss">
$primary_color: rgb(0, 22, 121);
#quiz {
  margin-bottom: 5rem;
}
.time-wrapper {
  display: inline-block;
  position: relative;
  width: 80%;
  top: 35%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  border-radius: 8px;
  .timer-heading {
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }
  .timer {
    padding: 1rem 1rem;
    background-color: rgba(201, 201, 201, 0.1);
  }
}

.question-option {
  margin: 1rem 0;
  padding: 0.25rem 1rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: block;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  span {
    font-size: 1.2em;
    font-weight: 500;
    color: black;
  }
}
.selected {
  background-color: $primary_color;
  color: white;

  span {
    color: white;
  }
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: white;
  background-color: $primary_color;
  border-color: $primary_color;
  border-bottom: 1px solid;
}

.card {
  .tabs {
    .card-header {
      background-color: white;
      border: none;

      .nav {
        flex-wrap: nowrap;
        white-space: nowrap;
        overflow: auto;
      }
      .nav-pills .nav-link {
        border-radius: 2px;
        margin: 0 1rem;
      }
    }
    .question-navigation {
      text-align: center;
    }
  }
}
.nav-link {
  color: rgba(0, 0, 0, 0.65);
}

.horizontal-link {
  a {
    display: block;
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
    transition: 0.3s;
    font-size: 1em;

    &:hover {
      color: rgba(0, 0, 0, 0.95);
      font-size: 1.1em;
    }
  }
}
</style>
