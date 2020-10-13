<template>
  <div class="mb-4">
    <nuxt-link :to="localePath(`/journey/${journey.slug}`)">
    <div class="journey-box position-relative">
      <img :src="journey.image" class="w-100" :alt="journey.image_alt" :title="journey.image_title" />
      <h3 class="text-capitalize">{{ journey.title }}</h3>
      <p>
        {{journey.small_description}}
      </p>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Journey",
  props: ["journey"]
};
</script>

<style lang="scss" scoped>
.journey-box {
  h3 {
    margin: 1rem 0;
    width: 90%;
        font-size: 1.75rem;
  }
  img{
    height: 200px;
  }
  p{
   color: #9a9a9a;
    line-height: 1.7;
    width: 90%;
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
  h3{
    color: #040404;
  }
}
.journey-box:lang(ar){
  text-align: right;
}
</style>
