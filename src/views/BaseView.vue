<template>
    <div>
        <nav-bar></nav-bar>
        <main >
            <router-view></router-view>
        </main>

        <!-- <footer-cmp></footer-cmp> -->
    </div>
</template>
<script>
    import NavBar from '../components/NavBar';

    //import FooterCmp from '../components/Footer';

    export default {
        name: "base-view",
        components: {NavBar},
        data(){
            return {
                isLoggedIn : null,
                name : null
            }
        },
        mounted(){
            console.log('mounted');
            
            // this.isLoggedIn = localStorage.getItem('jwt')
            // this.name = localStorage.getItem('user')
        }
    }


</script>
    