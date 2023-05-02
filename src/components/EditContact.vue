<template>
  <div>
    <NavBar />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card shadow-lg rounded-0">
            <div class="card-body">
              <h4 class="card-title justify-content-center">Update Contact</h4>
              <form @submit.prevent="updateContact">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Enter Name"
                    id="name"
                    v-model="Contacts.name"
                    required
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nick Name"
                    id="nickname"
                    v-model="Contacts.nickname"
                  
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    id="email"
                    v-model="Contacts.email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Phone"
                    id="phone"
                    v-model="Contacts.phone"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Address"
                    id="address"
                    v-model="Contacts.address"
                    required
                  />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="Contacts.gender"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="male"
                  />
                  <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="Contacts.gender"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="female"
                  />
                  <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
                <div>
                  <button type="submit" class="btn btn-warning mt-3 p-2 rounded-0 shadow-sm" > Update Contact  
                    <i class="bi bi-check2-square"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      Contacts: {}
    }
  },
  created() {
    console.log("the id is>>> ", this.$route)
    let apiURL = `http://localhost:5000/api/edit/${this.$route.params.id}`;
    axios
      .get(apiURL)
      .then(response => {
        this.Contacts = response.data.contact;
        console.log("aaaaaaaaaaaaaaaa gyaaaaaaaaaaaaaaaaaaaaaaaaaa", this.Contacts)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  },
  methods: {
    updateContact() {
      this.$swal({
   title: 'Are you sure?',
   text: 'You Are updating the Data',
   type: 'question',
   icon: 'question',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Yes, update it!',
   cancelButtonText: 'No, Keep it!'


 }).then((result) => {
   if (result.value) {
    let apiURL = `http://localhost:5000/api/update/${this.$route.params.id}`;
      axios
        .put(apiURL, this.Contacts)
        .then(response => {
          console.log(response)
          this.$router.push("/view");
        })
        .catch(error => {
          console.log(error)
        })

        this.$swal('Updated!','Your Data has been Updated.','success')
   }
   else {
     this.$swal('Cancelled','Your Data is safe :)','info')
     this.$router.push("/");
     
   }
 })
      
    }
  }
}
</script>
