<template>
  <div class="events">
    <home-title title="Events" desc="At vero eos et accusamus et iusto"></home-title>
    <div class="hold-events">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="event in 3">
          <Event></Event>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import HomeTitle from "./shared/HomeTitle";
  import Event from "../shared/Event";

  export default {
    name: "HomeEvent",
    components: {Event, HomeTitle},
    data(){
      return{
        swiperOption: {
          slidesPerView: 1,
          // loop: true,
          // autoplay: {delay: 4000},
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .hold-events{
    background-color: #f0f1f5;
  }
</style>
