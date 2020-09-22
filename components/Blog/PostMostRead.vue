<template>
  <div>
    <nuxt-link :to="localePath(`/blog/${postMostRead.slug}`)">
    <article>
     <div class="row">
      <div class="col-md-4">
        <img :src="postMostRead.image" :alt="postMostRead.image_alt" :title="postMostRead.image_title"  class="w-100 mb-2" />
      </div>
      <div class="col-md-8">
        <p>
          {{postMostRead.excerpt}}
        </p>
        <small>30 March, 2020</small>
      </div>
    </div>
    </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['postMostRead']
};
</script>

<style lang="scss" scoped>
img {
  height: 175px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
}
small {
  font-size: 20px;
  font-weight: 300;
  color: #9a9a9a;
}
p {
  font-size: 20px;
  font-weight: 300;
  color: #000000;
}
</style>
