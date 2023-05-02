<template>
    <div class="container">
        <h1 class="mt-4">Contacts</h1>
      <div class="row">
        <div v-for="contact in Contactss" :key="contact.id" class="col-6">
          <ContactCard 
            :name="contact.name" :phone="contact.phone"
            :address="contact.address" :nickname="contact.nickname"
            :email="contact.email" :gender="contact.gender"
          />
          

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ContactCard from '../components/ContactCard.vue'
  </script>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        Contactss: []
      }
    },
  
    created() {
      let apiURL = "http://localhost:5000/api";
      axios.get(apiURL)
        .then(response => {
          this.Contactss = response.data.contacts
          console.log("this is the result ", this.Contactss)
        }).catch(error => {
          console.log(error)
        })
    },
  
    components: {
      ContactCard
    }
  }
  </script>
  