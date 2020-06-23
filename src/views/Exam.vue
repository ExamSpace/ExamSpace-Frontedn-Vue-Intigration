<template>
  <div id="exam">
    <ExamDetails v-on:takeExamPressed="onTakeExamPressed" v-if="!takeExamSelected"></ExamDetails>
    <ExamTermsAndCondition
      v-on:startExamPressed="onStartExamPressed"
      v-on:cancel="onCancelPressed"
      v-else-if="!termsAccepted"
    ></ExamTermsAndCondition>
    <Quiz v-else-if="!examFinished" v-on:cancel="onCancelPressed" v-on:endExam="onEndExam"></Quiz>
    <ScoreCard v-else></ScoreCard>
  </div>
</template>

<script>
import ExamDetails from "@/components/ExamDetails.vue";
import ExamTermsAndCondition from "@/components/ExamTermsAndCondition.vue";
import Quiz from "@/components/Quiz.vue";
import ScoreCard from "@/components/ScoreCard.vue";
export default {
  name: "Exam",
  components: {
    ExamDetails,
    ExamTermsAndCondition,
    Quiz,
    ScoreCard
  },
  data: function() {
    return {
      takeExamSelected: false,
      termsAccepted: false,
      examFinished: false
    };
  },
  methods: {
    onTakeExamPressed: function() {
      this.takeExamSelected = true;
    },
    onStartExamPressed: function() {
      this.termsAccepted = true;
    },
    onEndExam: function() {
      this.examFinished = true;
    },
    onCancelPressed: function() {
      this.termsAccepted = false;
      this.takeExamSelected = false;
      this.examFinished = false;
    }
  }
};
</script>

<style>
</style>