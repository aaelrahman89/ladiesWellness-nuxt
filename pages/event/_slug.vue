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
              <img src="@/assets/images/black-model.png" alt="black-model" title="black-model" class="img-fluid img-single-event">
              <h1 class="event-name">event name</h1>
              <p class="event-start">
                <span class="event-date">25/oct/2020</span>
                <span class="event-time">02:35 pm</span>
              </p>
              <div class="event-description">
                Normally able to stay up into the small hours, they are hitting the pillow at 10 o'clock now. Many are wondering how this can be when we are all doing less.Normally able to stay up into the small hours, they are hitting the pillow at 10 o'clock now. Many are wondering how this can be when we are all doing less.Normally able to stay up into the small hours, they are hitting the pillow at 10 o'clock now. Many are wondering how this can be when we are all doing less.Normally able to stay up into the small hours, they are hitting the pillow at 10 o'clock now. Many are wondering how this can be when we are all doing less.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "_slug"
    }
</script>

<style scoped lang="scss">
  .background-behind {
    height: 300px;
    .background{
      background-color: rgba(255, 143, 182, 0.35);
      height: 300px;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
  .hold-event-info{
    margin-top: -14rem;
    position: relative;
    .img-single-event{
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
    .event-name{
      font-weight: bold;
      font-size: 4rem;
      width: 200px;
      position: absolute;
      left: 31%;
      top: 20%;
      transform: translate(-50%,-50%);
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
    .event-start{
      background-color: #c7843d;
      color: #F5F5F5;
      font-weight: bold;
      font-size: 2rem;
      position: absolute;
      top: 55%;
      left: 70%;
      transform: translate(-50%,-50%);
      padding: .5rem 1rem;
      .event-time{
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
    .event-description{
      background-color: #040404;
      padding: 1rem;
      color: #fff;
      width: 40%;
      margin-top: -5rem;
      z-index: 25;
      position: relative;
      margin-left: 8rem;
      @media (max-width: 992px) {
        width: 100%;
        margin-top: 0;
        margin-left: 0;
        z-index: 0;
        margin-bottom: 1rem;
      }
    }
    @media (max-width: 992px) {
      margin-top: 0;
    }
  }
</style>
