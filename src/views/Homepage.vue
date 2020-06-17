<template>
  <div id="homepage">
    <BannerSlider></BannerSlider>
    <BundlePack></BundlePack>
  </div>
</template>

<script>
import BannerSlider from "@/components/BannerSlider.vue";
import BundlePack from "@/components/BundlePack.vue";

export default {
  name: "Homepage",
  components: {
    BannerSlider,
    BundlePack
  }
};
</script>

<style lang="scss" scoped></style>
