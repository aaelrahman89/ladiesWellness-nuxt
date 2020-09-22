<template>
    <div class="container-fluid">
       <HomeTitle title="Services" desc="At vero eos et accusamus et iusto" />

       <div>
               <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(service,index) in services.data" :key="index"><Service :service="service" /></swiper-slide>
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
  props: ['services'],
      data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 70,
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
          },
                breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetweenSlides: 70
    }
  }
        }
      }
    },
    components: {
       HomeTitle,
       Service
    },
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
    font-size: 40px !important;
    font-weight: bold;
}
}

</style>
