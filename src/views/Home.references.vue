<template>
    <div class='reference-container '>
        <h1 class="section-number dark-blue-c">
                04
        </h1>
        <div class="x-centered">
            <h2 class='underlined text-center'>Referencie</h2>
        </div>
        <div class="container">
         
            <div v-for="(reference, index) in references" v-bind:key="index" class='reference-wrp'>
            
                <div class="reference-img"  v-bind:style="{ backgroundImage: 'url(' + reference.img + ')' }">
                    <div class="img-label"> <p>{{reference.heading}}</p></div>
                </div>
 
            </div>
            
        </div>
    </div>
</template>

<style lang='scss' scoped>
    // Small tablets and large smartphones (landscape view)
    $screen-sm-min: 576px;

    // Small tablets (portrait view)
    $screen-md-min: 768px;

    // Tablets and small desktops
    $screen-lg-min: 992px;

    // Large tablets and desktops
    $screen-xl-min: 1200px;

    @mixin sm {
        @media (min-width: #{$screen-sm-min}) {
            @content;
        }
    }

    // Medium devices
    @mixin md {
        @media (min-width: #{$screen-md-min}) {
            @content;
        }
    }

    // Large devices
    @mixin lg {
        @media (min-width: #{$screen-lg-min}) {
            @content;
        }
    }

    // Extra large devices
    @mixin xl {
        @media (min-width: #{$screen-xl-min}) {
            @content;
        }
    }
    @mixin rwd($screen) {
        @media (min-width: $screen+'px') {
            @content;
        }
    }
    .reference-container{
        padding:0 7%;
    }
    .container{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        @include xl{
            width:1000px;
            margin:auto;
        }
        
    }
    .reference-img{

        padding-top:100%;
        width:100%;
        background-position: center;
        background-size: cover;

    }
    .reference-wrp{
        position:relative;
        border:1px solid transparent;
        padding:10px;
        flex-basis: 40%;
        flex-grow: 0;
        flex-shrink: 0;
        @include md{
            flex-basis:20%;
        }
    }
    .img-label{
        position:absolute;
        bottom:10px;
        left:10px;
        width:50%;
        background: white;
        color:#081F62;
        text-align: center;
        p{
            margin:5px;
            font-weight: bold;
            font-size:15px;
        }

    }
    
</style>
    

<script>

    export default {
        data(){
            return{
                references:[
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"},
                    {img:"/images/reference.jpg", heading:"Bla bla"}
                ]
            }
        }
    }

</script>