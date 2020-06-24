<template>
  <div class="contained d-flex">
    <div class="dashboard">
      <h3>My Dashboard</h3>
      <div class="dashboard-navi d-flex">
        <button type="button" name="button">Profile</button>
        <button type="button" name="button">Contact info</button>
        <button type="button" name="button">Academic info</button>
        <button type="button" name="button">Change Password</button>
        <button type="button" name="button">Promotions</button>
        <button type="button" name="button">Transaction History</button>
      </div>
    </div>
    <div class="profile">
      <h4>Profile Photo</h4>
      <img src="../assets/Profile/zunaid-examspace.png" alt="profile-picture" />
      <button type="button" name="button">Upload Profile Photo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDashboard'
}
</script>

<style lang="scss" scoped>
$dark-blue: #020266;
.contained {
  margin: 50px 20px;
}
.dashboard-navi {
  flex-direction: column;
}
.dashboard-navi button {
  width: 170px;
  height: 40px;
  margin-top: 12px;
  border: none;
  text-align: left;
  cursor: pointer;
  background-color: #ebf6f1;
  font-family: Arial;
  font-weight: 600;
}
.dashboard {
  padding: 5px;
  margin-left: 15px;
}
.dashboard h3 {
  margin-bottom: 6px;
  margin-left: 15px;
  font-size: 20px;
  color: $dark-blue;
  font-family: Arial;
  font-weight: bold;
}
.dashboard-navi button:hover {
  background-color: $dark-blue;
  color: #ffffff;
}
.profile {
  margin-top: 30px;
  margin-left: 20px;
}
.profile img {
  width: 140px;
  margin-left: 10px;
}
.profile button {
  display: block;
  border: none;
  font-family: Arial;
  font-weight: 600;
  background-color: #cccccc;
  cursor: pointer;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  width: 140px;
}
.profile button:hover {
  background-color: #b3b3b3;
}
.profile h4 {
  font-family: Arial;
  font-size: 27px;
  margin-bottom: 3px;
}
</style>
