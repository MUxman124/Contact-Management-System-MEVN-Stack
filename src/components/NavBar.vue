<template>
<div >
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
            <router-link to="/">
            <a class="navbar-brand">Contacts Manager</a>
             </router-link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link active">Home</a>
                    <a href="#" class="nav-item nav-link">Profile</a>
                </div>
                
                <div class="navbar-nav">
                    <RouterLink class="nav-link nav-item" to="/">
                        <h5>Add Contact</h5>
                    </RouterLink>
                    <RouterLink class="nav-link nav-item" to="view">
                        <h5>View Contacts</h5>
                    </RouterLink>

                    
                </div>
            </div>
        </div>
    </nav>
</div> 
</template>

<script>

    export default {
        data(){
            return{
                searchQuery:''
            }
        }
    }

</script>
