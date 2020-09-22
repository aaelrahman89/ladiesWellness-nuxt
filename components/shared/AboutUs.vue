<template>
  <div class="about-us-comp">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-12 border description">
          <h1 class="about-heading">about us</h1>
<!--          {{aboutUsCollection}}-->
          <p class="about-description">{{aboutUsCollection.description}}</p>
        </div>
        <div class="col-lg-6 col-12 px-0">
          <img :src="aboutUsCollection.image" :alt="image_alt" :title="image_title" class="img-fluid about-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutUs",
    props:['aboutUsCollection'],
    data() {
      return {
      }
    },
  }
</script>

<style scoped lang="scss">
  .about-us-comp {
    background-color: #fff;
    margin: 5rem 0;
  }

  .border {
    border-right: 40px solid #c7843d !important;
  }

  .description {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    padding-left: 5rem;
    padding-bottom: 3rem;
    @media (max-width: 1080px) {
      padding-left: 2rem;
    }
  }

  .about-image {
    margin: 4rem 0;
    width: 100%;
    object-fit: cover;
  }

  .about-heading {
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 3rem 0;
    @media (max-width: 1080px) {
      font-size: 2rem;
    }
  }

  .about-description {
    line-height: 1.63;
    font-size: 1.2rem;
  }
  html:lang(ar){
    .border {
      border-right: none !important;
      border-left: 40px solid #c7843d !important;
    }
    .description {
      padding-left:0;
      padding-right: 5rem;
      text-align: right;
      @media (max-width: 1080px) {
        padding-left: 0;
        padding-right: 2rem;
      }
    }
  }
</style>
