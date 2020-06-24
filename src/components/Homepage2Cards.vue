<template>
  <div class="homepage2cards">
    <div class="custom-container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="wrapper">
            <div class="inner">
              <div class="card">
                <div class="card-head">
                  <img
                    src="../assets/Homepage2/img/Group.png"
                    class="card-img-top pt-1"
                    alt
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title mb-1">SBI PO 2020</h5>
                  <p class="card-text text-center ctext">137 Total Test</p>
                  <a
                    href="#"
                    class="btn btn-primary btn-md ml-4 mx-auto d-block"
                    >2 Free Tests</a
                  >
                  <p class="card-text mt-4">60 Chapter Tests</p>
                  <p class="card-text">30 Sectional Tests Test</p>
                  <p class="card-text">375 Full Test-Prelims</p>
                  <p class="card-text">+10 More Tests</p>
                </div>
              </div>
            </div>
            <div class="inner">
              <div class="card">
                <div class="card-head">
                  <img
                    src="../assets/Homepage2/img/Group.png"
                    class="card-img-top pt-1"
                    alt
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title mb-1">SBI PO 2020</h5>
                  <p class="card-text text-center ctext">137 Total Test</p>
                  <a
                    href="#"
                    class="btn btn-primary btn-md ml-4 mx-auto d-block"
                    >2 Free Tests</a
                  >
                  <p class="card-text mt-4">60 Chapter Tests</p>
                  <p class="card-text">30 Sectional Tests Test</p>
                  <p class="card-text">375 Full Test-Prelims</p>
                  <p class="card-text">+10 More Tests</p>
                </div>
              </div>
            </div>
            <div class="inner">
              <div class="card">
                <div class="card-head">
                  <img
                    src="../assets/Homepage2/img/Group.png"
                    class="card-img-top pt-1"
                    alt
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title mb-1">SBI PO 2020</h5>
                  <p class="card-text text-center ctext">137 Total Test</p>
                  <a
                    href="#"
                    class="btn btn-primary btn-md ml-4 mx-auto d-block"
                    >2 Free Tests</a
                  >
                  <p class="card-text mt-4">60 Chapter Tests</p>
                  <p class="card-text">30 Sectional Tests Test</p>
                  <p class="card-text">375 Full Test-Prelims</p>
                  <p class="card-text">+10 More Tests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="wrapper">
            <div class="inner">
              <div class="card">
                <img
                  class="card-img-top imgb"
                  src="../assets/Homepage2/img/groupb.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Arithmetic Masterclass For Bank, SSC & Railways
                  </h5>
                  <p class="card-text rbottom">
                    80 Live Classes, 175 Quizzes & 12 Notes
                  </p>
                </div>
              </div>
            </div>
            <div class="inner">
              <div class="card">
                <img
                  class="card-img-top imgb"
                  src="../assets/Homepage2/img/groupb.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Arithmetic Masterclass For Bank, SSC & Railways
                  </h5>
                  <p class="card-text rbottom">
                    80 Live Classes, 175 Quizzes & 12 Notes
                  </p>
                </div>
              </div>
            </div>
            <div class="inner">
              <div class="card">
                <img
                  class="card-img-top imgb"
                  src="../assets/Homepage2/img/groupb.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Arithmetic Masterclass For Bank, SSC & Railways
                  </h5>
                  <p class="card-text rbottom">
                    80 Live Classes, 175 Quizzes & 12 Notes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage2Cards'
}
</script>

<style scoped>
.custom-container {
  padding: 1rem 1rem;
}

.card-img-top {
  width: 4rem;
  margin-bottom: -6px;
}
.card {
  margin-top: 10px;
  width: 200px;
  height: 20rem;
  border-radius: 1rem;
  border: none;
  background-image: linear-gradient(
    180deg,
    #a9ddf3 0%,
    rgba(255, 255, 255, 1) 50%
  );
  white-space: normal;
}
.card-body h5,
a {
  text-align: center;
  font-size: 0.9rem;
}
.card-head {
  text-align: center;
}
.card-body p {
  font-size: 0.7rem;
}
.card-body a {
  border-radius: 1rem;
  margin-bottom: -8px;
}

.imgb {
  width: 200px;
  height: 130px;
  border-radius: 10%;
}

.bottomtext {
  margin-top: 15px;
}

.ctext {
  font-weight: lighter;
}

.rbottom {
  margin-top: 66px;
}

.wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  display: block;
  position: relative;
  white-space: nowrap;
  width: 100%;
}

.inner {
  display: inline-block;
  margin: 0 0.25rem;
}
</style>
