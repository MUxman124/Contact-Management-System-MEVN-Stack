<template>
  <NavBar />
  <div class="container">
    <h1 class="display-3 text-center text-info mt-4">
      <kbd class="px-2">{{ Contactss.length }}</kbd> Contacts
      <router-link to="/">
        <button
          type="submit"
          class="btn btn-success mt-3 p-3 rounded-0"
          @click="createContact"
          :class="{ hovering: isHovering }"
          @mouseover="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Add New <i class="bi bi-person-plus-fill"></i>
        </button>
      </router-link>
    </h1>
    <input
      type="text"
      class="form-control my-3"
      placeholder="Search Contacts "
      v-model="searchQuery"
    />
    <div class="row">
      <div v-for="contact in filteredItems" :key="contact._id" class="col-6">
        <div
          class="card mb-3"
          :class="{ hover: contact.isHover }"
          @mouseover="contact.isHover = true"
          @mouseleave="contact.isHover = false"
          style="max-width: 640px"
        >
          <div class="row g-1">
            <div class="col-md-4 d-flex align-items-center">
              <img
                v-if="contact.gender === 'male'"
                src="../assets/img_avatar.png"
                class="img-fluid rounded-circle ms-1"
                alt="..."
              />
              <img
                v-else
                src="../assets/img_avatar2.png"
                class="img-fluid rounded-circle ms-1"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title fw-bold">{{ contact.name }}</h3>
                <!-- <span class="card-title fw-bold">{{ nickname }}</span> -->
                <h6 class="card-text fw-bold">{{ contact.phone }}</h6>
                <h6 class="card-text">{{ contact.email }}</h6>
                <h6 class="card-text">{{ contact.address }}</h6>
                <p class="card-text">
                  <small class="text-muted">
                    Creted At: {{ contact.date }}</small
                  >
                </p>
                <!-- <router-link :to="{ name: 'edit', params: { id: contact._id }}" class="btn btn-primary">Edit</router-link> -->
                <router-link
                  :to="{ name: 'edit', params: { id: contact._id } }"
                >
                  <button
                    class="btn btn-success card-text m-1 float-end"
                    data-toggle="tooltip"
                    title=" Edit Contact"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                </router-link>
                <button
                  class="btn btn-danger card-text m-1 float-end"
                  @click="deleteContact(contact._id)"
                  data-toggle="tooltip"
                  title="Delete Contact"
                >
                  <i class="bi bi-trash3"></i>
                </button>
                <router-link
                  :to="{ name: 'viewCon', params: { id: contact._id } }"
                  class="btn btn-info card-text m-1 float-end"
                  data-toggle="tooltip"
                  title="View Contact"
                >
                  <i class="bi bi-binoculars"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
import { searchQuery } from "./NavBar.vue";

export default {
  components: {
    NavBar,
    searchQuery,
  },
  data() {
    return {
      Contactss: [],
      searchQuery: "",
      isHover: false,
      isHovering: false,
    };
  },
  created() {
    let apiURL = "http://localhost:5000/api";
    axios
      .get(apiURL)
      .then((response) => {
        this.Contactss = response.data.contacts;
        console.log("this is the result ", this.Contactss);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteContact(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#FF5F1F",
        cancelButtonColor: "#7D0552",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          let apiURL = `http://localhost:5000/api/delete/${id}`;
          axios
            .delete(apiURL)
            .then(() => {
              let index = this.Contactss.findIndex(
                (contact) => contact._id === id
              );
              this.Contactss.splice(index, 1);
            })
            .catch((error) => {
              console.log(error);
            });
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        } else {
          this.$swal("Cancelled", "Your contact is safe :)", "info");
        }
      });
    },
  },

  computed: {
    filteredItems() {
      return this.Contactss.filter((item) => {
        return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style>
.card-wrapper {
  width: 300px;
  transition: all 0.5s ease-in-out;
}

.card {
  transition: all 0.5s ease-in-out;
}

.card.hover {
  transform: scale(1.1);
  z-index: 1;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.btn {
  transition: all 0.5s ease-in-out;
}

.hovering {
  transform: scale(1.1);
  z-index: 1;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style>
