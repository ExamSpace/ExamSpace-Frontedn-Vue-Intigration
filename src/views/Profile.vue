<template>
  <div>
    <ProfileDashboard></ProfileDashboard>
    <div class="container d-flex flex-wrap">
      <div>
        <ProfileCards class="d-none"></ProfileCards>
      </div>
    </div>
    <div>
      <Address></Address>
      <Blood></Blood>
      <Configuration class="d-none"></Configuration>
      <Contact></Contact>
      <br />
    </div>
  </div>
</template>

<script>
import ProfileCards from '@/components/ProfileCards.vue'
import ProfileDashboard from '@/components/ProfileDashboard.vue'
import Address from '@/components/AddressInfo.vue'
import Blood from '@/components/BloodGroup.vue'
import Configuration from '@/components/Configurations.vue'
import Contact from '@/components/Contacts.vue'
export default {
  name: 'Profile',
  components: {
    ProfileCards,
    ProfileDashboard,
    Address,
    Blood,
    Configuration,
    Contact
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  padding-bottom: 50px;
  border-radius: 20px;
  margin-bottom: -80px;
}
</style>
