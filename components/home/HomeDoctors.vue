<template>
    <div>
        <HomeTitle :title="$t('menu.doctors')" :desc="title"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-6 col-12" v-for="item in setDoctors" :key="item.id">
                    <Doctor :doctor="item"></Doctor>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <nuxt-link :to="localePath('/doctors')">
                    <button type="button" class="viewall-btn"><span class="btn-border">{{ $t('viewAllDoctors') }}</span></button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeTitle from './shared/HomeTitle';
    import Doctor from "../shared/Doctor";

    export default {
        name: "HomeDoctors",
        props: ['setDoctors','title'],
        components: {
            Doctor,
            HomeTitle
        },
    }
</script>

<style scoped>
.viewall-btn{
border: none;
    outline: none;
    background-color: #c7843d;
    width: 170px;
    height: 60px;
    padding: .5rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: all ease-in-out .3s;
    font-weight: bold;
}
.btn-border{
        border: 1px solid #F5F5F5;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
}

</style>
