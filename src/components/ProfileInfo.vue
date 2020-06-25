<template>
  <div class="contained">
    <h4>JAHIRUL ISLAM</h4>
    <form action="#">
      <label for="fname">Full Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Jahirul Islam"
      />

      <label for="fname">Gender</label>
      <div id="radioGroup">
        <div class="wrap">
          <label for="markStudent">Male</label>
          <input type="radio" name="radio" id="markMale" value="Male" />
        </div>

        <div class="wrap">
          <label for="markAdmin">Female</label>
          <input type="radio" name="radio" id="markFemale" value="Female" />
        </div>
      </div>

      <label for="dob">Date Of Birth</label>
      <input type="date" id="dob" name="dateofbirth" />

      <label for="mob">Mobile</label>
      <input type="text" id="mob" name="mobile" placeholder="+8801XXXXXXXXX" />

      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="lastname"
        placeholder="info@examsspace.com"
      />
      <p class="alerts">SMS Alert Activation.</p>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo'
}
</script>

<style lang="scss" scoped>
.contained {
  margin-left: 40px;
  h4 {
    color: #020266;
  }
}

input[type='text'],
select {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='date'],
select {
  width: 80%;
  padding: 0px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type='submit'] {
  width: 150px;
  background-color: #020266;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  height: 35px;
  margin-top: -30px;
}

input[type='submit']:hover {
  background-color: #45a049;
}
#radioGroup .wrap {
  display: inline-block;
}
#radioGroup label {
  display: block;
  text-align: center;
  margin: 0 0.2em;
}
#radioGroup input[type='radio'] {
  display: block;
  margin: 0.5em auto;
}

#radioGroup {
  margin-top: 10px;
  margin-bottom: 10px;
}

.alerts {
  color: #ff0303;
  margin-top: -30px;
}

.alerts::after {
  content: '\2022';
  color: #01ff00;
  font-size: 50px;
  position: relative;
  top: 12px;
  left: 7px;
}

[type='date'] {
  background: #fff
    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;
}
[type='date']::-webkit-inner-spin-button {
  display: none;
}
[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0;
  margin-right: -12px;
}
.header {
  margin-left: 15px;
}

#fname,
#dob,
#mob,
#email {
  border-radius: 15px;
  height: 20px;
}
</style>
