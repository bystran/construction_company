<template>
    <div>
        <home></home>
        <services></services>
        <about></about>
        <perks></perks>
        <!-- <references></references>
        <reviews></reviews> -->
        <contact></contact>
    
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
export default {
    components:{
        Home, 
        Services, 
        About, 
        Perks,
        // References, 
        // Reviews, 
        Contact,
    },
    methods:{
        visibilityChanged (isVisible, entry, path) {
            console.log(entry)
            this.$router.push({path:path})
        }
    }
        
}
</script>