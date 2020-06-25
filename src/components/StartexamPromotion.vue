<template>
  <div class="startexam_promotion">
    <div class="container bg-no-overlay">
      <div class="row left-align">
        <h1 class="text1">Start Your Exam Preparation Now!</h1>
      </div>
      <div class="row left-align">
        <h3 class="text2">Practice, Analyze and Improve.</h3>
      </div>
      <div class="row left-align">
        <div class="btn1">
          <button type="btton" class="btn btn-primary btn-lg">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartexamPromotion'
}
</script>
<style scoped>
#startexam_promotion {
  padding: 1rem 1rem;
}
.bg-no-overlay {
  background: url('../assets/Homepage3/img/bg1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: #000000;
  height: 500px;

  max-width: 100%;
}

.text1 {
  margin-top: 60px;
  color: #000000;
  padding-left: 10px;
}

.text2 {
  font-size: 150%;
  padding-left: 10px;
  color: #9c9c9d;
}

.btn1 {
  padding-left: 10px;
  margin-top: 60px;
}
</style>
