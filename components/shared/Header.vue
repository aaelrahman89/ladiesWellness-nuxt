<template>
  <div>
    <div class="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2">
            <div class="hold-event">
              <nuxt-link :to="'event'"><i class="fas fa-bell"></i> Event : <span class="event-name">zomba</span></nuxt-link>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="nav-bar">
              <ul>

                <li><nuxt-link :to="localePath('/')">{{ $t('menu.home') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/about')">{{ $t('menu.about') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/journey')">{{ $t('menu.journey') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/')"><img src="@/assets/images/logo.png" alt="akw-logo" class="logo"></nuxt-link></li>
                <li class="submenu"><a href="#">{{ $t('menu.services') }}</a>
                  <ul>
                    <li v-for="HeaderService in HeaderServices" :key="HeaderService.id"><nuxt-link :to="localePath(`/service/${HeaderService.slug}`)">{{HeaderService.name}}</nuxt-link></li>
                  </ul>
                </li>
                <li><nuxt-link :to="localePath('/doctors')">{{ $t('menu.doctors') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/blog')">{{ $t('menu.blog') }}</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="hold-options">
              <div class="search ">
                <i class="fas fa-search"></i>
              </div>
              <div class="event-link separate">
                <nuxt-link :to="'events'"><i class="far fa-calendar-alt"></i></nuxt-link>
              </div>
              <div class="lang">
                <nuxt-link :to="switchLocalePath('en')" v-if="this.$i18n.locale === 'ar'">English</nuxt-link>
                <nuxt-link :to="switchLocalePath('ar')" v-if="this.$i18n.locale === 'en'">عربى</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-mobile">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-3 menu-tap toggle-menu">
            <div class="toggle-span" @click="showSlide = !showSlide">
              <span
                :style="showSlide? 'transform : translateY(125%) translateX(50%) rotate(-45deg) ; margin : 0':''"></span>
              <span
                :style="showSlide? 'opacity : 0 ; margin : 0' : 'transform : translateX(25%) ; opacity : 1 ; margin: .4rem 0'"></span>
              <span
                :style="showSlide? 'transform : translateY(-50%) translateX(50%) rotate(45deg) ;  margin : 0 ' : ''"></span>
            </div>
          </div>
          <div class="col-md-6 col-9 logo-menu-mobile">
            <div class="logo">
              <nuxt-link :to="localePath('/')">
                <h3 class="top-title">andalusia ladies wellness</h3>
                <img src="@/assets/images/logo.png" alt="alw" class="img-fluid">
              </nuxt-link>
            </div>
            <transition name="slide-fade">
              <div class="menu-mobile" v-if="showSlide">
                <ul>
                  <li class="hold-two-options">
                    <ul class="two-options">
                      <li>
                        <a href="#"><i class="far fa-user"></i> login</a>
                      </li>
                      <li>
                        <nuxt-link :to="localePath('event')" class="event-mobile"><i class="fas fa-bell"></i><span>Event :</span><span class="event-name">zomba</span></nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('events')">events</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('/')">home</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('/about')">about us</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('/journey')">journey</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('/services')">services</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('/doctors')">doctors</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="localePath('/blog')">blog</nuxt-link>
                  </li>
                  <li @click="showSlide = false">
                    <nuxt-link :to="switchLocalePath('en')" v-if="this.$i18n.locale === 'ar'">English</nuxt-link>
                    <nuxt-link :to="switchLocalePath('ar')" v-if="this.$i18n.locale === 'en'">عربى</nuxt-link>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      showSlide: false
    }
  },
  props: ['HeaderServices']
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variable";
/* Styling the sub menu */
.submenu {
  position: relative;
}

.submenu ul {
  position: absolute;
  padding:0;
  margin:0;
  display: none;
  z-index: 9999;
      width: 269px;
  // -webkit-backdrop-filter: blur(30px);
  // backdrop-filter: blur(30px);
  // box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding-top: 30px;
}

.submenu li{
  display: block;
  background: #fff;
  color: #000;
  float: none;
  width: 100%;
  padding: 5px;
    font-size: 18px;
  font-weight: 600;
}

/* Styling drop down links */
.submenu li a {
  background: transparent;
  padding:10px;
  display: block;
}

.submenu li a:hover {
  opacity: 0.7;
  z-index: 9999;
  transition: all 0.9s ease 0s;
}

/* Showing Submenu on hover*/
.submenu:hover ul {
  display: block;
}


  .main-header{
    @media (max-width: 1080px) {
      display: none;
    }
  }
  .header-mobile{
    display: none;
    z-index: 20;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #000000f2;;
    @media (max-width: 1080px) {
      display: block;
    }
    .toggle-menu {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        width: 50px;
        margin-right: auto;
        margin-left: 2rem;
        @media (max-width: 600px) {
          margin-right: 1.3rem;
          margin-left: 0;
        }
      }

      span {
        display: block;
        margin: .4rem 0;
        width: 100%;
        height: 2px;
        background-color: $mainColor;
      }
    }

    .toggle-span {
      span {
        &:first-of-type{
          transform : translateX(50%) rotate(0) ; margin: .4rem 0
        }
        &:last-of-type{
          transform : translateX(50%) rotate(0) ; margin: .4rem 0
        }
        transition: all linear .3s;
      }
    }

    .logo-menu-mobile {
      position: relative;
      .logo {
        a{
          margin: .5rem 0 .5rem 2rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          color: $mainColor;
          h3{
            font-size: 13px;
            margin-right: 7px;
            text-transform: capitalize;
          }
          img {
            height: 50px;
          }
          @media (max-width: 600px) {
            margin: .5rem 0 .5rem 0;
            img {
              height: 40px;
            }
          }
        }
      }

      .menu-mobile {
        width: 85%;
        background-color: rgba(0, 0, 0, 0.85);
        height: 100%;
        margin-right: auto;
        top: 56px;
        left: 0;
        position: fixed;
        overflow: auto;
        .event-mobile{
          margin: 0;
          padding: 0;
          padding-left: 1rem;
          .fa-bell{
            margin-right: .3rem;
          }
        }
        .two-options{
          .fa-user{
            margin-right: .3rem;
          }
          li{
            padding: 0;
            border-bottom: none;
            display: inline-block;
            &:first-of-type{
              width: 24%;
            }
            &:last-of-type{
              width: 74%;
            }
          }
        }
        ul {
          li {
            padding-left: 2rem;
            a, span {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              margin: 1rem 0;
              padding-right: .5rem;
              color: $mainColor;
              text-transform: capitalize;
            }

            border-bottom: 1px solid #C7843D;

            &:last-of-type {
              border-bottom: none;
            }
          }
        }

        .key-sub-menu {
          margin-bottom: 0.5rem;
        }

        .sub-menu {
          li {
            a, span {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              margin: .5rem 0;
              margin-top: 0;
              padding-right: 3rem;
              color: $mainColor;
            }
            border-bottom: 1px solid #c756a14d;
            &:last-of-type {
              border-bottom: none;
            }
          }
        }
      }
      .fa-plus, .fa-minus {
        margin: 0 .3rem;
        transition: all ease-in-out .4s;
      }
    }
  }
  html:lang(ar){
    .header-mobile{
      .toggle-menu { div {margin-left: auto;margin-right: 2rem;@media (max-width: 600px) {margin-left: 0;margin-right: 1.3rem;}} }
      .logo-menu-mobile { .logo { a{margin: .5rem 2rem .5rem 0; h3{margin-right: auto;margin-left: 7px;} } } .menu-mobile {margin-left: auto;margin-right: 0;left: auto;right: 0; .event-mobile{padding-left: 0;padding-right: 1rem; .fa-bell{margin-right: auto;margin-left: .3rem;} } .two-options{ .fa-user{margin-right: auto;margin-left: .3rem;} } ul { li {padding-left: 0;padding-right: 2rem; a, span {padding-right: 0;padding-left: .5rem;} } } .sub-menu { li { a, span {padding-right: 0;padding-left: 3rem;} } } } }
    }
  }
</style>
