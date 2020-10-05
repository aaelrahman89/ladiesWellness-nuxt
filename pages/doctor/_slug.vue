<template>
  <div class="single-doctor">
    <!--      {{this.$route.params.slug}}-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-12 px-0">
          <img :src="doctor.doctor.photo" :alt="doctor.doctor.image_alt" :title="doctor.doctor.image_title" class="img-fluid single-doctor">
        </div>
        <div class="col-md-7 col-12">
          <h1>{{doctor.doctor.title}}</h1>
          <div class="doctor-details" v-html="doctor.doctor.description">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "doctor_slug",
    data() {
      return {
        baseUrl: ''
      }
    },
    created() {
      if(process.browser){
        this.baseUrl = window.location.origin + window.location.pathname
      }
    },
    head(){
      return{
        title: `${this.doctor.doctor.title}`,
        meta:[
          {hid:'description',name:`description`,content:`${this.doctor.doctor.meta_description}`},
          {hid:'keywords',name:'keywords',content:`${this.doctor.doctor.meta_keywords}`},
          {hid:'og:description',property:`og:description`,content: `${this.doctor.doctor.facebook_description}`},
          {hid:'og:image',property:`og:image`,content: `${this.doctor.doctor.facebook_image}`},
          {hid:'og:title',property:`og:title`,content: `${this.doctor.doctor.facebook_title}`},
          {hid:'twitter:description',name:`twitter:description`,content: `${this.doctor.doctor.twitter_description}`},
          {hid:'twitter:image',name:`twitter:image`,content: `${this.doctor.doctor.twitter_image}`},
          {hid:'twitter:title',name:`twitter:title`,content: `${this.doctor.doctor.twitter_title}`}
        ],
        link: [
          {
            rel: "canonical",
            href: this.baseUrl
          }
        ]
      }
    },
    asyncData(context) {
      return context.$axios.get(`/api/doctor/${context.params.slug}?lang=${context.app.i18n.locale}`).then(res => {
        console.log(res.data);
        return {doctor: res.data}
      }).catch(error => {
        console.log(error.data);
      })
    },
  }
</script>

<style scoped lang="scss">
  .single-doctor {
    margin-bottom: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 575px;
    }
  }

  .doctor-details {
    width: 90%;
    margin-right: auto;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: #c7843d;
  }
  .doctor-details {
    margin: 3rem 0;
    p {
      line-height: 1.63;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #c7843d;
      font-weight: bold;
      cursor: pointer;
      transition: all ease-in-out .3s;

      &:hover {
        color: #040404;
      }
    }
  }

  html:lang(ar) {
    .single-doctor {
      text-align: right;
    }
  }
</style>
