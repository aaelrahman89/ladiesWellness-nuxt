<template>
  <div>
    <HomeSlider :sliders="sliders" />
    <HomeJourney :homeJourney="homeJourney" />
    <HomeServices :services="services"/>
    <HomeDoctors :setDoctors="setDoctors"></HomeDoctors>
    <HomeClients :partners="partners"></HomeClients>
    <HomeTestimonials :testimonials="testimonials"></HomeTestimonials>
    <HomeEvent :HomeEvents="HomeEvents"></HomeEvent>
    <HomeSellingPoints></HomeSellingPoints>
  </div>
</template>

<script>
  import HomeSlider from '@/components/home/HomeSlider';
  import HomeServices from '@/components/home/HomeServices';
  import HomeJourney from '@/components/home/HomeJourney';
  import HomeDoctors from "../components/home/HomeDoctors";
  import HomeClients from "@/components/home/HomeClients";
  import HomeTestimonials from "../components/home/HomeTestimonials";
  import HomeEvent from "../components/home/HomeEvent";
  import HomeSellingPoints from "../components/home/HomeSellingPoints";
  import HomeNewLetter from "../components/home/HomeNewLetter";
  export default {
    components: {
      HomeNewLetter,
      HomeEvent,
      HomeTestimonials,
      HomeDoctors,
      HomeSlider,
      HomeJourney,
      HomeClients,
      HomeSellingPoints
    },
    data(){
      return{
        baseUrl:''
      }
    },
    head() {
      return{
        title:`${this.homeSeo.seo.title_meta.Title_Template}`,
        meta:[
          {hid:'description',name:`description`,content:`${this.homeSeo.seo.title_meta.Meta_Description_Template}`},
          {hid:'keywords',name:'keywords',content:`${this.homeSeo.seo.title_meta.meta_keywords}`},
          {hid:'og:description',property:`og:description`,content: `${this.homeSeo.seo.open_graph.description}`},
          {hid:'og:image',property:`og:image`,content: `${this.homeSeo.seo.open_graph.image}`},
          {hid:'og:title',property:`og:title`,content: `${this.homeSeo.seo.open_graph.title}`},
          {hid:'twitter:description',name:`twitter:description`,content: `${this.homeSeo.seo.twitter_card.description}`},
          {hid:'twitter:image',name:`twitter:image`,content: `${this.homeSeo.seo.twitter_card.image}`},
          {hid:'twitter:title',name:`twitter:title`,content: `${this.homeSeo.seo.twitter_card.title}`}
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
    async asyncData(context) {
      let allDoctors = await context.$axios.get(`/api/doctors?lang=${context.app.i18n.locale}`);
      let allpartners = await context.$axios.get(`/api/partners`);
      let allTestimonials = await context.$axios.get(`/api/testimonials?lang=${context.app.i18n.locale}`);
      let sliders = await context.$axios.get(`/api/sliders?lang=${context.app.i18n.locale}`);
      let services = await context.$axios.get(`/api/services?lang=${context.app.i18n.locale}`);
      let AllEvents = await context.$axios.get(`/api/events?lang=${context.app.i18n.locale}`);
      let homeJourney = await context.$axios.get(`/api/journeys?lang=${context.app.i18n.locale}`);
      let HomeSeo = await context.$axios.get(`/api/home?lang=${context.app.i18n.locale}`);
      console.log(AllEvents.data);
      return {
        setDoctors: allDoctors.data.data,
        partners: allpartners.data.data,
        testimonials: allTestimonials.data.data,
        sliders: sliders.data,
        services: services.data,
        HomeEvents: AllEvents.data,
        homeSeo:HomeSeo.data.home,
        homeJourney: homeJourney.data.data
      }
    },
  }
</script>

<style scoped>

</style>
