<template>
    <div class='reviews-container' id='reviews'>
        <h1 class="section-number dark-blue-c">
            05
        </h1>
        <div class="x-centered">
            <h2 class='underlined text-center'>Recenzie</h2>
        </div>
        <div class='reviews-wrapper'>
         
            <div v-for="(review, index) in reviews" v-bind:key="index" class='review'>
                <quote
                    v-bind:author='review.author'
                    v-bind:text="review.text">
                </quote>

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
    .reviews-container{
        padding:3% 7%;
        padding-bottom:10%;
        
    }
    .section-number{
        width:88%;
        text-align:right;
        margin:0px;
        padding:0px;
        padding-right:12%;
    }
    .reviews-wrapper{
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        @include rwd(1000){
            width:950px;
            margin:auto;
        }

    }
    .review{
        @include sm{
            width:460px;
        }
    }
</style>
    

<script>
    import Quote from "../components/Quote" 
    export default {
        components:{Quote},
        data(){
            return{
                reviews:[
                    {author:'Jozko Mrkva', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam'},
                    {author:'Jozko Mrkva', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam'},
                    {author:'Jozko Mrkva', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam'},
                ]
            }
        }
    }

</script>