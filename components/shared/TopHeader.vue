<template>
  <div class="top-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-12">
          <SocialLinks :socialLinksHref="socialLinks"></SocialLinks>
        </div>
        <div class="col-lg-6 col-12 text-center">
          <h3 class="top-title">{{ $t('slogan') }}</h3>
        </div>
        <div class="col-lg-3 -col-12">
          <div class="profile d-none">
            <a href="#">login <i class="far fa-user"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks";
export default {
   name: 'TopHeader',
  components: {SocialLinks},
  props:['socialLinks']
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/variable";
  .top-header{
    padding: 0 2rem ;
    background: $blackColor;
    min-height: 40px;
    display: flex;
    align-items: center;
    .top-title{
      color: $mainColor;
      text-transform: capitalize;
      font-size: 1.4rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      height: 100%;
      @media (max-width: 992px) {
        margin-bottom: 0;
        font-size: 1.3rem;
      }
    }
    .profile{
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a{
        color: #fff;
        text-decoration: none;
        transition: all ease-in-out .3s;
        &:hover{
          color: $mainColor;
        }
      }
      @media (max-width: 992px) {
        justify-content: center;
        padding: .5rem 0;
      }
    }
    @media (max-width: 1080px) {
      display: none;
    }
  }
</style>
