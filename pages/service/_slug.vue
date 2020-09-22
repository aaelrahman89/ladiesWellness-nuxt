<template>
  <div>
    <PageTitle :title="service.name" :bgImg="service.photo" />
    <div class="bgPage position-absolute d-none d-sm-block" :style="{ backgroundImage: 'url(' + service.photo + ')' }"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center text-capitalize mb-5">{{service.name}}</h3>
        </div>
        <div class="col-md-6 offset-md-6">
          <p v-html="service.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

async asyncData({ params, $axios, app }) {
    let service = await $axios.$get(`service/${params.slug}?lang=${app.i18n.locale}`);
      return {
        service: service.data
      }
    },

    
    }

</script>

<style lang="scss" scoped>
$small: 768px;
    .bgPage{
      width: 50%;
      background-size: cover;
      height: 600px;
      background-repeat: no-repeat;
    }
    h3{
      font-size: 164px;
      font-weight: 600;
        @media screen and (max-width: $small) {
    font-size: 3em;
  }
    }
    p{
        font-size: 30px;
  font-weight: 300;
  line-height: 1.63;
  color: #000000;
  min-height: 50vh;
  @media screen and (max-width: $small) {
    font-size: 2em;
  }
    }
</style>
