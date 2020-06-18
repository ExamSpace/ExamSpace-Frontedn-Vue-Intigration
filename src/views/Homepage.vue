<template>
  <div id="homepage">
    <BannerSlider></BannerSlider>
    <BundlePack></BundlePack>
    <ExamShowcase></ExamShowcase>
    <div class="one">
      <h1>From Branch One</h1>
    </div>
    <div class="tow">
      <p>Editted from two</p>
    </div>
  </div>
</template>

<script>
import BannerSlider from "@/components/BannerSlider.vue";
import BundlePack from "@/components/BundlePack.vue";
import ExamShowcase from "@/components/ExamShowcase.vue";
export default {
  name: "Homepage",
  components: {
    BannerSlider,
    BundlePack,
    ExamShowcase
  }
};
</script>

<style lang="scss" scoped>
</style>
