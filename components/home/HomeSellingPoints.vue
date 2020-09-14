<template>
  <div class="selling-points">
    <HomeTitle title="unique selling points" desc="At vero eos et accusamus et iusto"></HomeTitle>
    <div class="container">
      <div class="row">
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/best.png" alt="best" class="feature">
          <h3 class="feature-name">Exclusive Experts</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/latest.png" alt="best" class="feature">
          <h3 class="feature-name">Latest  Technologies</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/diamond.png" alt="best" class="feature">
          <h3 class="feature-name">Iuxirious Experince</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/user.png" alt="best" class="feature">
          <h3 class="feature-name">All You Need Under One Roof</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/one.png" alt="best" class="feature">
          <h3 class="feature-name">First Time In Jeddah</h3>
          <p class="feature-description">Est diam debitis an, error  recusabo id pro, quo </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeTitle from "./shared/HomeTitle";

  export default {
    name: "SellingPoints",
    components: {HomeTitle}
  }
</script>

<style scoped lang="scss">
  .feature{
    display: block;
    height: 70px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .feature-name{
    font-size: 1.6rem;
  }
  .feature-description{
    color: #9a9a9a;
  }
</style>
