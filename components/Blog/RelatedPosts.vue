<template>
       <div>
               <swiper class="swiper" :options="swiperOption">
    <!-- <swiper-slide v-for="relatedPost in relatedPosts.data" :key="relatedPost.id"><img :src="relatedPost.image" :alt="relatedPost.image_alt" :title="relatedPost.image_title"></swiper-slide> -->
    <swiper-slide>slide 1</swiper-slide>
    <swiper-slide>slide 2</swiper-slide>
    <swiper-slide>slide 3</swiper-slide>
                 <div class="swiper-button-prev" slot="button-prev"></div>
                 <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
       </div>
</template>

<script>
export default {
  name: 'RelatedPosts',
  title: 'Loop mode with multiple slides per group',
  props: ['RelatedPosts'],
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
    font-size: 40px !important;
    font-weight: bold;
}
// .swiper-slide{
//    @media screen and (max-width: 768px) {
//         width: 100% !important;
//          }
// }
}



</style>
