<template>
  <div class="clients">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="partner in partners" :key="partner.id">
        <div class="hold-client">
          <img :src="partner.logo" :alt="partner.image_alt" :title="partner.image_title">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Clients",
    props:['partners'],
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          autoplay: {delay: 3000},
          breakpoints: {
            // when window width is <= 320px
            320: {
              slidesPerView: 1
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 3
            },
            // when window width is <= 640px
            768: {
              slidesPerView: 5,
              spaceBetweenSlides: 20
            }
          }
        },
        // cleints: [
        //   {id: 1, img: require('@/assets/images/disney.png')},
        //   {id: 2, img: require('@/assets/images/boss.png')},
        //   {id: 3, img: require('@/assets/images/celine.png')},
        //   {id: 4, img: require('@/assets/images/vimeo.png')},
        //   {id: 5, img: require('@/assets/images/youtube.png')}
        // ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .clients {
    border-top: 1px solid $mainColor;
    border-bottom: 1px solid $mainColor;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    .hold-client{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 120px;
        height: 70px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
</style>
