<template>
  <div class="posts-tag">
     <div class="container-fluid">
       <nuxt-link class="post-tag-link" v-for="posts in postsByTag.Posts" :key="posts.id" :to="localePath(`/blog/${posts.slug}`)">
         <div class="row">
           <div class="col-lg-4">
             <img :src="posts.image" :alt="posts.image_alt" :title="posts.image_title" class="img-fluid">
           </div>
           <div class="col-lg-8">
             <h3>{{ posts.title }}</h3>
             <p>{{ posts.excerpt }}</p>
           </div>
         </div>
       </nuxt-link>
     </div>
  </div>
</template>

<script>
export default {
  name: "_slug",
  asyncData(context){
    return context.$axios.get(`/api/tag/${context.params.slug}?lang=${context.app.i18n.locale}`).then(res=>{
      return { postsByTag : res.data.data}
    }).catch(error => console.log(error));
  }
}
</script>

<style scoped lang="scss">
.posts-tag{
  margin-top: 2rem;
  .post-tag-link{
    display: block;
    text-decoration: none;
    color: #040404;
    margin-bottom: 1.5rem;
    img{
      width: 100%;
      height: 270px;
      object-fit: cover;
    }
  }
}
.posts-tag:lang(ar){
  text-align: right;
}
</style>
