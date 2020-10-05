<template>
  <div class="text-center title">
    <h5 class="m-0 position-relative">{{ sig }}</h5>
    <h3 class="m-0 position-relative text-capitalize">{{ title }}</h3>
    <p class="text-black m-0">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    sig: {
      type: String,
      default: "Andalusia For Ladies Wellness",
    },
  },
};
</script>

<style lang="scss" scoped>
$small: 768px;
.title {
  margin: 52px 0 90px 0;

}
h5 {
  font-family: "Conv_TuesdayNight-Regular", Sans-Serif;
  opacity: 0.8;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #d18c2f;
  top: 50px;
  z-index: 1;
    @media screen and (max-width: $small) {
    font-size: 2em;
    top: 0px;
  }
}
h3 {
  font-size: 100px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  z-index: 2;
  @media screen and (max-width: $small) {
    font-size: 3em;
  }
}
h3:lang(ar){
   letter-spacing: -1px;
}
p {
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
}
</style>
