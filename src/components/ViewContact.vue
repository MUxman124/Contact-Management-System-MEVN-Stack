<template>
    <div class="container border">
        <div class=" d-flex align-items-center">
            <h1 class="display mt-4 d-flex align-items-center"> Contact Details</h1>

        </div>
        <div class="row">
            <div class="col-md-6 border">
                <h1 class="my-3">{{ Contacts.name }}</h1>
                <h2 class="my-3">{{ Contacts.nickname }}</h2>
                <h3 class="my-3">{{ Contacts.email }}</h3>
                <h4 class="my-3">{{ Contacts.phone }}</h4>
                <h5 class="my-3">{{ Contacts.address }}</h5>
                <h6 class="my-3">{{ Contacts.gender }}</h6>

        </div>

        <div class="col-md-6 d-flex align-items-center border">
            <img v-if="Contacts.gender === 'male'" src="../assets/img_avatar.png" alt="" class="img-fluid " />
            <img  v-else src="../assets/img_avatar2.png" alt="" class="img-fluid " />
         </div>
         </div>
         </div>
         <div>
            <router-link to="/view" class="btn btn-warning mx-5 p-2 my-3"> 
                <i class="bi bi-arrow-left" > Back</i>
                </router-link>
         </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            Contacts: {}
        }
    },

    created() {
        let apiURL = `http://localhost:5000/api/viewcon/${this.$route.params.id}`;
        console.log("aa gya created main")

        axios.get(apiURL).then(response => {
            
            this.Contacts = response.data.contact

            cosnole.log("this is the result ", this.Contacts)
        }).catch(error => {
            console.log(error.response.data)
        })
    }
    
}
</script>