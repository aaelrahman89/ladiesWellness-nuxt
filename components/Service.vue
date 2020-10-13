<template>
  <div>
    <nuxt-link :to="localePath(`/service/${service.slug}`)">
    <div class="service-box position-relative">
      <img :src="service.photo" class="w-100" :alt="service.image_alt" :title="service.image_title" />
      <h5 class="text-capitalize text-center pt-3 pb-3">{{ service.name }}</h5>
      <div v-if="service.is_new">
        <div class="new-bg position-absolute"></div>
        <div class="new text-white position-absolute">{{ $t('new') }}</div>
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: ["service"]
};
</script>

<style lang="scss" scoped>
.service-box {
  border: 1px solid #e0e0e0;
  h5 {
    height: 90px;
    line-height: 63px;
    font-size: 25px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000;
  }
  img{
    height: 290px;
  }
  .new {
    font-size: 101px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    z-index: 100;
    top: 50px;
    @media screen and (max-width: 768px) {
        font-size: 50px;
    }
    .new:lang(ar){
      left: auto;
      right: 30px;
    }
  }
  .new-bg{
      width: 143px;
  height: 89px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffb4cd;
  top: 60px;
    @media screen and (max-width: 768px) {
        width: 80px;
    height: 70px;
    }
  }
}
a{
  &:hover{
    text-decoration: none;
  }
}
</style>
