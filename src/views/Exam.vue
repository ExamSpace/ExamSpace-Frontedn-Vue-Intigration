<template>
  <div id="exam">
    <ExamDetails v-on:takeExamPressed="onTakeExamSelected" v-if="!takeExamSelected"></ExamDetails>
    <ExamTermsAndCondition v-else-if="!termsAccepted"></ExamTermsAndCondition>
  </div>
</template>

<script>
import ExamDetails from "@/components/ExamDetails.vue";
import ExamTermsAndCondition from "@/components/ExamTermsAndCondition.vue";
export default {
  name: "Exam",
  components: {
    ExamDetails,
    ExamTermsAndCondition
  },
  data: function() {
    return {
      takeExamSelected: false,
      termsAccepted: false
    };
  },
  methods: {
    onTakeExamSelected: function() {
      this.takeExamSelected = true;
    }
  }
};
</script>

<style>
</style>