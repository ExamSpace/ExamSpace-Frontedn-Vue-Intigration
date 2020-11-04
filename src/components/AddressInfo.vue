<template>
  <div id="register">
    <form @submit.prevent="putAddress" v-if="update">
      <p class="h4 text-center mb-4">Address</p>
      <label for="defaultFormRegisterEmailEx" class="grey-text"
        >Full Name</label
      >
      <input
        type="text"
        v-model="address_info.full_name"
        id="defaultFormRegisterEmailEx"
        class="form-control"
      />
      <br />
      <label for="defaultFormRegisterPasswordEx" class="grey-text"
        >Address</label
      >
      <input
        type="text"
        v-model="address_info.address"
        id="defaultFormRegisterPasswordEx"
        class="form-control"
      />
      <br />
      <label for="defaultFormRegisterPasswordEx2" class="grey-text"
        >Address 2</label
      >
      <input
        type="text"
        v-model="address_info.address_2"
        id="defaultFormRegisterPasswordEx2"
        class="form-control"
      />
      <br />
      <label for="zip" class="grey-text">Zip Code</label>
      <input
        type="text"
        v-model="address_info.zip_code"
        id="zip"
        class="form-control"
      />
      <br />
      <label for="lat" class="grey-text">Latitude</label>
      <input
        type="text"
        v-model="address_info.lat"
        id="lat"
        class="form-control"
      />
      <br />
      <label for="long" class="grey-text">Longitude</label>
      <input
        type="text"
        v-model="address_info.long"
        id="long"
        class="form-control"
      />
      <br />
      <b-form-select
        v-model="address_info.city"
        :options="options"
      ></b-form-select>
      <div class="text-center mt-4">
        <b-button class="btn" type="submit">Update</b-button>
      </div>
    </form>
    <div v-else>
      <p>Name: {{ address_info.full_name }}</p>
      <p>Address: {{ address_info.address }}</p>
      <p>Address 2: {{ address_info.address_2 }}</p>
      <p>Zipe code: {{ address_info.zip_code }}</p>
      <p>Lat: {{ address_info.lat }}</p>
      <p>Long: {{ address_info.long }}</p>
      <p>City: {{ options[address_info.city].text }}</p>
      <div>
        <b-button @click="edit">Edit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'Address',
  data() {
    return {
      cities: [],
      update: false,
      address_info: {},
      fname: '',
      address: '',
      address2: '',
      zip: '',
      lat: '',
      long: '',
      selected: null,
      options: [{ value: null, text: 'Please select an option' }]
    }
  },
  methods: {
    putAddress() {
      getAPI
        .post(
          'api/userInfo/address/new',
          {
            city: this.selected,
            full_name: this.fname,
            address: this.address,
            address_2: this.address2,
            zip_code: this.zip,
            lat: this.lat,
            long: this.long
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          this.getAddress()
        })
        .catch(err => {
          console.log(err)
        })
      this.update = false
    },
    getAddress() {
      getAPI
        .get('api/userInfo/address', {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        })
        .then(response => {
          this.address_info = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCity() {
      getAPI
        .get('api/userInfo/cities', {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        })
        .then(response => {
          response.data.forEach(city => {
            this.cities = response.data
            this.options.push({ value: city.id, text: city.title })
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    edit() {
      this.update = !this.update
    }
  },
  beforeMount() {
    this.getAddress(), this.getCity()
  }
}
</script>
<style>
#register {
  width: 30%;
  margin: 10% auto 0 auto;
}
.btn:hover {
  background-color: cadetblue;
  transition-duration: 0.5s;
}
</style>
