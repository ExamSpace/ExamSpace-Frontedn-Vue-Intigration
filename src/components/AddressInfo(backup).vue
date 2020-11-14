<template>
  <div id="register">
    <form @submit.prevent="postProfile" v-if="update">
      <p class="h4 text-center mb-4">Profile</p>
      <label for="defaultFormRegisterEmailEx" class="grey-text"
        >Full Name</label
      >
      <input
        type="text"
        v-model="profile_info.full_name"
        id="defaultFormRegisterEmailEx"
        class="form-control"
      />
      <br />
      <label for="defaultFormRegisterEmailEx" class="grey-text"
        >Blood Group</label
      >
      <input
        type="text"
        v-model="profile_info.blood_group"
        id="defaultFormRegisterEmailEx"
        class="form-control"
      />
      <br />
      <label for="defaultFormRegisterPasswordEx" class="grey-text"
        >Address</label
      >
      <input
        type="text"
        v-model="profile_info.address"
        id="defaultFormRegisterPasswordEx"
        class="form-control"
      />
      <br />
      <label for="defaultFormRegisterPasswordEx2" class="grey-text"
        >Address 2</label
      >
      <input
        type="text"
        v-model="profile_info.address_2"
        id="defaultFormRegisterPasswordEx2"
        class="form-control"
      />
      <br />
      <label for="zip" class="grey-text">Zip Code</label>
      <input
        type="text"
        v-model="profile_info.zip_code"
        id="zip"
        class="form-control"
      />
      <br />
      <label for="lat" class="grey-text">Latitude</label>
      <input
        type="text"
        v-model="profile_info.lat"
        id="lat"
        class="form-control"
      />
      <br />
      <label for="long" class="grey-text">Longitude</label>
      <input
        type="text"
        v-model="profile_info.long"
        id="long"
        class="form-control"
      />
      <br />
      <label for="long" class="grey-text">City</label>
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <div class="text-center mt-4">
        <b-button class="btn" type="submit">Update</b-button>
      </div>
    </form>
    <div v-else>
      <p>Name: {{ profile_info.full_name }}</p>
      <p>Blood Group: {{ profile_info.blood_group }}</p>
      <p>Address: {{ profile_info.address }}</p>
      <p>Address 2: {{ profile_info.address_2 }}</p>
      <p>Zipe code: {{ profile_info.zip_code }}</p>
      <p>Lat: {{ profile_info.lat }}</p>
      <p>Long: {{ profile_info.long }}</p>
      <p>City: {{ options[selected] }}</p>
      <div>
        <b-button class="mr-3" @click="putProfile">Save</b-button>
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
      isProfileEmpty: true,
      cities: [],
      update: false,
      profile_info: {},
      fname: '',
      address: '',
      address2: '',
      zip: '',
      lat: '',
      long: '',
      bloodgroup: '',
      selected: null,
      options: [{ value: null, text: 'Please select an option' }]
    }
  },
  methods: {
    postProfile() {
      getAPI
        .post(
          'api/userInfo/profile/new',
          {
            full_name: this.profile_info.full_name,
            blood_group: this.profile_info.blood_group,
            address: this.profile_info.address,
            address_2: this.profile_info.address_2,
            zip_code: this.profile_info.zip_code,
            lat: this.profile_info.lat,
            long: this.profile_info.long,
            city: this.selected
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          this.getProfile()
        })
        .catch(err => {
          console.log(err)
        })

      this.update = false
    },
    putProfile() {
      getAPI
        .put(
          'api/userInfo/profile/new',
          {
            full_name: this.profile_info.full_name,
            blood_group: this.profile_info.blood_group,
            address: this.profile_info.address,
            address_2: this.profile_info.address_2,
            zip_code: this.profile_info.zip_code,
            lat: this.profile_info.lat,
            long: this.profile_info.long,
            city: this.selected
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          this.getProfile()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProfile() {
      getAPI
        .get('api/userInfo/profile', {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        })
        .then(response => {
          this.profile_info = response.data
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
    this.getProfile(), this.getCity()
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
