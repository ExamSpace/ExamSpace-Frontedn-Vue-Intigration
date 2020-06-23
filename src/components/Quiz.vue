<template>
  <div id="quiz">
    <b-container>
      <b-row>
        <b-col sm="12" md="8" lg="8" xl="8">
          <b-card no-body style="border: none">
            <b-tabs pills card>
              <b-tab
                v-for="(subject, subjectIdx) in subjects"
                :key="subjectIdx"
              >
                <template v-slot:title
                  >{{ subject.title }} ({{ subject.currentIdx + 1 }}/{{
                    subject.questions.length
                  }})</template
                >
                <div>
                  <div class="question">
                    <h4>
                      {{ subject.questions[subject.currentIdx].question }}
                    </h4>
                  </div>
                  <div
                    class="question-option"
                    :class="{
                      selected:
                        subject.questions[subject.currentIdx]
                          .selectedOptionIdx === optIdx
                    }"
                    v-for="(option, optIdx) in subject.questions[
                      subject.currentIdx
                    ].options"
                    :key="optIdx"
                    @click="
                      optionChoosed(subjectIdx, subject.currentIdx, optIdx)
                    "
                  >
                    <span>{{ option.slug }}.</span>
                    {{ option.body }}
                  </div>
                  <div class="question-nevigation">
                    <b-button
                      variant="primary"
                      @click="previousQuestion(subjectIdx)"
                      style="background-color: rgb(0, 22, 121); border-color: rgb(0, 22, 121);"
                      :disabled="subject.currentIdx === 0"
                      >Previous</b-button
                    >
                    <b-button
                      variant="success"
                      @click="nextQuestion(subjectIdx)"
                      style="margin-left: 1rem"
                      :disabled="
                        subject.currentIdx === subject.questions.length - 1
                      "
                      >Next</b-button
                    >
                    <b-button
                      variant="danger"
                      style="margin-left: 1rem"
                      @click="$emit('cancel')"
                      >Cancel</b-button
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
              <p class="timer-heading">Answerd: 0 Left: 100</p>
              <p>Time Remaining</p>
              <p>00:52:13</p>
            </div>
            <b-button variant="warning" block @click="$emit('endExam')"
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
  name: 'Quiz',
  data: function() {
    return {
      subjects: [
        {
          title: 'Bangla',
          currentIdx: 0,
          questions: [
            {
              question: 'What is the capital of Australia',
              selectedOptionIdx: -1,
              options: [
                {
                  slug: 'A',
                  body: 'Canbera'
                },
                {
                  slug: 'B',
                  body: 'Sidny'
                },
                {
                  slug: 'C',
                  body: 'Malborbe'
                },
                {
                  slug: 'D',
                  body: 'Dhaka'
                }
              ]
            },
            {
              question: 'What is the capital of Bangladesh',
              selectedOptionIdx: -1,
              options: [
                {
                  slug: 'A',
                  body: 'Dhaka'
                },
                {
                  slug: 'B',
                  body: 'Chittagong'
                },
                {
                  slug: 'C',
                  body: 'Sylhet'
                },
                {
                  slug: 'D',
                  body: 'Saidpur'
                }
              ]
            }
          ]
        },
        {
          title: 'English',
          currentIdx: 0,
          questions: [
            {
              question: 'What is the capital of America',
              selectedOptionIdx: -1,
              options: [
                {
                  slug: 'A',
                  body: 'Canbera'
                },
                {
                  slug: 'B',
                  body: 'Sidny'
                },
                {
                  slug: 'C',
                  body: 'Malborbe'
                },
                {
                  slug: 'D',
                  body: 'Dhaka'
                }
              ]
            },
            {
              question: 'What is the capital of Nepal',
              selectedOptionIdx: -1,
              options: [
                {
                  slug: 'A',
                  body: 'Dhaka'
                },
                {
                  slug: 'B',
                  body: 'Chittagong'
                },
                {
                  slug: 'C',
                  body: 'Sylhet'
                },
                {
                  slug: 'D',
                  body: 'Saidpur'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {
    nextQuestion: function(subjectIdx) {
      if (
        this.subjects[subjectIdx].currentIdx + 1 <
        this.subjects[subjectIdx].questions.length
      ) {
        this.subjects[subjectIdx].currentIdx += 1
      }
    },
    previousQuestion: function(subjectIdx) {
      if (this.subjects[subjectIdx].currentIdx >= 1) {
        this.subjects[subjectIdx].currentIdx -= 1
      }
    },
    optionChoosed: function(subjectIdx, questoinIdx, optIdx) {
      if (
        this.subjects[subjectIdx].questions[questoinIdx].selectedOptionIdx ===
        optIdx
      ) {
        this.subjects[subjectIdx].questions[questoinIdx].selectedOptionIdx = -1
      } else {
        this.subjects[subjectIdx].questions[
          questoinIdx
        ].selectedOptionIdx = optIdx
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
    .question-nevigation {
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
