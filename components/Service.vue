<template>
  <div>
    <nuxt-link :to="localePath(`/services/${service.id}`)">
    <div class="service-box position-relative">
      <img :src="service.image" class="w-100" />
      <h5 class="text-capitalize text-center pt-3 pb-3">{{ service.title }}</h5>
      <div v-if="service.isNew">
        <div class="new-bg position-absolute"></div>
        <div class="new text-white position-absolute" :style="$i18n.locale == 'ar'? 'left: auto; right: 30px': 'right: auto; left: 30px' ">{{ $t('new') }}</div>
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: ["service"],
};
</script>

<style lang="scss" scoped>
.service-box {
  border: 1px solid #e0e0e0;
  h5 {
    height: 144px;
    line-height: 144px;
    font-size: 30px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #000;
  }
  .new {
    font-size: 101px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    z-index: 100;
    top: 50px;
  }
  .new-bg{
      width: 143px;
  height: 89px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffb4cd;
  top: 60px;
  }
}
a{
  &:hover{
    text-decoration: none;
  }
}
</style>
