<template>
  <div>
    <!-- <HomeSlider /> -->
    <!-- <HomeJourney /> -->
    <HomeSlider :sliders="sliders" />
    <HomeServices :services="services"/>
<!--    <HomeJourney/>-->
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
    async asyncData(context) {
      let allDoctors = await context.$axios.get(`doctors?lang=${context.app.i18n.locale}`);
      let allpartners = await context.$axios.get(`partners`);
      let allTestimonials = await context.$axios.get(`testimonials?lang=${context.app.i18n.locale}`);
      let sliders = await context.$axios.get(`sliders?lang=${context.app.i18n.locale}`);
      let services = await context.$axios.get(`services?lang=${context.app.i18n.locale}`);
      let AllEvents = await context.$axios.get(`events?lang=${context.app.i18n.locale}`);
      return {
        setDoctors: allDoctors.data.data,
        partners: allpartners.data.data,
        testimonials: allTestimonials.data.data,
        sliders: sliders.data,
        services: services.data,
        HomeEvents: AllEvents.data
      }
    }
  }
</script>

<style scoped>

</style>
