<template>
    <div>
      <div class="fixed-social">
        <ul>
          <li>
            <nuxt-link to="/about#contact" class="hold-icon">
            <span class="icon">
              <img src="@/assets/images/booking.png" alt="booking">
            </span>
              <span class="des-icon">book now</span>
            </nuxt-link>
          </li>
          <li>
            <a :href="socialLinks.twitter" class="hold-icon">
            <span class="icon">
              <i class="fab fa-twitter"></i>
            </span>
              <span class="des-icon">twitter</span>
            </a>
          </li>
          <li><a :href="socialLinks.facebook" class="hold-icon"><span class="icon"><i class="fab fa-facebook-f"></i></span><span class="des-icon">facebook</span></a></li>
          <li><a :href="socialLinks.instagram" class="hold-icon"><span class="icon"><i class="fab fa-instagram"></i></span><span class="des-icon">instagram</span></a></li>
          <li><a :href="socialLinks.youtube" class="hold-icon"><span class="icon"><i class="fab fa-youtube"></i></span><span class="des-icon">youtube</span></a></li>
          <li><a :href="socialLinks.whatsapp" class="hold-icon"><span class="icon"><i class="fab fa-whatsapp"></i></span><span class="des-icon">whatsapp</span></a></li>
        </ul>
      </div>
      <div class="social-mobile">
        <ul>
          <transition name="slide-fade">
            <ul v-if="isShow">
              <li><nuxt-link to="/about#contact" class="hold-icon"><span class="icon"><img src="@/assets/images/booking.png" alt="booking"></span></nuxt-link></li>
              <li><a :href="socialLinks.twitter" class="hold-icon"><span class="icon"><i class="fab fa-twitter"></i></span></a></li>
              <li><a :href="socialLinks.facebook" class="hold-icon"><span class="icon"><i class="fab fa-facebook-f"></i></span></a></li>
              <li><a :href="socialLinks.instagram" class="hold-icon"><span class="icon"><i class="fab fa-instagram"></i></span></a></li>
              <li><a :href="socialLinks.youtube" class="hold-icon"><span class="icon"><i class="fab fa-youtube"></i></span></a></li>
              <li><a :href="socialLinks.whatsapp" class="hold-icon"><span class="icon"><i class="fab fa-whatsapp"></i></span></a></li>
            </ul>
          </transition>
          <li @click="isShow = ! isShow"><span class="hold-icon"><span class="icon"><i class="fas fa-ellipsis-v"></i></span></span></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "FixedSocial",
      props:['socialLinks'],
      data(){
        return{
          isShow : false
        }
      }
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
.social-mobile{
  position: fixed;
  z-index: 100;
  right: 3%;
  bottom: 1%;
  display: none;
  li{
    right: auto;
  }
  .hold-icon{
    background: transparent;
    .icon{
      border-radius: 50%;
    }
  }
  @media (max-width: 1080px) {
    display: block;
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
html:lang(ar){
  .fixed-social{
    right: auto !important;
    left: 0 !important;
  }
  li{
    right: auto;
    left: -70%;
    &:hover{
      right: auto;
      left: 0;
    }
  }
  .social-mobile{
    right: auto;
    left: 3%;
    li{
      left: auto;
    }
  }
}
</style>
