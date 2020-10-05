<template>
  <div>
    <div class="col-12">
      <div class="row">
        <div class="col-lg-9 col-12">
          <div class="row">
            <div class="col-md-6 p-0">
              <img :src="post.image" class="w-100" :alt="post.image_alt" :title="post.image_title"/>
            </div>
            <div class="col-md-6 mt-5">
              <small>By Janny Joe</small>
              <h3 class="mt-2">{{ post.title }}</h3>
              <p v-html="post.body"></p>
              <div><SocialShare /></div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12 hold-tags mt-5">
          <h3>tags</h3>
          <slot v-for="tagLinks in post.tag">
            <nuxt-link :to="localePath(`/blog/tag/${tagLinks.slug}`)" class="tag-link">{{ tagLinks.name }}</nuxt-link>
          </slot>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12 text-center text-capitalize"><h5>Related Topics</h5></div>
        <div class="col-md-12 mt-5 mb-5">
          <RelatedPosts :RelatedPosts="RelatedPosts"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import RelatedPosts from '@/components/Blog/RelatedPosts';
import SocialShare from '@/components/shared/SocialShare';

export default {
  components: {
    RelatedPosts,
    SocialShare
  },
  data() {
    return {
      baseUrl: ''
    }
  },
  head() {
    return{
      title: `${this.post.title}`,
      meta:[
        {hid:'description',name:'description',content:`${this.post.meta_description}`},
        {hid:'keywords',name:'keywords',content:`${this.post.meta_keywords}`},
        {hid:'og:description',property:`og:description`,content: `${this.post.facebook_description}`},
        {hid:'og:image',property:`og:image`,content: `${this.post.facebook_image}`},
        {hid:'og:title',property:`og:title`,content: `${this.post.facebook_title}`},
        {hid:'twitter:description',name:`twitter:description`,content: `${this.post.twitter_description}`},
        {hid:'twitter:image',name:`twitter:image`,content: `${this.post.twitter_image}`},
        {hid:'twitter:title',name:`twitter:title`,content: `${this.post.twitter_title}`}
      ],
      link: [
        {
          rel: "canonical",
          href: this.baseUrl
        }
      ]
    }
  },
  created() {
    if(process.browser){
      this.baseUrl = window.location.origin + window.location.pathname
    }
  },
  async asyncData({params, $axios, app}) {
    let post = await $axios.$get(`/api/post/${params.slug}?lang=${app.i18n.locale}`);
    let RelatedPosts = await $axios.$get(`/api/related_topics/${params.slug}?lang=${app.i18n.locale}`);
    return {
      post: post.data,
      RelatedPosts: RelatedPosts.data
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  min-height: 930px;
  object-fit: cover;
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

h5 {
  font-size: 30px;
  font-weight: bold;
  color: #000000;
}
.hold-tags{
  .tag-link{
    display: inline-block;
    background: #c7843d;
    text-align: center;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #fff;
    margin: .3rem 0;
  }
}
.col-md-8:lang(ar) {
  text-align: right;
}

::v-deep {
  .swiper-slide {
    display: flex !important;
    justify-content: center !important;
  }
}
</style>
