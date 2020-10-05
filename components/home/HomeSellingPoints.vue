<template>
  <div class="selling-points">
    <HomeTitle :title="$t('UniqueSellingPoints')" desc="At vero eos et accusamus et iusto"></HomeTitle>
    <div class="container">
      <div class="row">
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/best.png" alt="best" class="feature">
          <h3 class="feature-name">{{ $t('Experts') }}</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/latest.png" alt="best" class="feature">
          <h3 class="feature-name">{{ $t('Latest') }}</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/diamond.png" alt="best" class="feature">
          <h3 class="feature-name">{{ $t('Luxurious') }}</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/user.png" alt="best" class="feature">
          <h3 class="feature-name">{{$t('roof')}}</h3>
          <p class="feature-description">Est diam debitis an, error recusabo id pro, quo </p>
        </div>
        <div class="col-lg col-md-6 col-12 text-center">
          <img src="@/assets/images/one.png" alt="best" class="feature">
          <h3 class="feature-name">{{$t('fJadda')}}</h3>
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
  .selling-points{
    margin-bottom: 5rem;
    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }
  .feature{
    display: block;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .feature-name{
    font-size: 1.7rem;
  }
  .feature-description{
    color: #9a9a9a;
  }
</style>
