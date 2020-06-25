<template>
  <div id="profile_cards" class="profile-class">
    <div class="cards cards-upper">
      <div class="cards-header">
        <h5>My Xpay Account</h5>
        <div>
          <img src="../assets/Profile/search.png" class="search" />
          <button class="cornerbtn">Edit</button>
        </div>
      </div>
      <hr />
      <div class="cards-footer">
        <div class="accounts">
          <ul>
            <li>
              Active Account
              <br />BGD 1584 1456 8745
            </li>
            <li>
              Active Account
              <br />BGD 1584 1456 8745
            </li>
          </ul>
        </div>
        <div class="pay-list">
          <ul>
            <li>
              <button class="bbtns" style="background-color: #ff0000;">
                Block Account
              </button>
            </li>
            <li>
              <button class="bbtns">Unblock Account</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <br />

    <div class="cards">
      <div class="cards-header">
        <h5>My Bills</h5>
        <div>
          <button class="cornerbtn">Filter By</button>
        </div>
      </div>
      <hr />
      <div class="cards-footer" id="lowerfooter">
        <div class="bill-list">
          <ul>
            <li>Phone Bill</li>
            <li id="NP">Internet Bill</li>
            <li>House Bill</li>
            <li>Income Tax</li>
          </ul>
        </div>
        <div class="pay-list">
          <ul>
            <li>
              <button class="lbtns">Bill Paid</button>
            </li>
            <li>
              <button class="lbtns" style="background-color:#ff0000;">
                Not Paid
              </button>
            </li>
            <li>
              <button class="lbtns">Bill Paid</button>
            </li>
            <li>
              <button class="lbtns">Bill Paid</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCards'
}
</script>

<style lang="scss" scoped>
.profile-class {
  margin-top: 100px;
  margin-left: 100px;
  .cards {
    width: 450px;
    height: 270px;
    border: 3px solid #020266;
    border-radius: 30px;
    h5 {
      margin: auto 10px;
    }
  }
  .search {
    margin-right: 50px;
  }
  hr {
    border: 2px solid #020266;
  }
  .cards-header {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    margin: 0 4px;
  }
  .cards-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #lowerfooter {
    margin-top: -25px;
  }
  .pay-list ul {
    list-style: none;
  }
  .footer li {
    margin-top: 20px;
    margin-left: -10px;
  }
  .pay-list li {
    margin-top: 20px;
    margin-right: 50px;
  }

  .bill-list ul li {
    list-style: none;
    color: #888888;
  }

  .bill-list ul li::before {
    position: relative;
    top: 8px;
    content: '\2022';
    color: #8cc63f;
    font-size: 35px;
    display: inline-block;
    width: 1em;
    margin-left: -10px;
  }

  button {
    border: none;
    border-radius: 15px;
  }

  .lbtns {
    width: 100px;
    height: 25px;
    color: white;
    background-color: #8cc63f;
    margin-top: 5px;
  }

  .cornerbtn {
    margin-top: 10px;
    font-size: 15px;
    height: 25px;
    width: 70px;
    color: white;
    background-color: #020266;
  }

  .bbtns {
    font-size: 15px;
    width: 150px;
    height: 30px;
    color: white;
    background-color: #8cc63f;
    margin-bottom: 20px;
  }

  .accounts li {
    list-style: none;
    margin-top: 10px;
    color: #888888;
  }

  #NP::before {
    color: #ff0000;
  }

  img {
    margin-top: 10px;
    height: 25px;
  }

  .cards-upper {
    margin-bottom: 50px;
  }
}
</style>
