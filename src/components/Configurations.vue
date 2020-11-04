<template>
  <div id="register">
    <form>
      <p class="h4 text-center mb-4">Add Configuration</p>
      <label for="name" class="grey-text">Name</label>
      <input type="text" v-model="name" id="name" class="form-control" />
      <br />
      <label for="organization" class="grey-text">Organization name</label>
      <input
        type="text"
        v-model="organization"
        id="organization"
        class="form-control"
      />
      <br />
      <label for="domain" class="grey-text">Domain name</label>
      <input type="text" v-model="domain" id="domain" class="form-control" />
      <br />
      <label for="email" class="grey-text">Email</label>
      <input type="email" v-model="domain" id="email" class="form-control" />
      <br />
      <label for="meta" class="grey-text">Meta title</label>
      <b-textarea id="meta" v-model="meta" rows="5" cols="60"></b-textarea>
      <br />
      <label for="desc" class="grey-text">Meta desc</label>
      <b-textarea id="desc" v-model="desc" rows="5" cols="60"></b-textarea>
      <br />
      <label for="timezone" class="grey-text">Timezone</label>
      <input
        type="text"
        v-model="timezone"
        id="timezone"
        class="form-control"
      />
      <br />
      <label for="author" class="grey-text">Author</label>
      <input type="text" v-model="author" id="author" class="form-control" />
      <br />
      <b-check-group class="d-flex flex-column">
        <b-checkbox v-model="sms">
          Sms
        </b-checkbox>
        <b-checkbox v-model="email">
          Email notification
        </b-checkbox>
        <b-checkbox v-model="guest">
          Guest login
        </b-checkbox>
        <b-checkbox v-model="frontend">
          Front end
        </b-checkbox>
      </b-check-group>
      <br />
      <div class="text-center">
        <b-button class="btn" type="submit">Submit</b-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Configuration'
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
