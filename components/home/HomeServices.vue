<template>
    <div class="container">
       <HomeTitle :title="$t('menu.services')" :desc="title" />

       <div>
               <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(service,index) in services.data" :key="index"><Service :service="service" /></swiper-slide>

  </swiper>
  <div class="position-relative">
    <div class="swiper-button-prev" slot="button-prev"></div>
                 <div class="swiper-button-next" slot="button-next"></div>
  </div>
       </div>
    </div>
</template>

<script>
import HomeTitle from './shared/HomeTitle';
import Service from '@/components/Service';
export default {
  name: 'HomeServices',
  title: 'Loop mode with multiple slides per group',
  props: ['services','title'],
      data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 70,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
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
    font-size: 30px !important;
    font-weight: bold;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: -70px !important;
    right: auto !important;
    top: -200px !important;
      @media screen and (max-width: 768px) {
    display: none;
    }
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: -70px !important;
    left: auto !important;
    top: -200px !important;
    @media screen and (max-width: 768px) {
    display: none;
    }
}
}

</style>
