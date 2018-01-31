<template>
    <div>
        <label>Email <input type="email" v-model="email"></label>
        <label>Password <input type="password" v-model="password"></label>
        <button @click="login">Login</button>
        <span v-if="error">{{error}}</span>
    </div>
</template>

<script>
    import {auth} from './firebase'

    export default {
        data: () => ({
            email: '',
            password: '',
            error: ''
        }),
        methods: {
            login() {
                auth.signInWithEmailAndPassword(this.email, this.password)
                    .then(this.$router.push('home'))
                    .catch(() => this.error = 'Что-то не то')
            } 
        }
    }
</script>
