<template>
  <div id="register">
    <form @submit.prevent="postContact" v-if="update">
      <p class="h4 text-center mb-4">Contacts</p>
      <label for="name" class="grey-text">Name</label>
      <input
        type="text"
        v-model="contact_info.name"
        id="name"
        class="form-control"
      />
      <br />
      <label for="email" class="grey-text">Email</label>
      <input
        type="email"
        v-model="contact_info.email"
        id="email"
        class="form-control"
      />
      <br />
      <label for="message" class="grey-text">Message</label>
      <b-textarea
        id="message"
        v-model="contact_info.message"
        rows="5"
        cols="60"
      ></b-textarea>
      <br />
      <div class="text-center">
        <b-button class="btn" type="submit">Update</b-button>
      </div>
    </form>
    <div v-else>
      <p class="h4 text-center mb-4">Contacts</p>
      <p>Name: {{ contact_info.name }}</p>
      <p>Email: {{ contact_info.email }}</p>
      <p>Message: {{ contact_info.message }}</p>
      <div>
        <b-button class="mr-3" @click="putContact">Save</b-button>
        <b-button @click="edit">Edit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      contact_info: {},
      update: false
    }
  },
  methods: {
    postContact() {
      getAPI
        .post(
          'api/userInfo/contact/new',
          {
            name: this.name,
            email: this.email,
            message: this.message
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          this.getContact()
        })
        .catch(err => {
          console.log(err)
        })
      this.update = false
    },
    putContact() {
      getAPI
        .put(
          'api/userInfo/contact/new',
          {
            name: this.contact_info.name,
            email: this.contact_info.email,
            message: this.contact_info.message
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          }
        )
        .then(response => {
          this.$alert('Saved!')
          this.getContact()
        })
        .catch(err => {
          this.$alert('Error!')
          console.log(err)
        })
    },
    getContact() {
      getAPI
        .get('api/userInfo/contact', {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        })
        .then(response => {
          this.contact_info = response.data
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
    this.getContact()
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
