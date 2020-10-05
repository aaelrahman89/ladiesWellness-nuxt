<template>
  <div>
    <PageTitle :title="$t('menu.blog')" bgImg="blog.png" />
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-md-7">
          <!--section start -->
          <section class="mb-4">
            <div class="row">
              <div class="col-md-6" v-for="(post, index) in posts.data" :key="index">
                <Post :post="post" />
              </div>
            </div>
          </section>
          <!--section end -->

          <!--section start -->
          <section class="mb-4">
            <div class="row">
              <div class="col-md-4" v-for="(postFooter, index) in postsFooter.data" :key="index">
                <PostFooter :postFooter="postFooter" />
              </div>
            </div>
          </section>
          <!--section end -->
        </div>

        <div class="col-md-1">
          <div
            class="line d-none d-sm-block"
            :class="$i18n.locale == 'ar' ? 'mr-auto' : 'ml-auto' "
          ></div>
        </div>

        <div class="col-md-4 most-read">
          <h6 class="text-capitalize mb-5 mt-1">{{ $t('mostRead') }}</h6>
          <!--section start -->
          <section class="mb-4">
            <div v-for="(postMostRead, index) in postsMostRead.data" :key="index">
              <PostMostRead :postMostRead="postMostRead" />
            </div>
          </section>
          <!--section end -->
        </div>
      </div>

   <div class="row">
       <div class="col-md-12 mt-5">
           <iframe width="100%" height="800" src="https://www.youtube.com/embed/FcjDBVmBDLo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
   </div>

    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/shared/PageTitle";
import Post from "@/components/Blog/Post";
import PostFooter from "@/components/Blog/PostFooter";
import PostMostRead from "@/components/Blog/PostMostRead";
export default {
  data(){
     return {
       bgImg: 'assets/images/blog.png'
     }
  },
  components: {
    Post,
    PostFooter,
    PostMostRead
  },
  async asyncData(context) {
      let posts = await context.$axios.get(`/api/posts?lang=${context.app.i18n.locale}`);
      let postsFooter = await context.$axios.get(`/api/posts_footer?lang=${context.app.i18n.locale}`);
      let postsMostRead = await context.$axios.get(`/api/posts_mostread?lang=${context.app.i18n.locale}`);
      return {
        posts: posts.data,
        postsFooter: postsFooter.data,
        postsMostRead: postsMostRead.data
      }
    }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variable";
h6 {
  font-size: 46px;
  color: #000000;
  font-weight: bold;
}
.line {
  width: 5px;
  height: 100%;
  background-color: #707070;
  position: relative;
  &:after {
    width: 5px;
    height: 50px;
    background-color: $mainColor;
    content: "";
    position: absolute;
    top: -3px;
    z-index: 1;
    left: -3px;
    width: 12px;
    height: 75px;
    border-radius: 6px;
  }
}
h6:lang(ar){
  text-align: right;
}
</style>
