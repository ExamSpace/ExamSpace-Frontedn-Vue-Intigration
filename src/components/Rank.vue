<template>
  <div id="rank">
    <div class="container-wrap">
      <section id="leaderboard">
        <nav class="ladder-nav">
          <div class="ladder-title">
            <h1>Scoreboard</h1>
          </div>
          <div class="ladder-search">
            <input
              type="text"
              id="search-leaderboard"
              class="live-search-box"
              placeholder="Search Username..."
            />
          </div>
        </nav>
        <div><h1></h1></div>
        <table id="rankings" class="leaderboard-results" width="100%">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Users</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(mark, index) in this.markObjects" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ mark.user }}</td>
              <td>{{ mark.total }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'Rank',
  data: function() {
    return {
      markObjects: []
    }
  },
  methods: {
    loadRank: function() {
      getAPI
        .get('api/exam/' + this.$route.params.idx + '/marksList', {
          headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }
        })
        .then(response => {
          this.markObjects = response.data
          this.markObjects.sort((a, b) => (a.total < b.total ? 1 : -1))
          console.log.markObjects
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.loadRank()
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
body {
  background: #232323;
}
input[type='text'],
textarea,
input[type='email'],
input[type='password'],
input[type='tel'],
input[type='url'],
input[type='search'],
input[type='date'] {
  padding: 10px;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  line-height: 24px;
  color: #555;
  background-color: #f1f1f1;
  border: none;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
}
input[type='text'],
textarea,
input[type='email'],
input[type='password'],
input[type='tel'],
input[type='url'],
input[type='search'],
input[type='date'],
.material.woocommerce-page[data-form-style='default'] input#coupon_code {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0);
}
/* /end Codepen Specific */
/* Ladder Navigation */
#leaderboard {
  padding: 50px;
}
.ladder-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #5055cb;
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid #686ef9;
}
.ladder-title {
  flex: 2;
}
.ladder-search {
  flex: 1;
  padding-right: 25px;
}
.ladder-title {
  font-size: 20px;
  color: #888dff !important;
  font-weight: bold;
  text-transform: uppercase;
}
.ladder-search input {
  color: white;
}
.ladder-search input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #888dff;
}
.ladder-search input::-moz-placeholder {
  /* Firefox 19+ */
  color: #888dff;
}
.ladder-search input:-ms-input-placeholder {
  /* IE 10+ */
  color: #888dff;
}
.ladder-search input:-moz-placeholder {
  /* Firefox 18- */
  color: #888dff;
}
/* /end Ladder Navigation */
/* Leaderboard Results */
.leaderboard-results {
  text-align: left;
  border-collapse: collapse;
}
.leaderboard-results thead th {
  padding: 25px;
  color: #747474;
  font-size: 14px;
  font-weight: bold;
}
.leaderboard-results tbody td {
  padding: 15px 25px;
  background: #1a1a1a;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 5px solid #232323;
}
.leaderboard-results tbody td:nth-of-type(7) {
  font-weight: bold;
}
.leaderboard-results tbody tr:hover td {
  background: #1d1d1d;
}
.leaderboard-results tbody tr {
  color: #747474;
}
.leaderboard-results tbody tr:first-child {
  color: #686ef9;
}
.leaderboard-results tbody span {
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 50%;
}
.leaderboard-results tbody tr:first-child span {
  background: #5055cb;
  color: white;
}
.leaderboard-results tbody tr span {
  background: #262626;
  color: #747474;
}
/* /end Leaderboard Results */
</style>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
body {
  background: #232323;
}
input[type='text'],
textarea,
input[type='email'],
input[type='password'],
input[type='tel'],
input[type='url'],
input[type='search'],
input[type='date'] {
  padding: 10px;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  line-height: 24px;
  color: #555;
  background-color: #f1f1f1;
  border: none;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
}
input[type='text'],
textarea,
input[type='email'],
input[type='password'],
input[type='tel'],
input[type='url'],
input[type='search'],
input[type='date'],
.material.woocommerce-page[data-form-style='default'] input#coupon_code {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0);
}
/* /end Codepen Specific */
/* Ladder Navigation */
#leaderboard {
  padding: 50px;
}
.ladder-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #5055cb;
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid #686ef9;
}
.ladder-title {
  flex: 2;
}
.ladder-search {
  flex: 1;
  padding-right: 25px;
}
.ladder-title {
  font-size: 20px;
  color: #888dff !important;
  font-weight: bold;
  text-transform: uppercase;
}
.ladder-search input {
  color: white;
}
.ladder-search input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #888dff;
}
.ladder-search input::-moz-placeholder {
  /* Firefox 19+ */
  color: #888dff;
}
.ladder-search input:-ms-input-placeholder {
  /* IE 10+ */
  color: #888dff;
}
.ladder-search input:-moz-placeholder {
  /* Firefox 18- */
  color: #888dff;
}
/* /end Ladder Navigation */
/* Leaderboard Results */
.leaderboard-results {
  text-align: left;
  border-collapse: collapse;
}
.leaderboard-results thead th {
  padding: 25px;
  color: #747474;
  font-size: 14px;
  font-weight: bold;
}
.leaderboard-results tbody td {
  padding: 15px 25px;
  background: #1a1a1a;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 5px solid #232323;
}
.leaderboard-results tbody td:nth-of-type(7) {
  font-weight: bold;
}
.leaderboard-results tbody tr:hover td {
  background: #1d1d1d;
}
.leaderboard-results tbody tr {
  color: #747474;
}
.leaderboard-results tbody tr:first-child {
  color: #686ef9;
}
.leaderboard-results tbody span {
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 50%;
}
.leaderboard-results tbody tr:first-child span {
  background: #5055cb;
  color: white;
}
.leaderboard-results tbody tr span {
  background: #262626;
  color: #747474;
}
/* /end Leaderboard Results */
</style>
