<template>
    <div>
        <home v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'domov')"></home>
        <services v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'sluzby')"></services>
        <about v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'o-nas')"></about>
        <perks ></perks>
        <references v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'referencie')"></references>
        <reviews></reviews>
        <contact v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'kontakt')"></contact>
        <footer-cmp></footer-cmp>
    
    </div>
    
</template>

<script>
import Home          from "./Home.home"
import Services      from "./Home.services"
import About         from "./Home.about"
import Perks         from "./Home.perks"
import References    from "./Home.references"
import Reviews       from "./Home.reviews"
import Contact       from "./Home.contact"
import FooterCmp from '../components/Footer';
export default {
    components:{
        Home, 
        Services, 
        About, 
        Perks,
        References, 
        Reviews, 
        Contact,
        FooterCmp
    },
    methods:{
        visibilityChanged (isVisible, entry, path) {
            console.log(entry)
            this.$router.push({path:path})
        }
    }
        
}
</script>