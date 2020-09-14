<template>
    <nuxt-link class="doctor my-3" to="doctor-detail">
      <div class="row">
        <div class="col-5">
          <img src="@/assets/images/make-up.jpg" alt="doctor" class="doctor-img">
        </div>
        <div class="col-7">
          <h2 class="text-center doctor-name">doctor Name</h2>
          <p class="doctor-description">At vero eos et accusamus et iusto</p>
        </div>
      </div>
    </nuxt-link>
</template>

<script>
    export default {
        name: "Doctor"
    }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .doctor{
    display: block;
    text-decoration: none;
    border: 1px solid $mainColor;
    max-height: 400px;
    overflow: hidden;
    .doctor-img{
      width: 100%;
      height: 185px;
      object-fit: cover;
      object-position: center;
    }
    .doctor-name{
      font-size: 1rem;
      font-weight: 300;
      color: $blackColor;
      margin-top: 1rem;
    }
    .doctor-description{
      color: #858585;
    }
  }
</style>
