<template>
  <div id="register">
    <form @submit.prevent="postBlood" v-if="update">
      <p class="h4 text-center mb-4">Blood Group</p>
      <label for="blood" class="grey-text">Blood group name</label>
      <input type="text" v-model="bname" id="blood" class="form-control" />
      <br />
      <div class="text-center">
        <b-button class="btn" type="submit">Update</b-button>
      </div>
    </form>
    <div v-else>
      <p class="h4 text-center mb-4">Blood Group</p>
      <p>Blood Group: {{ bname.blood_group_name }}</p>
      <div>
        <b-button class="mr-3" @click="putBlood">Save</b-button>
        <b-button @click="edit">Edit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'Blood',
  data() {
    return {
      bname: '',
      update: false
    }
  },
  methods: {
    postBlood() {
      getAPI
        .post(
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
          this.getBlood()
        })
        .catch(err => {
          console.log(err)
        })
      this.update = false
    },
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
          this.$alert('Saved!')
          this.getBlood()
        })
        .catch(err => {
          this.$alert('Error!')
          console.log(err)
        })
    },
    getBlood() {
      getAPI
        .get('api/userInfo/bloodgroup', {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        })
        .then(response => {
          this.bname = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    edit() {
      this.update = !this.update
    }
  },
  mounted() {
    this.getBlood()
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
