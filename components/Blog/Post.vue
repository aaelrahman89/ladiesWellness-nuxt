<template>
  <div>
    <nuxt-link :to="localePath(`/blog/${post.slug}`)">
    <article>
<img :src="post.image" :alt="post.image_alt" :title="post.image_title" class="w-100 mb-2" />
    <small>Lipstick By Janny Joe</small>
    <h3 class="mt-3">{{post.title}}</h3>
    <p>
      {{post.excerpt}}
    </p>
    </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['post']
};
</script>

<style lang="scss" scoped>
img {
  height: 550px;
  object-fit: cover;
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
