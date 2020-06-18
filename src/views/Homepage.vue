<template>
  <div id="homepage">
    <BannerSlider></BannerSlider>
    <BundlePack></BundlePack>
    <ExamShowcase></ExamShowcase>
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
