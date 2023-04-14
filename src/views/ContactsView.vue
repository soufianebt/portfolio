<template>
    <div class="contact-form">
        <h1 class="contact-form__heading"> <span>contact</span> me </h1>
        <div class="contact-form__column">
            <div class="contact-form__content">
                <div class="contact-form__info">
                    <h3 class="contact-form__info-item">
                        <font-awesome-icon icon="envelope" /> Soufianeboutahiri@gmail.com
                    </h3>
                    <h3 class="contact-form__info-item">
                        <font-awesome-icon icon="phone" /> +212 601-541327
                    </h3>
                    <h3 class="contact-form__info-item">
                        <font-awesome-icon icon="address-card" /> Rabat, Morocco - 12050.
                    </h3>
                </div>
            </div>
            <div class="contact-form__container">
                <input type="text" v-model="name" class="contact-form__input contact-form__input--md8" placeholder="Name" >
                <input type="email" v-model="email" class="contact-form__input contact-form__input--md8" placeholder="Email" >
                <input type="text" v-model="raison" class="contact-form__input contact-form__input--md8" placeholder="Subject" >
                <textarea name="" v-model="message" id="" cols="30" rows="10" class="contact-form__textarea" placeholder="Message"></textarea>
                <button type="submit" v-on:click="sendEmail" class="contact-form__button"> Send <i class="fas fa-paper-plane"></i> </button>
            </div>
        </div>
    </div>
</template>





<script>
import {send} from "@emailjs/browser";

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
        send('service_ce3bbxt', 'template_niz435g',{
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