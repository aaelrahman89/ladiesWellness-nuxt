<template>
  <div>
    <PageTitleDynamic :title="service.name" :bgImg="service.photo" />
    <!-- <div class="serv-content" v-html="service.description"></div> -->

    <div class="page-content" v-html="service.description"></div>

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
    let service = await $axios.$get(`/api/service/${encodeURIComponent(params.slug)}?lang=${app.i18n.locale}`);
      return {
        service: service.data
      }
    },


    }

</script>

<style lang="scss">
$small: 768px;

body, html {
  height: 100%;
}

.serv-content{
   min-height: 100vh;
      margin-bottom: 60px;
      width: 100%;
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
        @media screen and (max-width: $small) {
    min-height: auto;
       background-image: none !important;
  }
    .cont{
      top: 0px;
      position: relative;
    }
    h3{
      font-size: 164px;
      font-weight: 600;
      color: #fff;
        @media screen and (max-width: $small) {
    font-size: 3em;
    color: #000;
  }
    }
    p{
        font-size: 30px;
  font-weight: 300;
  line-height: 1.63;
  color: #000000;
  @media screen and (max-width: $small) {
    font-size: 2em;
    min-height: auto;
  }
    }
    p:lang(ar){
      text-align: right;
    }
}
.serv-content:lang(ar){
background-position: right;
}
</style>
