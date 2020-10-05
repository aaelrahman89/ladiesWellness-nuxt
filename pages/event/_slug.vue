<template>
  <div class="event-slug">
    <div class="container-fluid">
      <div class="background-behind">
        <div class="row">
          <div class="col-lg-6 col-12 background">
          </div>
          <div class="col-lg-6 col-12">
          </div>
        </div>
      </div>
      <div class="hold-event-info">
        <div class="row">
          <div class="col-12 text-center">
            <img :src="eventDetail.image" :alt="eventDetail.image_alt" :title="eventDetail.image_title"
                 class="img-fluid img-single-event">
            <h1 class="event-name">{{eventDetail.title}}</h1>
            <p class="event-start">
              <span class="event-date">{{eventDetail.date}}</span>
              <span class="event-time">{{eventDetail.time}}</span>
            </p>
            <div class="event-description">
              <div v-html="eventDetail.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="hold-event-images">
        <div class="container">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(eventImage,index) in eventDetail.images" :key="index">
              <img :src="eventImage" alt="eventDetail" title="event image" class="img-fluid images-event">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "event_slug",
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween:50,
          loop: true,
          autoplay: {delay: 2000},
          breakpoints:{
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }
        }
      }
    },
    asyncData(context){
      return context.$axios.get(`/api/event/${context.params.slug}?lang=${context.app.i18n.locale}`).then(res =>{
        console.log(res.data);
        return {eventDetail:res.data.data}
      }).catch(error =>{
        console.log(error.data);
      })
    }
  }
</script>

<style scoped lang="scss">
  .background-behind {
    height: 300px;

    .background {
      background-color: rgba(255, 143, 182, 0.35);
      height: 300px;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }
  .hold-event-info {
    margin-top: -14rem;
    position: relative;

    .img-single-event {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }

    .event-name {
      font-weight: bold;
      font-size: 4rem;
      width: 200px;
      position: absolute;
      left: 31%;
      top: 20%;
      transform: translate(-50%, -50%);
      text-transform: capitalize;
      @media (max-width: 992px) {
        position: relative;
        left: auto;
        top: auto;
        width: 100%;
        transform: translate(0);
        font-size: 2rem;
        margin: 2rem 0;
      }
    }

    .event-start {
      background-color: #c7843d;
      color: #F5F5F5;
      font-weight: bold;
      font-size: 2rem;
      position: absolute;
      top: 55%;
      left: 70%;
      transform: translate(-50%, -50%);
      padding: .5rem 1rem;

      .event-time {
        display: inline-block;
        margin-left: .5rem;
      }

      @media (max-width: 992px) {
        position: relative;
        top: auto;
        left: auto;
        transform: translate(0);
      }
    }

    .event-description {
      background-color: #040404;
      padding: 1rem;
      color: #fff;
      width: 40%;
      top: -10%;
      z-index: 25;
      position: relative;
      @media (max-width: 992px) {
        top: auto;
        width: 100%;
        z-index: 0;
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 992px) {
      margin-top: 4.5rem;
    }
  }
  .hold-event-images{
    margin: 2rem 0;
    .images-event{
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
  html:lang(ar){ .hold-event-info { .event-name {left: auto;right: 31%;transform: translate(50%, -50%);@media (max-width: 992px) {right: auto;}} .event-start {left: auto;right: 70%; transform: translate(50%, -50%); .event-time {margin-left: 0;margin-right: .5rem;} @media (max-width: 992px) {right: auto;}} } }
</style>
