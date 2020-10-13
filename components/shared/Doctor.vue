<template>
  <nuxt-link class="doctor my-3" :to="localePath(`/doctor/${doctor.slug}`)">
    <div class="row mx-0">
      <div class="col-4 px-0">
        <img :src="doctor.photo" alt="doctor" class="doctor-img">
      </div>
      <div class="col-8">
        <h2 class="text-center doctor-name">{{doctor.title}}</h2>
        <p class="doctor-description">{{doctor.small_description | cutLongString}}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "Doctor",
    props:['doctor'],
    data: () => ({}),
    filters: {
      cutLongString(value) {
        if (value.length > 100) {
          return value.substr(0, 50) + '...'
        } else {
          return value;
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .doctor {
    display: block;
    text-decoration: none;
    border: 1px solid $mainColor;
    height: 140px;
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    .doctor-img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      object-position: center;
    }
    .doctor-name {
      font-size: 1rem;
      font-weight: 300;
      color: $blackColor;
      margin-top: 1rem;
    }
    .P0{
      padding-left: 0;
    }
    .doctor-description {
      color: #858585;
      overflow-wrap: break-word;
      height: 120px;
      overflow: hidden;
      font-size: .9rem;
    }
    @media (max-width: 1080px) {
      width: 100%;
    }
  }
  html:lang(ar){
    .doctor {
      .doctor-description {
        text-align: right;
      }
    }
    .P0{
      padding-right: 0;
    }
  }
</style>
