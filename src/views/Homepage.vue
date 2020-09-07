<template>
  <div id="homepage">
    <BannerSlider></BannerSlider>
    <template v-if="!loggedIn">
      <BundlePack></BundlePack>
      <ExamShowcase></ExamShowcase>
      <LatetstArticles></LatetstArticles>
      <QuestionBank></QuestionBank>
      <CustomCard></CustomCard>
      <FAQ></FAQ>
      <UpcomingExam></UpcomingExam>
      <StartexamPromotion></StartexamPromotion>
    </template>
    <template v-else>
      <UserStatistics></UserStatistics>
      <CircularIconLink></CircularIconLink>
      <HomePageCard></HomePageCard>
      <LatetstArticles></LatetstArticles>
    </template>
    <HomeFooter></HomeFooter>
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
import UserStatistics from '@/components/UserStatistics.vue'
import CircularIconLink from '@/components/CircularIconLink.vue'
import HomePageCard from '@/components/Homepage2Cards.vue'
import UpcomingExam from '@/components/UpcomingExam.vue'
import LatetstArticles from '@/components/Homepage3Cards.vue'
import StartexamPromotion from '@/components/StartexamPromotion.vue'
export default {
  name: 'Homepage',
  components: {
    BannerSlider,
    BundlePack,
    ExamShowcase,
    QuestionBank,
    CustomCard,
    FAQ,
    HomeFooter,
    UserStatistics,
    CircularIconLink,
    HomePageCard,
    UpcomingExam,
    LatetstArticles,
    StartexamPromotion
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style lang="scss" scoped></style>
