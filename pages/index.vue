<template>
  <div>
    <!-- <HomeSlider /> -->
    <!-- <HomeJourney /> -->
    <HomeSlider/>
    <HomeServices/>
    <HomeJourney/>
    <HomeDoctors></HomeDoctors>
    <HomeClients></HomeClients>
    <HomeTestimonials></HomeTestimonials>
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
  export default {
    components: {
      HomeEvent,
      HomeTestimonials,
      HomeDoctors,
      HomeSlider,
      HomeJourney,
      HomeClients,
      HomeSellingPoints
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
