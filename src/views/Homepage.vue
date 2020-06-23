<template>
  <div id="homepage">
    <BannerSlider></BannerSlider>
    <template v-if="!isLoggedIn">
      <BundlePack></BundlePack>
      <ExamShowcase></ExamShowcase>
      <QuestionBank></QuestionBank>
      <CustomCard></CustomCard>
      <FAQ></FAQ>
      <HomeFooter></HomeFooter>
    </template>
  </div>
</template>

<script>
import BannerSlider from '@/components/BannerSlider.vue'
import BundlePack from '@/components/BundlePack.vue'
import ExamShowcase from '@/components/ExamShowcase.vue'
import QuestionBank from '@/components/QuestionBank.vue'
import CustomCard from '@/components/CustomCard.vue'
import FAQ from '@/components/FAQ.vue'
import HomeFooter from '@/components/HomeFooter.vue'
export default {
  name: 'Homepage',
  components: {
    BannerSlider,
    BundlePack,
    ExamShowcase,
    QuestionBank,
    CustomCard,
    FAQ,
    HomeFooter
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style lang="scss" scoped></style>
