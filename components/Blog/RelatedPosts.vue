<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
       <swiper-slide v-for="relatedPost in RelatedPosts" :key="relatedPost.id">
         <nuxt-link :to="relatedPost.slug" class="relatedPosts">
           <img :src="relatedPost.image" :alt="relatedPost.image_alt" :title="relatedPost.image_title">
         </nuxt-link>
       </swiper-slide>
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
.relatedPosts{
  display: block;
  img{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
}

</style>
