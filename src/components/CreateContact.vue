<template>
 <div>
  <NavBar />
  
     <div class="row">
      
       <div class="col-md-5 offset-md-1 mt-4">
        <div class="container mt-5 border"  >
         <div class="card " :class="{ 'hovering': isHovering }" @mouseover="isHovering = true" @mouseleave="isHovering = false">
           <div class="card-body">
             <h1 class="card-title mb-3 text-center">Create Contact</h1>
             <form @submit.prevent="createContact" >
               <div class="form-group">
                 <input 
                 type="text" 
                 class="form-control mb-2"  
                 placeholder="Enter Name"  
                 id="name" 
                 v-model="Contacts.name" 
                 required>
               </div>
               <div class="form-group">
                
                <input 
                type="text" 
                class="form-control mb-2"
                 placeholder="Nick Name (Optional)"  
                 id="nickname" 
                 v-model="Contacts.nickname"  
                 required>
               </div>
               <div class="form-group">
          
                 <input 
                 type="email" 
                 class="form-control mb-2" 
                  placeholder="Email" 
                  id="email" 
                  v-model="Contacts.email" 
                  required>
               </div>
               <div class="form-group">
          
                 <input 
                 type="text" 
                 class="form-control mb-2"  
                 placeholder="Phone" 
                 id="phone" 
                 v-model="Contacts.phone" 
                 required>
               </div>
               <div class="form-group">
                 
                 <input 
                 type="text" 
                 class="form-control mb-2"  
                 placeholder="Address" 
                 id="address" 
                 v-model="Contacts.address" 
                 required>
               </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="Contacts.gender" name="inlineRadioOptions" id="inlineRadio1" value="male" required>
                        <label class="form-check-label" for="inlineRadio1"   >Male </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio"  v-model="Contacts.gender" name="inlineRadioOptions" id="inlineRadio2" value="female" required>
                        <label class="form-check-label" for="inlineRadio2" >Female</label> 
                      </div>
                      <div>
               <button type="submit" class="btn  mt-3 p-2 rounded-0 fw-bold " style=" background-color: #F85C70; color: white " >Add Contact  <i class="bi bi-person-plus-fill"></i></button>
              </div>
             </form>
           </div>
         </div>
       </div>
     </div>
     <div class=" col-md-6">
      <div class="container border d-flex"  >
      <img src="../assets/asd.jpg" class="img-fluid d-flex m-1" alt="Responsive image">
      </div>
     </div>
   </div>


 </div>
 
</template>

<script>
import NavBar from './NavBar.vue'
import axios from 'axios'
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      isHovering: false,
      
      Contacts: 
        {
          name: '',
          email: '',
          phone: '',
          address: '',
          gender: '',
          date: new Date().toUTCString(),
          // nickname: '',
          
        }
       
    }
  },
  methods: {
    createContact() {
      let apiURL = "http://localhost:5000/api/create";

      axios.post(apiURL, this.Contacts).then(() => {
        this.$swal({
          title: "Success",
          text: "Contact Added Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
        
          this.Contacts.name = '',
          this.Contacts.email = '',
          this.Contacts.phone = '',
          this.Contacts.address = '',
          this.Contacts.nickname = '',
          this.$router.push("/view");
          console.log("jjjfjfjfgjhgfgjhfjhfjfgjhf");
    
        })
        .catch(error => {
          console.log(error)
        })
      
    }
  }
}

</script>

<style>


.card {
  transition: all 0.5s ease-in-out;
}


.hovering {
  transform: scale(1.1);
  z-index: 1;
  box-shadow: 0 15px 30px rgba(215, 109, 196, 0.627);
  cursor: pointer;
}
</style>