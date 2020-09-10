<template>
    <div class="container">
       <HomeTitle title="Services" desc="Lorem ipsum lorem ipsum lorem ipsum" /> 
       
       <div>
               <swiper class="swiper" :options="swiperOption">
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <swiper-slide><Service /></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
       </div>
    </div>
</template>

<script>
import HomeTitle from './shared/HomeTitle';
import Service from '@/components/Service';
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
       HomeTitle,
       Service
    }
}
</script>

<style lang="scss" scoped>
::v-deep{
 .swiper-pagination-bullet{
  margin: 0 !important;
}
.swiper-button-prev, .swiper-button-next {
       color: #040404 !important;
}
.swiper-button-prev:after, .swiper-button-next:after {
    font-size: 25px !important;
}
}

</style>