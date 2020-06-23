<template>
  <div id="bundlepack">
    <div class="pass">
      <div>
        <h3>Pass</h3>
      </div>
      <div>
        <p style="font-weight: bold;">TEST PASS</p>
        <p style="color: #a3a3a3;">Access 2500+ Tests</p>
      </div>
    </div>
    <br />
    <div class="nav">
      <div id="activeTab">Bank & Insurance</div>
      <div>SSC & Railways</div>
      <div>Engineering</div>
      <div>Teaching</div>
      <div>Defence & Police</div>
      <div>Civil Service</div>
    </div>
    <br />
    <div class="grid">
      <div class="row">
        <div class="col-sm" v-for="index in 4" :key="index">
          <div class="cell">
            <img src="../assets/BundlePack/img/bird.png" />
            <p>PO Sectional Pack</p>
            <p class="sub">30 Tests</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm" v-for="index in 4" :key="index">
          <div class="cell">
            <img src="../assets/BundlePack/img/bird.png" />
            <p>PO Sectional Pack</p>
            <p class="sub">30 Tests</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm" v-for="index in 4" :key="index">
          <div class="cell">
            <img src="../assets/BundlePack/img/bird.png" />
            <p>PO Sectional Pack</p>
            <p class="sub">30 Tests</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BundlePack'
}
</script>

<style scoped>
#bundlepack {
  padding: 1rem 1rem;
}
.pass {
  display: flex;
}

.pass h3 {
  background-color: #d50300;
  color: white;
  border-radius: 50%;
  width: 100px;
  text-align: center;
  margin-top: 10px;
}

.pass p {
  margin-bottom: -2px;
}

.nav {
  display: flex;
  justify-content: space-between;
}
.nav div {
  background-color: #ebf6f1;
  height: 50px;
  width: 200px;
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
}

#activeTab {
  background-color: #040466;
  color: white;
}

.grid {
  background-color: #ebf6f1;
  margin-bottom: 20px;
}

.cell {
  font-weight: bold;
  width: 200px;
  height: 70px;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px #888888;
}

.cell:before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 25px 0px 0px;
  border-radius: 40%;
  border-color: red;
  left: -78px;
  top: 0px;
  position: relative;
}

.sub {
  font-size: small;
  color: #d8d8d8;
  line-height: 0px;
}

.cell img {
  position: relative;
  left: -10px;
  height: 20px;
}
</style>
