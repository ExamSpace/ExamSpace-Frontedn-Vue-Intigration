<template>
  <div id="map_component">
    <b-row>
      <b-col md="8">
        <div class="outer-container">
          <div class="devision">
            <h4 class="title">Bangladesh Devision</h4>
            <p>Barisal</p>
            <p>Chittagong</p>
            <p>Dhaka</p>
            <p>Mymensing</p>
            <p>Khulna</p>
            <p>Rajshahi</p>
            <p>Rangpur</p>
            <p>Sylhet</p>
          </div>
        </div>
        <b-row>
          <b-col cols="6" sm="6" md="3">
            <div class="gray-card">
              <p class="title">Union</p>
              <div class="list">
                <p>One</p>
                <p>two</p>
                <p>three</p>
              </div>
            </div>
          </b-col>
          <b-col cols="6" sm="6" md="3">
            <div class="gray-card">
              <p class="title">Upazila</p>
              <div class="list">
                <p>One</p>
                <p>two</p>
                <p>three</p>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="district-list">
              <p class="title">Bangladesh District</p>
              <table>
                <tr v-for="idx in 6" :key="idx">
                  <td class="right-border"><p>Bagerhat</p></td>
                  <td class="right-border"><p>Feni</p></td>
                  <td class="right-border"><p>Madaripur</p></td>
                  <td><p>Patuakhali</p></td>
                </tr>
              </table>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4">
        <GoogleMap></GoogleMap>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
export default {
  name: 'MapComponent',
  components: {
    GoogleMap
  }
}
</script>

<style lang="scss" scoped>
$sky_blue_color: #d9f1fd;
#map_component {
  padding: 1rem 1rem;
}
.district-list {
  background-color: $sky_blue_color;
  border-radius: 8px;
  padding: 1rem 1rem;
  height: 220px;
  display: block;
  .title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
  .right-border {
    border-right: 2px solid white;
  }
  table {
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  td {
    width: 25%;
    font-size: 0.8em;
    padding-left: 1rem;
    p {
      margin: 0;
      cursor: pointer;
    }
  }
}
.gray-card {
  background-color: rgba(236, 236, 236, 0.65);
  border-radius: 4px;
  height: 220px;
  margin: 0.25rem 0;
  .title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
  .list {
    background-color: whitesmoke;
    margin: 0.25rem 0.2rem;
    border-radius: 8px;
    padding: 0.1rem 0.3rem;
    height: 170px;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    p {
      margin: 0;
      font-size: 0.8em;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
.outer-container {
  background-color: $sky_blue_color;
  padding: 1rem 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  .devision {
    background-color: white;
    border-radius: 8px;
    padding: 1rem 1rem;

    .title {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
    }
    p {
      display: inline-block;
      padding: 0.25rem 2rem;
      font-size: 1.5em;
      color: #2c7fa8;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
