<template>
    <div class="container">
       <HomeTitle title="Services" desc="Lorem ipsum lorem ipsum lorem ipsum" /> 
       
       <div>
               <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <div class="swiper-pagination test" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
       </div>
    </div>
</template>

<script>
import HomeTitle from './shared/HomeTitle';
export default {
  name: 'HomeServices',
  title: 'Loop mode with multiple slides per group',
      data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          autoplay: {delay: 4000},
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: {
       HomeTitle
    }
}
</script>

<style lang="scss" scoped>
::v-deep{
 .swiper-pagination-bullet{
  margin: 0 !important;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 500px !important;
}
}

</style>