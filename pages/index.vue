<template>
  <div>
      <HomeSlider />
      <HomeServices />
      <HomeJourney />
  </div>
</template>

<script>
import HomeSlider from '@/components/home/HomeSlider';
import HomeServices from '@/components/home/HomeServices';
import HomeJourney from '@/components/home/HomeJourney';
export default {
  components: {
    HomeSlider,
    HomeJourney
  },
  mounted(){
    
  }
}
</script>
  
<style scoped>

</style>
