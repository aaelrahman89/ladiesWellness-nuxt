<template>
  <div class="event">
    <div class="description-event">
      <h1 class="event-name">{{event.title}}</h1>
      <p class="event-paragraph">Veep writers and stars have incredibly responded to the news of an Pre-installed
        stitches are required by the method of email client, calendar.</p>
      <nuxt-link :to="localePath(`/event/${event.slug}`)" class="btn-event-detail"><span>view more</span></nuxt-link>
    </div>
    <div class="image-event">
<!--      <img src="@/assets/images/event-img.png" alt="event-img" >-->
      <img :src="event.image" :alt="event.image_alt" :title="event.image_title">
      <img src="@/assets/images/background-event.png" alt="background-event">
      <p class="event-start"><span class="event-date">{{event.date}}</span><span class="event-time">{{event.time}}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Event",
    props: ['event'],
    mounted() {
      console.log("this.event");
      console.log(this.event);
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .event {
    width: 80%;
    margin: 0 auto;
    min-height: 500px;

    .description-event {
      width: 70%;
      display: inline-block;
      position: relative;
      top: 8rem;
      .event-name {
        text-transform: uppercase;
        font-weight: bold;
      }
      .event-paragraph {
        color: rgba(4, 4, 4, 0.76);
        width: 75%;
        font-size: 1.3rem;
        position: relative;
        top: 2rem;
        @media (max-width: 992px) {
          width: 100%;
          top: auto;
        }
      }

      .btn-event-detail {
        display: inline-block;
        width: 150px;
        height: 55px;
        background-color: rgba(255, 255, 255, 0.76);
        padding: .3rem;
        text-decoration: none;
        color: #040404;
        text-transform: capitalize;
        font-weight: bold;
        transition: all linear .2s;
        position: relative;
        top: 3rem;
        @media (max-width: 992px) {
          top: auto;
          margin: 1rem 0;
        }
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $mainColor;
          height: 100%;
          transition: all linear .2s;
        }

        &:hover {
          color: rgba(255, 255, 255, 0.76);
          background-color: #c7843db8;

          span {
            border: 1px solid rgba(255, 255, 255, 0.75);
            background-color: rgba(199, 132, 61, 0.72);
          }
        }
      }

      @media (max-width: 992px) {
        width: 100%;
        top: auto;
        text-align: center;
      }
    }

    .image-event {
      width: 29%;
      position: relative;
      display: inline-block;
      img {
        width: 100%;
        @media (max-width: 992px) {
          width: 250px
        }

        &:first-of-type {
          position: absolute;
          top: -10%;
          left: -26%;
          z-index: 5;
          height: 410px;
          object-fit: cover;
          @media (max-width: 992px) {
            position: relative;
            top: auto;
            left: auto;
          }
        }

        &:last-of-type {
          position: relative;
          bottom: 100%;
          transform: translate(30%, 82%);
          z-index: 3;
          @media (max-width: 992px) {
            display: none;
          }
        }
      }

      .event-date, .event-time {
        font-weight: bold;
      }
      .event-time{
        display: inline-block;
        margin-left: .5rem;
      }
      @media (max-width: 992px) {
        width: 100%;
        top: auto;
        text-align: center;
      }
    }

    .event-start {
      position: absolute;
      z-index: 22;
      left: -26%;
      bottom: -37%;
      margin-bottom: 0;
      @media (max-width: 992px) {
        position: relative;
        bottom: auto;
        left: auto;
      }
    }
  }
  html:lang(ar){
    .event {
      .description-event {
        text-align: right;
        @media (max-width: 992px) {
          text-align: center;
        }
      }
      .image-event {
        img {
          &:first-of-type {
            left: auto;
            right: -26%;
            @media (max-width: 992px) {
              right: auto;
            }
          }
          &:last-of-type {
            transform: translate(-30%, 82%);
          }
        }
        .event-time{
          margin-left: 0;
          margin-right: .5rem;
        }
      }
      .event-start {
        left: auto;
        right: -26%;
        @media (max-width: 992px) {
          right: auto;
          margin: 1rem 0;
        }
      }
    }
  }
</style>
