<template>
    <div class="contact-form">
        <h1 class="contact-form__heading">
            <font-awesome-icon icon="fa-solid fa-address-book"/>
            Contact me
        </h1>
        <div class="contact-form__column">
            <div class="contact-form__content">
                <div class="contact-form__info">
                    <h3 class="contact-form__info-item">
                        <font-awesome-icon icon="envelope"/>
                        <a class="contact-form__info-item__link" href="mailto:soufianeboutahiri@gmail.com"
                           title="Send me an email">
                            Soufianeboutahiri@gmail.com
                        </a>
                    </h3>
                    <h3 class="contact-form__info-item">
                        <font-awesome-icon icon="phone"/>
                        <a class="contact-form__info-item__link" href="tel:+212601541327" title="Call me">
                            +212 601-541327
                        </a>
                    </h3>
                    <h3 class="contact-form__info-item">
                        <font-awesome-icon icon="address-card"/>
                        Rabat, Morocco - 12050.
                    </h3>
                </div>
            </div>
            <div class="contact-form__container">
                <input v-model="name" class="contact-form__input contact-form__input--md8" placeholder="Name"
                       type="text">
                <input v-model="email" class="contact-form__input contact-form__input--md8" placeholder="Email"
                       type="email">
                <input v-model="raison" class="contact-form__input contact-form__input--md8" placeholder="Subject"
                       type="text">
                <textarea id="" v-model="message" class="contact-form__textarea" cols="30" name="" placeholder="Message"
                          rows="10"></textarea>
                <button class="contact-form__button" type="submit" v-on:click="sendEmail"> Send
                    <font-awesome-icon icon="fas fa-paper-plane"/>
                </button>
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
        send('service_ce3bbxt', 'template_niz435g', {
          from_name: this.name,
          raison: this.raison,
          message: this.message,
          reply_to: this.email,
        }, '8qRK8jwWQRQlZXLTC')
      } catch (error) {
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