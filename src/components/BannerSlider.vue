<template>
  <div id="banner_slider">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(image, index) in images" :key="index">
        <template v-slot:img>
          <img class="d-block img-fluid w-100" :src="image.images" alt />
        </template>
      </b-carousel-slide>
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" :src="images[0].images" alt />
        </template>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'Banner',
  data() {
    return {
      images: []
    }
  },
  mounted() {
    getAPI
      .get('api/img/banner-slider/')
      .then(response => {
        this.images = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
#banner_slider {
  padding: 0 1rem;
}
</style>
