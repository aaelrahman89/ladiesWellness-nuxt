<template>
    <div>
       <HomeTitle title="Journey" desc="Lorem ipsum lorem ipsum lorem ipsum" /> 
       
       <div class="row m-0">
         <div class="col-md-3 p-0">
            <div class="box position-relative">
              <div class="overlay"></div>
              <img src="https://picsum.photos/id/1081/400" class="w-100">
              <div class="desc">
                <div class="desc-content text-center">
                  <h5>Lorem Ipsum</h5>
              <p>lorem lorem lorem</p>
                </div>
              </div>
            </div>
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
    }
}
</script>

<style lang="scss" scoped>
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
     font-size: 13px;
     color: #6e6e6f;
   }
   p{
     color: #c4c4c4;
     font-size: 11px;
   }
 }
   
 }

</style>