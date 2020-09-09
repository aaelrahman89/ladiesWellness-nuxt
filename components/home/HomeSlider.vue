<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
      <!-- Text slides with image -->
      <b-carousel-slide caption="ORIGINAL STYLE" text="Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum." img-src="https://picsum.photos/1024/480/?image=52" >
      <div class="ttw_button_container">
<a class="ttw_button">View More</a>
</div>
      </b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide caption="ORIGINAL STYLE" text="Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum." img-src="https://picsum.photos/1024/480/?image=55" >
      <div class="ttw_button_container">
<a class="ttw_button">View More</a>
</div>
      </b-carousel-slide>

    

    </b-carousel>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
.carousel-caption {
    right: auto;
    bottom: 0px;
    left: 7%;
    width: 50%;
    text-align: left;
    top: 30%;
    color: black;
    h3{
        font-size: 100px;
        font-weight: normal;
    }
    .ttw_button_container {
    background: #fff;
    padding: 4px 10px;
    margin: 4px 0;
    display: inline-block;
}
a.ttw_button{  
    background: #fff;
    border: 1px solid #efd7b8;
    padding: 6px 52px;
    font-weight: bold;      
    font-size: 19px;
    display: inline-block;
    color: #000;
}
}
.carousel-indicators {
    display: unset;
    margin-left: 2%;
    top: 35%;
        li{
        width: 12px;
        }
    
}
.carousel-indicators .active {
    opacity: 1;
    width: 15px;
}
</style>