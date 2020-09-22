<template>
  <div class="events">
    <home-title title="Events" desc="At vero eos et accusamus et iusto"></home-title>
    <div class="hold-events">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="event in HomeEvents.data" :key="event.id">
          <Event :event="event"></Event>
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
    props:['HomeEvents'],
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
    },
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .hold-events{
    background-color: #f0f1f5;
    @media (max-width: 992px) {
      padding: 2rem 0;
    }
  }
  .swiper-button-next,.swiper-button-prev{
    top: 10%;
    left: 14%;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    color: #040404;
    outline: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0px -1px 14px -6px rgba(0,0,0,0.68);
    -moz-box-shadow: 0px -1px 14px -6px rgba(0,0,0,0.68);
    box-shadow: 0px -1px 14px -6px rgba(0,0,0,0.68);
    transition: all linear .3s;
    &:hover{
      border: 1px solid $mainColor;
      background-color: $mainColor;
      color: #fff;
    }
    &:after{
      font-size: 20px;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
  .swiper-button-prev{
    left: 10% !important;
  }
  html:lang(ar){ .swiper-button-next,.swiper-button-prev{left: auto;right: 14%;} .swiper-button-prev{left: auto !important;right: 10% !important;} }
</style>
