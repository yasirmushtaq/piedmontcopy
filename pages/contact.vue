<template>
    <div class="container">
        <div class="contactUs flex">
            <h4>Contact Us</h4>
            <form @submit.prevent="onSubmit">            
                <label for="name">Name</label>
                <input type="text" v-model="name">
                <label for="email">Email Address</label>
                <input type="text" v-model="email">
                <label for="password">Password</label>
                <input type="text" v-model="password">
                <label for="repassword">Re-enter Password</label>
                <input type="text" v-model="repassword">
                <label for="phone">Phone Number</label>
                <input type="text" v-model="phone">
                <input type="submit" value="Submit" class="btn btn-primary">
            </form>
        </div>
        <div class="flex address">
            <h4>Piedmont Copy & Printing</h4>
            <p>4237 Piedmont Avuenue<br>
                Oakland, CA, 4237<br>
                Phone: 510-655-3030
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            repassword: null,
            phone: null
        }
    },
    methods: {
        onSubmit() {
            let contactData = {
                name: this.name,
                email: this.email,
                password: this.password,
                repassword: this.repassword,
                phone: this.phone
            }
            console.log(contactData)
            this.name = ''
            this.email = ''
            this.password = ''
            this.repassword = ''
            this.phone = ''
        } 
    }

}
</script>

<style scoped>
    .container {
        display: flex;
        margin-top: 40px;
    }
    .flex {
        flex: 4;
        padding: 15px;
    }
    .contactUs {
        border-right: solid 1px #ccc;        
    }
    input {
        margin-bottom: 15px;
    }
</style>