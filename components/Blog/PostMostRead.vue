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
        <small>{{postMostRead.date}}</small>
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
  object-fit: cover;
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
  height: 130px;
    overflow: hidden;
   @media screen and (max-width: 768px) {
    height: auto;
    overflow: visible;
  }
}
article{
  margin-bottom: 2.4rem;
}
</style>
