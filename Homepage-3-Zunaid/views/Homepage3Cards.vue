<template>
  <div class="homepage3cards">
    <div class="container">
      <div class="heading-div" style="text-align: center;">
        <h1 class="showcase-top mb-0" style="color: #020266;">
          Latest Articles, Exam Updates & Discussions
        </h1>
        <h3 class="showcase-bottom" style="color: #808080;">
          Preparationh Tips, Strategies, Exam Updates, Study Plans- We Got You
          Govered
        </h3>
      </div>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <img
                class
                src="../assets/card1.png"
                alt="Card image cap"
                style="width: 47px;"
              />
              <h5 class="card-title mt-3 ml-1">Latest Articles</h5>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <hr />
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <hr />
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <a href="#" class="anchor-text">
              <small class="text-danger" style="font-weight: bold;"
                >Last updated 3 mins ago</small
              >
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <img
                class
                src="../assets/card2.png"
                alt="Card image cap"
                style="width: 47px;"
              />
              <h5 class="card-title mt-3 ml-1">Trending Articles</h5>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <hr />
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <hr />
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <a href="#" class="anchor-text">
              <small class="text-danger" style="font-weight: bold;"
                >Last updated 3 mins ago</small
              >
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <img
                class
                src="../assets/card3.png"
                alt="Card image cap"
                style="width: 47px;"
              />
              <h5 class="card-title mt-3 ml-1">Daily GK & CA</h5>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <hr />
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <hr />
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>

            <a href="#" class="anchor-text">
              <small class="text-danger" style="font-weight: bold;"
                >Last updated 3 mins ago</small
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage3Cards"
};
</script>

<style scoped>
#homepage3cards {
}

body {
  margin: 0;
  padding: 0;
}
#top1 {
  padding-bottom: 15px;
  margin: 0px 10px 10px 5px;
}
#bottom1 {
  padding-top: 20px;
}
.top1 .card-body {
  background-color: #f8f8f8;
  border-radius: 5%;
  border-bottom: 2px solid #00aeef; /*here change color code*/
  border-right: 3px solid #00aeef;
  margin-left: 15px;
  text-align: center;
  margin-bottom: 46px;
  margin-top: 28px;
}
.bottom1 .card-body {
  background-color: #d9f1fd;
  margin-left: 31px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 7px;
}

.card {
  border: none;
}
.card img {
  align-content: center;
  margin-bottom: 10px;
}

.bottom1 .col {
  margin-top: 10px;
}

.flexbottom {
  display: flex;
  justify-content: space-evenly;
}
.card-title {
  margin-bottom: 0px;
  font-weight: 400;
}
</style>
