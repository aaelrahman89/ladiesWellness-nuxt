<template>
  <footer class="text-white">
    <div class="container-fluid">
      <!--footer start-->
      <div class="row" :style="$i18n.locale == 'ar'?'text-align:right;direction:rtl;':'text-align:left;direction:ltr;'">
        <div class="col-md-4">
          <!--section start-->
          <FooterLinks />
          <!--section end-->

          <!--section start-->
         <FooterContact :footerContactsData="footerContacts" />
          <!--section end-->

          <!--section start-->
          <FooterStore />
          <!--section end-->
        </div>
        <div class="col-md-4">
          <!--section start-->
          <section>
            <img src="@/assets/images/footer-logo.png" alt="klw" class="img-fluid" />
          </section>
          <!--section end-->

          <!--section start-->
          <FooterAbout :footerAbout="footerAbout" />
          <!--section end-->

          <!--section start-->
          <FooterSocialMedia :footerSocialMedia="footerSocial" />
          <!--section end-->
        </div>
        <div class="col-md-4">

          <!--section start-->
          <section class="mt-5 text-center">
            <button class="btn btn-booknow bg-white rounded-0 position-relative">
              <i class="fas fa-shopping-cart position-absolute text-white" :style="$i18n.locale == 'ar'?'right: -1px; left: auto;':'left: -1px; right: auto;'"></i> Book Now
            </button>
          </section>
          <!--section end-->

          <!--section start-->
          <FooterMap />
          <!--section end-->

        </div>
      </div>
      <!-- footer end -->

      <!--copyright start-->
         <CopyRight />
      <!--copyright end-->

    </div>
  </footer>
</template>

<script>
import CopyRight from './FooterComponents/CopyRight';
import FooterLinks from './FooterComponents/FooterLinks';
import FooterContact from './FooterComponents/FooterContact';
import FooterStore from './FooterComponents/FooterStore';
import FooterAbout from './FooterComponents/FooterAbout';
import FooterSocialMedia from './FooterComponents/FooterSocialMedia';
import FooterMap from './FooterComponents/FooterMap';
export default {
    components: {
        CopyRight
    },
    props: ['footerSocial', 'footerContacts', 'footerAbout']
};
</script>

<style lang="scss">
footer {
  background-color: #000;
  padding-top: 130px;
  section {
    margin-bottom: 20px;
    h3 {
      font-size: 30px;
      font-weight: 300;
      letter-spacing: normal;
      margin-bottom: 33px;
    }
    ul {
      line-height: 37px;
      font-size: 20px;
      font-weight: 300;
    }
    .store {
      font-size: 23px;
    }
    p {
      font-size: 20px;
      font-weight: 300;
    }
    .btn-booknow {
      width: 388px;
      height: 59px;
      font-size: 20px;
      font-weight: 600;
      color: #666666;
        @media screen and (max-width: 768px) {
    width: 100%;
  }
      i {
        width: 45px;
        height: 59px;
        background-color: #e53a76;
        line-height: 59px;
        left: -1px;
        top: -1px;
      }
    }
  }
  a {
    &:hover {
      text-decoration: none;
      color: #ccc !important;
      transition: all 0.9s ease 0s;
    }
  }
}
</style>