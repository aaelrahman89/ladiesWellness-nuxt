<template>
    <div :id="topEvent.slug">
        <h3>{{ topEvent.title }}</h3>
        <small>{{ topEvent.date }}</small>
        <p class="mt-4" v-html="topEvent.description"></p>
      <ul class="d-flex x-auto">
        <li><a href="#" target="_blank" title="twitter"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#" target="_blank" title="facebook"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#" target="_blank" title="youtube"><i class="fab fa-youtube"></i></a></li>
        <li><a href="#" target="_blank" title="whatsapp"><i class="fab fa-whatsapp"></i></a></li>
      </ul>
    </div>
</template>

<script>
export default {
    props: ['topEvent']
}
</script>

<style lang="scss" scoped>
   h3{
  font-size: 50px;
  font-weight: 600;
  color: #000000;
   }
   small{
  font-size: 25px;
  font-weight: 300;
  color: #c5c5c5;
   }
   p{
  font-size: 30px;
  font-weight: 300;
  color: #000000;
   }
   li{
       padding: 10px;
       i{
           font-size: 20px;
       }
       a{
           color: #000000;
           &:hover{
               opacity: 0.9;
           }
       }
   }
   div:lang(ar){
       text-align: right;
   }
</style>