<template>
  <div class="contact-us">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-12 hold-contact-form">
          <h1 class="heading-contact">Contact Us .</h1>
          <p class="paragraph-contact">we'd love to hear from you. send ux a contact us and
            we'll respond as possible</p>
          <div class="contact-info">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="contact-info-item">
                  <i class="fas fa-phone-volume"></i>
                  <span>+ 99 411 725 39 12</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="contact-info-item">
                  <i class="fas fa-clock"></i>
                  <span>Saturday - Friday 24 Hours</span>
                </div>
              </div>
              <div class="col-12">
                <div class="contact-info-item">
                  <i class="fas fa-envelope"></i>
                  <span>biagiottitheme@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <ValidationObserver v-slot="{ invalid }"  class="col-12">
            <div class="row">
              <div class="col-12 px-0">
                <form @submit.prevent="onSubmit">
                  <div class="col-12">
                    <ValidationProvider name="Name" rules="required" v-slot="{ errors }" class="general-input">
                      <input v-model="contactInfo.name" type="text" placeholder="Name">
                      <span class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-12">
                    <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }" class="general-input">
                      <input v-model="contactInfo.email" type="email" placeholder="Email">
                      <span  class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-12">
                    <ValidationProvider name="Message" rules="required" v-slot="{ errors }" class="contact-text-area">
                      <textarea v-model="contactInfo.message" placeholder="Message"></textarea>
                      <span  class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-12">
                    <button type="submit" :disabled="invalid" class="send-btn">
                      <span class="btn-border">Send</span>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </ValidationObserver>
        </div>
        <div class="col-lg-6 col-12 px-0">
          <img src="@/assets/images/black-model.png" alt="black-model" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "ContactUs",
    data: () => ({
      contactInfo:{
        name: '',
        email: '',
        message: '',
      }
    }),
    methods: {
      onSubmit() {
        console.log(this.contactInfo);
        axios.post('http://admin.alwstage.tk/api/contactus',this.contactInfo).then(res =>{
          console.log(res.data)
        }).catch( error => console.log(error.data))
      }
    }
  }
</script>

<style scoped lang="scss">
  .contact-us {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  }

  .heading-contact {
    margin: 3rem 0 1rem 0;
    font-weight: bolder;
  }

  .hold-contact-form {
    padding-left: 6rem;
    padding-right: 3rem;  }

  .paragraph-contact {
    line-height: 1.4;
    width: 70%;
    margin-right: auto;
  }

  .contact-info-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;

    i {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
      display: inline-block;
      margin-left: 1rem;
    }
  }
  .general-input{
    min-height: 80px;
    display: block;
    transition: all ease-in-out .3s;
    input{
      width: 100%;
      min-height: 50px;
      display: block;
      border: 1px solid #707070;
      outline: none;
      padding-left: 1rem;
      color: #707070;
      transition: all ease-in-out .3s;
    }
  }
  .contact-text-area{
    width: 100%;
    min-height: 150px;
    transition: all ease-in-out .3s;
    textarea{
      width: 100%;
      padding: 1rem 0 0 1rem;
      outline: none;
      min-height: 150px;
      transition: all ease-in-out .3s;
    }
  }
  .error-message{
    color: #c7843d;
    transition: all ease-in-out .3s;
  }
  .send-btn{
    border: none;
    outline: none;
    background-color: #c7843d;
    width: 200px;
    height: 60px;
    padding: .5rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: all ease-in-out .3s;
    .btn-border{
      border: 1px solid #F5F5F5;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
  .send-btn:disabled{
    background-color: rgba(199, 132, 61, 0.61);
    pointer-events: none;
  }
  html:lang(ar){
    .hold-contact-form {text-align:right;padding-right: 6rem;padding-left: 3rem;}
    .paragraph-contact {margin-left: auto;margin-right: 0;}
    .contact-info-item { span {margin-left: auto;margin-right: 1rem;} }
    .general-input{ input{padding-left: 0;padding-right: 1rem;} }
    .contact-text-area{ textarea{padding: 1rem 1rem 0 0;} }
  }
</style>
