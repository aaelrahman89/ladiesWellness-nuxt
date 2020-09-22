<template>
  <div>
    <div class="row m-0">
      <div class="col-md-4 m-0 p-0">
        <img :src="post.image" class="w-100" :alt="post.image_alt" :title="image_title" />
      </div>
      <div class="col-md-8 mt-5">
        <small>By Janny Joe</small>
        <h3 class="mt-2">{{post.title}}</h3>
        <p v-html="post.body"></p> 
      </div>
    </div>

   <div class="container mt-5">
         <div class="row">
           <div class="col-md-12 text-center text-capitalize"><h5>Related Topics</h5></div>
           <div class="col-md-12 mt-5 mb-5"> <RelatedPosts :RelatedPosts="RelatedPosts" /></div>
         </div>
   </div>

  </div>
</template>

<script>
import RelatedPosts from '@/components/Blog/RelatedPosts';
export default {
  components: {
    RelatedPosts
  },
  async asyncData({ params, $axios, app }) {
    let post = await $axios.$get(`post/${params.slug}?lang=${app.i18n.locale}`); 
    // let RelatedPosts = await $axios.$get(`service/${params.slug}?lang=${app.i18n.locale}`);
      return {
        post: post.data,
        // RelatedPosts: RelatedPosts.data
      }
    },
};
</script>

<style lang="scss" scoped>
img {
  min-height: 930px;
}
small {
  font-size: 20px;
  font-weight: 300;
  color: #858585;
}
h3 {
  font-size: 30px;
  font-weight: 600;
  color: #000000;
}
p {
  font-size: 20px;
  font-weight: 300;
  line-height: 2.05;
  color: #9a9a9a;
}
h5{
  font-size: 30px;
  font-weight: bold;
  color: #000000;
}
::v-deep{
  .swiper-slide{
display: flex !important;
    justify-content: center !important;
  }
}
</style>
