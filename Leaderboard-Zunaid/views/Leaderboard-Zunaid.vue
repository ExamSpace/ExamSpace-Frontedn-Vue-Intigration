<template>
  <div class="leaderboard_cards">
    <section class="top1">
      <div class="container">
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">School</h5>
                <img
                  class="col"
                  src="../assets/school.png"
                  alt="Card image cap"
                  style="width: 40%;"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">College</h5>
                <img
                  class="col"
                  src="../assets/college.png"
                  alt="Card image cap"
                  style="width: 60%;"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">University</h5>
                <img
                  class="col"
                  src="../assets/uni.png"
                  alt="Card image cap"
                  style="width: 35%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  <br><br>-->

    <section class="bottom1">
      <div class="container">
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">Student Information</h5>
                <img
                  class="col"
                  src="../assets/student.png"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">Student Information</h5>
                <img
                  class="col"
                  src="../assets/student.png"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">Student Information</h5>
                <img
                  class="col"
                  src="../assets/student.png"
                  alt="Card image cap"
                />
              </div>
            </div>

            <!--
              <div class="row">

              </div>
            -->
          </div>

          <div class="card">
            <div class="card-body">
              <div class="flex">
                <h5 class="card-title mt-3 ml-1">Student Information</h5>
                <img
                  class="col"
                  src="../assets/student.png"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LeaderboardCards"
};
</script>

<style scoped>
#leaderboard_cards {
}

body {
  margin: 0;
  padding: 0;
}
#top1 {
  padding-bottom: 15px;
  margin: 0px 10px 10px 5px;
}
#bottom1 {
  padding-top: 20px;
}
.top1 .card-body {
  background-color: #f8f8f8;
  border-radius: 5%;
  border-bottom: 2px solid #00aeef; /*here change color code*/
  border-right: 3px solid #00aeef;
  margin-left: 15px;
  text-align: center;
  margin-bottom: 46px;
  margin-top: 28px;
}
.bottom1 .card-body {
  background-color: #d9f1fd;
  margin-left: 31px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 7px;
}

.card {
  border: none;
}
.card img {
  align-content: center;
  margin-bottom: 10px;
}

.bottom1 .col {
  margin-top: 10px;
}

.flexbottom {
  display: flex;
  justify-content: space-evenly;
}
.card-title {
  margin-bottom: 0px;
  font-weight: 400;
}
</style>
