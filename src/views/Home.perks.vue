<template>
    <div class='perks-container '>
        <div class="centered-h2">
            <h1 class="section-number dark-blue-c">
                03
            </h1>
        </div>
        <div class="lg-screen-wrp">
            
            <h2 class='underlined text-center padded-h2'>Prečo Sr World?</h2>
            
            <div class="perks-wrapper">

                <div v-for="(service, index) in services" v-bind:key="index" class='perk-item'>
                    <service 
                        v-bind:heading='service.heading'
                        v-bind:icon='service.icon'
                        v-bind:text='service.text'
                    >
                    </service>

                </div>
            </div>

        </div>
        
    </div>
</template>

<style lang='scss'>
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
    .padded-h2{
        @include rwd(1162){
            padding:50px 10px;
        }
    }
    .lg-screen-wrp{
        @include rwd(1162){
            width:1000px;
            margin:auto;
        }
    }
    .perks-container{
        padding:10% 7%;
        color:#051747;
    }
    .centered-h2{
        display:flex;
        width: 100%;
        justify-content: center;
        h1{
            margin:0px !important;
        }
    }
    .perks-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @include lg{
            padding-top:50px;
        }

    }
    .perk-item{
        padding: 20px 0px;
        @include md{
            width:290px;
            padding: 20px 20px;
        } 
    }

</style>
    

<script>
    import Service from "../components/Perks"; 
    import Diamond from "../assets/svg/diamond.svg?ico"
    export default {
        components:{Service},
        data(){
            return{
                services:[
                    {icon:Diamond,
                     heading:'Stavba na kluc',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                     },
                    {icon:Diamond,
                     heading:'Flexibilita',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                     },
                     {icon:Diamond,
                     heading:'Priatelsky pristup',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                     },
                     {icon:Diamond,
                     heading:'Dôraz na kvalitu',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                     },
                     {icon:Diamond,
                     heading:'Skúsenosti',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                     },
                    {icon:Diamond,
                     heading:'Transparencia',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                     },
                ]
            }
        }
    }

</script>