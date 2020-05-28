<template>
    <div>
        <home></home>
        <services></services>
        <about></about>
        <perks></perks>
        <!-- <references></references>
        <reviews></reviews> -->
        <contact></contact>
        <footer-cmp></footer-cmp>
    
    </div>
    
</template>

<script>
import Home          from "./Home.home"
import Services      from "./Home.services"
import About         from "./Home.about"
import Perks         from "./Home.perks"
// import References    from "./Home.references"
// import Reviews       from "./Home.reviews"
import Contact       from "./Home.contact"
import FooterCmp from '../components/Footer';
export default {
    components:{
        Home, 
        Services, 
        About, 
        Perks,
        // References, 
        // Reviews, 
        Contact,
        FooterCmp
    },
        
}
</script>