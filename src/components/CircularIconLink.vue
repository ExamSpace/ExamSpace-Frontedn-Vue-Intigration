<template>
  <div id="circular_icon_link">
    <section class="resource">
      <div class="container">
        <div class="card">
          <div class="box">
            <a href="#"
              ><img
                src="../assets/CircularIconLink/img/live.png"
                alt="team img"
              />
              <h4>Live</h4></a
            >
          </div>
        </div>
        <div class="card">
          <div class="box">
            <a href="#">
              <img
                src="../assets/CircularIconLink/img/students.png"
                alt="team img"
              />
              <h4>Global Students</h4></a
            >
          </div>
        </div>
        <div class="card">
          <div class="box">
            <a href="#"
              ><img
                src="../assets/CircularIconLink/img/education.png"
                alt="team img"
              />
              <h4>Education</h4></a
            >
          </div>
        </div>
        <div class="card">
          <div class="box">
            <a href="#"
              ><img
                src="../assets/CircularIconLink/img/e-learning.png"
                alt="team img"
              />
              <h4>e-learning</h4></a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CircularIconLink'
}
</script>

<style>
.container {
  max-width: 1140px;
  margin: auto;
  position: relative;
  min-height: 1px;
}

.resource {
  background-color: #ffffff;
  float: left;
  width: 100%;
}
.resource .card {
  width: 25%;
  float: left;
  padding: 0px 15px;
  border: 0px;
}
.resource .card .box {
  padding: 15px;
  /* background-color: #2d3035; */
  border-radius: 5px;
  transition: margin 1s ease, box-shadow 1s ease;
}
.resource .card .box a {
  text-decoration: none;
}
.resource .card .box:hover {
  margin-top: -15px;
  box-shadow: 0px 0px 40px black;
}
.resource .card .box img {
  width: 150px;
  display: block;
  margin: 10px auto;
  border-radius: 50%;
}

.resource .card .box h4 {
  font-size: 20px;
  font-family: open sans;
  margin: 20px 0px 10px;
  color: #000000;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
}

/*responsive*/

@media (max-width: 991px) {
  .resource .card {
    width: 50%;
    margin-bottom: 30px;
  }
}

@media (max-width: 550px) {
  .resource .card {
    width: 50%;
  }
}
</style>
