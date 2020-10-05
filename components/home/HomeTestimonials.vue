<template>
  <div>
    <HomeTitle :title="$t('testimonials')" desc="At vero eos et accusamus et iusto"></HomeTitle>
    <div class="testimonials">
      <img src="@/assets/images/test.png" alt="test" class="test-right">
      <swiper class="swiper" :options="swiperOption" :pagination="{ clickable: true }">
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="hold-client">
            <img :src="testimonial.image" alt="profile-img" class="testimonials-img">
            <p class="test-paragraph">{{testimonial.description}}</p>
            <span class="test-name">{{testimonial.username}}</span>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <img src="@/assets/images/test.png" alt="test" class="test-left">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeTestimonials",
    props:['testimonials'],
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
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .testimonials{
    background-color: rgba(255, 143, 182, 0.35);
    position: relative;
    min-height: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .test-right{
      position: absolute;
      right: -8%;
      top: -32%;
      height: 230px;
    }
    .test-left{
      position: absolute;
      left: -12%;
      bottom: -24%;
      height: 400px;
    }
    .hold-client{
      text-align: center;
      .testimonials-img{
        border-radius: 50%;
        width: 188px;
        height: 188px;
        object-fit: cover;
        object-position: center;
      }
      .test-paragraph{
        width: 60%;
        margin: 2rem auto 0 auto;
        line-height: 1.4;
        font-size: 1.5rem;
      }
      .test-name{
        color: $mainColor;
        font-size: 1.5rem;
        margin: 1rem 0;
        display: block;
      }
    }
    @media (max-width: 992px) {
      padding: 2rem 0;
    }
    .swiper-button-next{
      color: $blackColor;
      right: 10%;
      outline: none;
      &:after{
        font-size: 26px;
        font-weight: bold;
      }
    }
    .swiper-button-prev{
      color: $blackColor;
      left: 10%;
      outline: none;
      &:after{
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
  .swiper-pagination{
    position: relative !important;
  }
  html:lang(ar){
    .testimonials{
      .test-right{
        left: -8%;
        right: auto;
      }
      .test-left{
        left : auto;
        right: -12%;
      }
      .swiper-button-next{
        right: auto;
        left: 10%;
      }
      .swiper-button-prev{
        color: $blackColor;
        right: 10%;
        left: auto;
      }
    }
  }
</style>
