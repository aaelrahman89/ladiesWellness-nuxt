<template>
  <div>
    <PageTitleDynamic :title="service.name" :bgImg="service.photo" />
    <div class="bgPage position-absolute d-none d-sm-block" :style="{ backgroundImage: 'url(' + service.photo + ')' }"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center text-capitalize mb-5">{{service.name}}</h3>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <p v-html="service.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitleDynamic from '@/components/shared/PageTitleDynamic';
export default {
  data() {
    return {
      baseUrl: ''
    }
  },
  components: {
     PageTitleDynamic
  },
// SEO
head(){
  return{
    title:`${this.service.name}`,
    meta:[
      {hid:'description',name:`description`,content:`${this.service.meta_description}`},
      {hid:'keywords',name:'keywords',content:`${this.service.meta_keywords}`},
      {hid:'og:description',property:`og:description`,content: `${this.service.open_graph_description}`},
      {hid:'og:image',property:`og:image`,content: `${this.service.open_graph_image}`},
      {hid:'og:title',property:`og:title`,content: `${this.service.open_graph_title}`},
      {hid:'twitter:description',name:`twitter:description`,content: `${this.service.twitter_card_description}`},
      {hid:'twitter:image',name:`twitter:image`,content: `${this.service.twitter_card_image}`},
      {hid:'twitter:title',name:`twitter:title`,content: `${this.service.twitter_card_title}`}
    ],
    link: [
      {
        rel: "canonical",
        href: this.baseUrl
      }
    ]
  }
},
  created() {
    if(process.browser){
      this.baseUrl = window.location.origin + window.location.pathname
    }
  },

async asyncData({ params, $axios, app }) {
    let service = await $axios.$get(`/api/service/${params.slug}?lang=${app.i18n.locale}`);
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
    p:lang(ar){
      text-align: right;
    }
</style>
