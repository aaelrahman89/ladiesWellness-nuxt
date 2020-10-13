<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="position-relative">
    <ScrollToTop/>
    <TopHeader :socialLinks="footerSocial"></TopHeader>
    <Header :HeaderServices="HeaderServices" :headerTopEvent="headerTopEvent" :socialLinks="footerSocial" @showSearch="showSearch($event)"></Header>
    <FixedSocial :socialLinks="footerSocial"></FixedSocial>
<!--    <div class="fixed-social opp">-->
<!--      <ul>-->
<!--        <li>-->
<!--          <a href="https://booking.alw-sa.com/" target="_blank" class="hold-icon">-->
<!--            <span class="des-icon">book now</span>-->
<!--            <span class="icon">-->
<!--              <img src="@/assets/images/booking.png" alt="booking">-->
<!--            </span>-->
<!--          </a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    <transition name="slide-fade">
      <div class="search-page" v-if="showSearchPage">
        <span class="close" @click="showSearchPage = false"><i class="fas fa-times"></i></span>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 col-12 px-0">
              <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent.enter="sendWord">
                  <div>
                    <ValidationProvider name="Name" rules="required" v-slot="{ errors }" class="search-input">
                      <i class="fas fa-search"></i>
                      <input v-model="searchWord" type="text" :placeholder="$t('search')">
                    </ValidationProvider>
                  </div>
                </form>
              </ValidationObserver>
            </div>
            <div class="col-md-8 col-12 px-0 for-border">
              <div class="search-result">
                <span>{{ $t('searchResult') }} </span><span
                style="display: inline-block; margin: 0 .2rem">{{ searchWord }}</span>
              </div>
            </div>
            <div class="col-12 pt-4">
              <transition name="slide-fade">
                <div v-if="searchResult.length > 0" class="row">
                  <div class="col-md-6 col-12 search-item" v-for="(search,index) in searchResult" :key="index">
                    <div class="row" @click="goToSpecificPass(search.slug_type,search.slug)">
                      <div class="col-4">
                        <div class="search-img">
                          <img :src="search.image" :alt="search.image_alt" :title="search.image_title" class="img-fluid">
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="search-description">
                          <h4>{{ search.title }}</h4>
                          <p>{{ search.small_description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="searchResult.length === 0" class="empty-result">
                  {{$t('searchResultNotFound')}}
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <Nuxt class="responsive-mobile"/>
    <HomeNewLetter></HomeNewLetter>
    <Footer :footerSocial="footerSocial" :footerContacts="footerContacts" :footerAbout="footerAbout"/>
  </div>
</template>

<style>

</style>
<script>
import TopHeader from "../components/shared/TopHeader";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HomeNewLetter from "../components/home/HomeNewLetter";
import FixedSocial from "../components/shared/FixedSocial";
import ScrollToTop from "../components/shared/ScrollToTop";

export default {
  components: {FixedSocial, Header, TopHeader, HomeNewLetter, Footer},
  head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "ar" ? "rtl" : "ltr"
      }
    };
  },
  data() {
    return {
      footerSocial: {},
      footerContacts: {},
      footerAbout: {},
      HeaderServices: [],
      showSearchPage: false,
      searchWord: '',
      searchResult: [],
      headerTopEvent: {}
    }
  },
  methods: {
    showSearch($event) {
      this.showSearchPage = $event;
    },
    sendWord() {
      console.log(this.searchWord);
      this.$axios.post('/api/search', {
        query_search: this.searchWord,
        lang: this.$i18n.locale
      }).then(res => {
        this.searchResult = res.data.data;
      }).catch(error => console.log(error.data));
    },
    goToSpecificPass(type,slug){
      this.showSearchPage = false;
      this.$router.push(this.localePath(`/${type}/${slug}`))
    },
    // Get Social Media
    getSocialMedia() {
      this.$axios.$get(`/api/socialmedia`).then(res => {
        this.footerSocial = res.data;
      });
    },

    // Get Footer Contacts init
    getFooterContacts(locale) {
      this.$axios.$get(`/api/contacts?lang=${locale}`).then(res => this.footerContacts = res.data);
    },

    // Get Footer about us init
    getFooterAboutUs(locale) {
      this.$axios.$get(`/api/about_us?lang=${locale}`).then(res => this.footerAbout = res.data);
    },

    // Get Header Services init
    getHeaderServices(locale) {
      this.$axios.$get(`/api/services?lang=${locale}`).then(res => this.HeaderServices = res.data);
    },

    // Get Header Top Event
    getHeaderTopEvent(locale) {
      this.$axios.$get(`/api/topevent?lang=${locale}`).then(res => this.headerTopEvent = res.data);
    }

  },
  created() {
    // Get Footer SocialMedia
    this.getSocialMedia();

    // Get Footer Contacts (on page load)
    this.getFooterContacts(this.$i18n.locale);

    // Get Footer About Us (on page load)
    this.getFooterAboutUs(this.$i18n.locale);

    // Get Header Services (on page load)
    this.getHeaderServices(this.$i18n.locale);

    // Get Header Top Event (on page load)
    this.getHeaderTopEvent(this.$i18n.locale);

    // Get Data on lang changes
    this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      this.getFooterContacts(newLocale);
      this.getFooterAboutUs(newLocale);
      this.getHeaderServices(newLocale);
      this.getHeaderTopEvent(newLocale);
    }

  },
}
</script>
<style scoped lang="scss">
.fixed-social{
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 30%;
  @media (max-width: 1080px) {
    display: none;
  }
}
li{
  position: relative;
  right: -70%;
  margin-bottom: .3rem;
  transition: all ease-in-out .4s;
  &:hover{
    right: 0;
  }
}
.hold-icon{
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #fff;
  border-bottom: 0 !important;
}
.icon{
  height: 45px;
  width: 45px;
  background-color: #E53A76;
  display: inline-block;
  position: relative;
  img{
    height: 30px;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
  }
  i{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
  }
}
.des-icon{
  text-transform: capitalize;
  color: #040404;
  font-weight: bold;
  display: inline-block;
  margin: 0 1rem;
}
.opp{
  right: auto;
  left: 0;
}
li{
  position: relative;
  left: 0;
  margin-bottom: .3rem;
  transition: all ease-in-out .4s;
  &:hover{
    left: 0;
  }
}
.search-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  width: 100%;
  background: #fff;
  z-index: 500;
  overflow: auto;
  @media (max-width: 1080px) {
    top: -56px;
  }
  .empty-result{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 4rem;
  }
  .search-input {
    width: 100%;
    padding: 1rem 0;
    display: block;
    background: #e9e9e9;
    position: relative;

    .fa-search {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translate(-50%, -50%);
      color: #aeaeae;
      @media (max-width: 768px) {
        right: 15%;
      }
    }

    input {
      width: 100%;
      display: block;
      background: none;
      outline: none;
      border: none;
      padding-left: 1rem;
    }
  }

  .for-border {
    border-bottom: 1px solid #e9e9e9;
  }

  .close {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    z-index: 50;
    cursor: pointer;
    transition: all ease-in-out .3s;

    &:hover {
      color: #c7843d;
    }
  }

  .search-result {
    color: #aeaeae;
    padding: 1rem 0 0 1rem;
    font-weight: bold;
    text-transform: capitalize;
    @media (max-width: 768px) {
      padding: 1rem 0 1rem 1rem;
    }
  }

  .search-item {
    margin: 1rem 0;
    cursor: pointer;
    .search-img {
      width: 160px;
      height: 185px;
      object-fit: cover;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
}

.responsive-mobile {
  @media (max-width: 1080px) {
    margin-top: 56px;
  }
}

html:lang(ar) {
  .opp{left: auto;right: 0;}
  li{right: 0; &:hover{right: 0;} }
  .search-page {
    .search-input {
      right: auto;
      transform: translate(0);
      @media (max-width: 768px) {
        left: 15%;
      }

      .fa-search {
        right: auto;
        left: 5%;
      }
    }

    input {
      padding-left: 0;
      padding-right: 1rem;
    }
  }
  .close {right: auto;left: 1.5rem;}
  .search-result {
    padding: 1rem 1rem 0 0;
    text-align: right;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      padding: 1rem 1rem 1rem 0;
    }
  }

  .search-description {
    text-align: right;
  }
}
</style>
