<template>
    <div class="row">
             <div class="col-md-12 text-center">
                 <div class="copyright">
            <span v-if="$i18n.locale =='en'">All rights reserved to - Andalusia Group {{new Date().getFullYear()}} ©</span>
            <span v-if="$i18n.locale =='ar'">©{{new Date().getFullYear()}} جميع الحقوق محفوظة للأندلسية جروب</span>
    </div>
             </div>
         </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.copyright{
    padding: 30px 0px;
    border-top: 1px solid #fff;
}
</style>
