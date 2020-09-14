<template>
    <div>
      <HomeTitle title="Doctors" desc="At vero eos et accusamus et iusto" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12" v-for="item in 8 " :key="item">
            <Doctor></Doctor>
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
    components: {
      Doctor,
      HomeTitle
    }
  }
</script>

<style scoped>

</style>
