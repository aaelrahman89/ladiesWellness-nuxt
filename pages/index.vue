<template>
  <div>
    <!-- <HomeSlider /> -->
    <HomeServices/>
    <HomeDoctors></HomeDoctors>
    <!-- <HomeJourney /> -->
  </div>
</template>

<script>
  import HomeSlider from '@/components/home/HomeSlider';
  import HomeServices from '@/components/home/HomeServices';
  import HomeJourney from '@/components/home/HomeJourney';
  import HomeDoctors from "../components/home/HomeDoctors";

  export default {
    components: {
      HomeDoctors,
      HomeSlider,
      HomeJourney
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
