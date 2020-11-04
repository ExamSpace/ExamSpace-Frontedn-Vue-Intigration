<template>
  <div id="register">
    <form @submit.prevent="putBlood">
      <p class="h4 text-center mb-4">Blood Group</p>
      <label for="blood" class="grey-text">Blood group name</label>
      <input type="text" v-model="bname" id="blood" class="form-control" />
      <br />
      <div class="text-center">
        <b-button class="btn" type="submit">Submit</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'Blood',
  data() {
    return {
      bname: ''
    }
  },
  methods: {
    putBlood() {
      getAPI
        .put(
          'api/userInfo/bloodgroup/new',
          {
            blood_group_name: this.bname
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
#register {
  width: 30%;
  margin: 10% auto 0 auto;
}
.btn:hover {
  background-color: cadetblue;
  transition-duration: 0.5s;
}
</style>
