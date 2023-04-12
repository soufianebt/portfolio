<template>
  <h1 class="heading"> <span>contact</span> me </h1>
  <div class="row">
    <div class="content">
      <h3 class="title">contact info</h3>
      <div class="info">
        <h3> <i class=""></i> Soufianeboutahiri@gmail.com </h3>
        <h3> <i class=""></i> +212 601-541327 </h3>
        <h3> <i class=""></i> Rabat, Morocco - 12050. </h3>
      </div>
    </div>
    <div class="container align-content-center col-5" >
      <input type="text" v-model="name" class="form-control mb-3 col-md-6" placeholder="name" >
      <input type="email" v-model="email" class="form-control mb-3 col-md-6" placeholder="email" >
      <input type="text" v-model="raison" class="form-control mb-3 col-md-6"  placeholder="Object" >
      <textarea name="" v-model="message" id="" cols="30" rows="10" class="form-control mb-3 col-md-6" placeholder="message"></textarea>
      <button type="submit" v-on:click="sendEmail" class="btn btn-primary mb-3 col-md-6"> send <i class="fas fa-paper-plane"></i> </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsView",
  data() {
    return {
      name: "",
      email: "",
      raison: "",
      message: ""
    };
  },
  methods: {
    sendEmail() {
      try {
        emailjs.send('service_ce3bbxt', 'template_niz435g',{
          from_name: this.name,
          raison: this.raison,
          message: this.message,
          reply_to: this.email,
        }, '8qRK8jwWQRQlZXLTC')
      } catch(error) {
        console.log(error)
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.raison = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>

</style>