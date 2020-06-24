<template>
  <div class="container d-flex flex-wrap">
    <div>
      <ProfileDashboard></ProfileDashboard>
      <ProfileInfo></ProfileInfo>
    </div>
    <div>
      <ProfileCards></ProfileCards>
    </div>
  </div>
</template>

<script>
import ProfileCards from '@/components/ProfileCards.vue'
import ProfileDashboard from '@/components/ProfileDashboard.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
export default {
  name: 'Profile',
  components: {
    ProfileCards,
    ProfileDashboard,
    ProfileInfo
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  padding-bottom: 50px;
  background-color: #fbfbfb;
  border-radius: 20px;
}
</style>
