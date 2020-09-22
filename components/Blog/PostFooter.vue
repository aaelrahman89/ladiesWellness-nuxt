<template>
  <div>
    <nuxt-link :to="localePath(`/blog/${postFooter.slug}`)">
    <article>
    <img :src="postFooter.image" :alt="postFooter.image_alt" :title="postFooter.image_title" class="w-100 mb-2" />
    <small>Lipstick By Janny Joe</small>
    <h3 class="mt-3">{{postFooter.title}}</h3>
    <p>
      {{postFooter.excerpt}}
    </p>
    </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['postFooter']
};
</script>

<style lang="scss" scoped>
img {
  height: 550px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
}
small {
  font-size: 17px;
  font-weight: 300;
  color: #858585;
}
h3 {
  font-size: 25px;
  font-weight: 300;
  color: #000000;
}
p {
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  color: #9a9a9a;
}
</style>
