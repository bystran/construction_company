<template>
    <div>
        <nav-bar></nav-bar>
        <main >
            <router-view ></router-view>
        </main>

        <footer-cmp></footer-cmp>
        <cookie-law theme="dark-lime" button-text="Rozumiem!">
            <div slot='message'>
                Používaním tejto stránky súhlasíte s používaním cookies. Táto stránka spracováva cookies pre analýzu návštevnosti.
            </div>
        </cookie-law>
    </div>
</template>
<script>
    import NavBar from '../components/NavBar';

    import FooterCmp from '../components/Footer';
    import CookieLaw from 'vue-cookie-law';

    export default {
        name: "base-view",
        components: {NavBar, FooterCmp, CookieLaw},
        data(){
            return {
                isLoggedIn : null,
                name : null
            }
        },

    }


</script>

    