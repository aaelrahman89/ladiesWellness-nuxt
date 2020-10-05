<template>
  <div>
    <div>
      <ContactUs></ContactUs>
    </div>
  </div>
</template>

<script>
  import ContactUs from "@/components/shared/ContactUs";

  export default {
    name: "BookNow",
    components: {ContactUs}
  }
</script>

<style scoped lang="scss">
  .about-us {
    position: relative;
    background-color: #d8d8d8;
    min-height: 700px;
    @media (max-width: 1200px) {
      min-height: 400px;
    }
    .center-logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      @media (max-width: 1200px) {
        top: 25%;
      }
    }

    .images-left {
      display: flex;
    }

    .filtered {
      margin-top: 3rem;
      -webkit-filter: blur(5px);
      filter: blur(5px);
      width: 222px;
      height: 215px;
      object-fit: cover;
      @media (max-width: 1200px) {
        margin-top: 0;
        display: none;
      }
    }

    .normal {
      margin-top: 3rem;
      width: 215px;
      height: 250px;
      object-fit: cover;
      z-index: 2;
      @media (max-width: 1200px) {
        margin-top: 0;
        display: none;
      }
    }

    .normal-down {
      width: 241px;
      height: 297px;
      object-fit: cover;
      position: absolute;
      bottom: -5rem;
      left: -8%;
      @media (max-width: 1200px) {
        position: relative;
        bottom: auto;
        left: auto;
        display: none;
      }
    }

    .normal-up, .normal-right-down {
      width: 159px;
      height: 170px;
      object-fit: cover;
      margin-left: 12rem;
      margin-top: 8rem;
      @media (max-width: 1200px) {
        margin-left: 0;
        margin-top: 0;
        display: none;
      }
    }

    .normal-right-down {
      width: 140px;
      height: 150px;
      margin-top: 0;
      margin-left: 24rem;
      @media (max-width: 1200px) {
        margin-left: 0;
        display: none;
      }
    }
    .about-us-title {
      margin-top: -5rem;
      margin-bottom: 0;
      z-index: 30;
      h5{
        font-family: "Conv_TuesdayNight-Regular", Sans-Serif;
        opacity: 0.8;
        font-size: 3rem;
        color: #d18c2f;
        top: 2rem;
      }
      h3{
        font-weight: bolder;
        color: #fff;
        font-size: 6rem;
        z-index: 22;
      }
      @media (max-width: 1200px) {
        margin-top: 12rem;
      }
    }

    .img-title-up, .img-title-down {
      width: 170px;
      height: 200px;
      object-fit: cover;
      position: relative;
      top: -20%;
      left: 25%;
      z-index: 1;
      @media (max-width: 1200px) {
        top: auto;
        left: auto;
        display: none;
      }
    }

    .img-title-down {
      -webkit-filter: blur(5px);
      filter: blur(5px);
      position: relative;
      top: 10%;
      left: 20%;
      width: 120px;
      height: 140px;
      z-index: 0;
      @media (max-width: 1200px) {
        top: auto;
        left: auto;
        display: none;
      }
    }
  }
  html:lang(ar){
    .about-us { .center-logo {right: 50%;left: auto;transform: translateX(50%);} .normal-down {left: auto;right: -8%;@media (max-width: 1200px) {right: auto;}} .normal-up, .normal-right-down {
        margin-left: 0;
        margin-right: 12rem;
        @media (max-width: 1200px) {
          margin-left: auto;
          margin-right: 0;
        }
      }
      .normal-right-down {
        margin-left: auto;
        margin-right: 24rem;
        @media (max-width: 1200px) {
          margin-left: auto;
          margin-right: 0;
        }
      }
      .img-title-up, .img-title-down {
        left: auto;
        right: 25%;
        @media (max-width: 1200px) {
          right: auto;
        }
      }
      .img-title-down {
        left: auto;
        right: 20%;
        @media (max-width: 1200px) {
          top: auto;
          right: auto;
          display: none;
        }
      }
    }
  }
</style>
