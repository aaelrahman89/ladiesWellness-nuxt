<template>
  <div>
<b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480" >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(slider, index) in sliders.data" :key="index" :caption="slider.title" :text="slider.description" :img-src="slider.photo" >
      <div class="ttw_button_container">
<a :href="slider.link" class="ttw_button" role="button">{{ $t('viewMore') }}</a>
</div>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  export default {
    props: ['sliders']
  }
</script>

<style lang="scss" scoped>

::v-deep{
.carousel-caption {
    right: auto;
    bottom: 0px;
    left: 7%;
    width: 60%;
    text-align: left;
    top: 30%;
    color: black;
        z-index: 20;
     @media screen and (max-width: 768px) {
    right: 15%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    width: auto;
    top: unset;
         }
    h3{
          font-size: 100px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #000000;
          @media screen and (max-width: 768px) {
        font-size: 1.75rem;
         }
    }
    p{
        font-size: 25px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #000000;
          @media screen and (max-width: 1024px) {
        display: none;
         }
    }
    .ttw_button_container {
    background: #fff;
    width: 261px;
  height: 85px;
    margin: 4px 0;
    display: inline-block;
    @media screen and (max-width: 768px) {
        width: 231px;
  height: 55px;
  margin-left: 0px;
         }
}
a.ttw_button{
    background: #fff;
    border: solid 1px #d18c2f;
    display: inline-block;
        margin: 10px;
    width: 241px;
    height: 65px;
    text-align: center;
    line-height: 65px;
    font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #000000;
      text-shadow: none;
      @media screen and (max-width: 768px) {
       width: 211px;
    height: 35px;
    font-size: 20px;
    line-height: 35px;
         }
      &:hover{
        text-decoration: none;
      }
}
}
.carousel-indicators {
    display: unset;
    margin-left: 2%;
    top: 35%;
    width: 1%;
        li{
        width: 10px;
    height: 3px;
    background-color: #000;
        }

}
.carousel-indicators .active {
    opacity: 1;
    width: 20px;
    height: 3px;
    background-color: #d28d30;
}

.carousel-indicators:lang(ar){
    margin-left: auto;
    right: 0;
    margin-right: 2%;
}

.carousel-caption:lang(ar){
    margin-left: auto;
    right: 7%;
    margin-right: auto;
    margin-left: 2%;
    left: auto;
    text-align: right;
}

}




</style>
