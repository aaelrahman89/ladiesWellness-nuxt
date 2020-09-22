<template>
<div class="bg w-100 position-relative text-center mb-5" :style="{ backgroundImage: 'url(' + bgImg + ')' }" >
    <h3 class="text-capitalize position-relative">{{ subTitle }}</h3>
    <h1 class="text-capitalize text-white position-relative">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: "Andalusia For Ladies Wellness",
    },
    bgImg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variable";
$small: 768px;
.bg {
  height: 937px;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: $small) {
    height: 300px;
  }
}
h3 {
  font-family: "Conv_TuesdayNight-Regular", Sans-Serif;
  color: $mainColor;
  top: 430px;
  opacity: 0.69;
  font-size: 83px;
  z-index: 1;
  @media screen and (max-width: $small) {
    font-size: 2em;
    top: 120px;
  }
}
h1 {
  font-size: 148px;
  font-weight: 600;
  margin-top: 450px;
  z-index: 2;
    @media screen and (max-width: $small) {
    font-size: 2em; 
    margin-top: 100px;
  }
}
</style>