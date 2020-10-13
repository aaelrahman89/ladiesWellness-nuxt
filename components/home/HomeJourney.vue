<template>
    <div>
       <HomeTitle :title="$t('menu.journey')" :desc="title" />

       <div class="row m-0 position-relative height800">
         <div class="col-md-12 p-0 m-0 d-none d-sm-block">
           <div class="journey-title"></div>
         </div>


         <div class="col-md-3 col-6 p-0" v-for="journey in homeJourney" :key="journey.id">
           <nuxt-link :to="localePath(`/journey/${journey.slug}`)">
                       <div class="box text-capitalize position-relative">
              <div class="overlay"></div>
              <img :src="journey.image" class="w-100" :alt="journey.image_alt" :title="journey.image_title">
              <div class="desc">
                <div class="desc-content text-center">
                  <h5>{{journey.title}}</h5>
              <p class="d-none d-sm-block">{{journey.small_description}}</p>
                </div>
              </div>
            </div>
           </nuxt-link>
         </div>



       </div>

    </div>
</template>

<script>
import HomeTitle from './shared/HomeTitle';
export default {
  name: 'HomeJourney',
    components: {
       HomeTitle
    },
    props: ['homeJourney','title']
}
</script>

<style lang="scss" scoped>
.box{
    &:hover{
    z-index: 150;
  }
}
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #fcd6e5d9;
  &:hover{
    background-color: transparent;
    border: 20px solid #fcd6e5d9;
    transition: all 0.9s ease 0s;
    z-index: 120;
  }
}
.desc{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  top: 0px;
  opacity: 0;
}
.overlay:hover ~ .desc {
  width: 90%;
  height: 90%;
  margin: 5%;
  opacity: 1;
  transition: all 0.9s ease 0s;

 .desc-content{
   border: 1px solid #d39138;
   width: 90%;
   height: 90%;
   margin: 5%;
   background-color: #ffffff4f;
   h5{
     margin-top: 40%;
  font-size: 1.25em;
  font-weight: 600;
  color: #000000;
   @media screen and (max-width: 768px) {
    font-size: 1em;
     }
   }
   p{
      font-size: 20px;
  font-weight: 600;
  color: #989898;
   }
 }

 }
 .journey-title{
     z-index: 100;
     background-image: url('~assets/images/journerytext-bg.png');
    //  background-image: url('https://picsum.photos/200/300');
     background-repeat: no-repeat;
     height: 948px;
     width: 100%;
    //  background-size: cover;
     position: absolute;
     pointer-events: none;
 }
 img{
   height: 400px;
     @media screen and (max-width: 768px) {
    height: auto;
     }
 }
 .height800{
   height: 800px;
   @media screen and (max-width: 768px) {
    height: auto;
     }
 }

</style>
