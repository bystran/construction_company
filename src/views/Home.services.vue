<template>
    <div class='services-section'>
        <icon icon="planet-wm" class="w-full fill-current stroke-current" id='planet-wm'></icon>
        <h1 class="section-number dark-blue-c">
            01
        </h1>
        <div class="centered-flex">
            <h2 class='underlined text-center'>Služby</h2>
        </div>
        <div class="services-container">
            <div v-for="(service, index) in services" v-bind:key="index" class='service-wrapper'>
                <service 
                    v-bind:heading='service.heading'
                    v-bind:icon='service.icon'
                    v-bind:text='service.text'
                >
                </service>

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
    #planet-wm{
        position:absolute;
        top:-80px;
        left:-150px;
        z-index: -10000;
        width:335px;
        height:335px;
    
        @include lg{
            width:670px;
            height:670px;
            top:-80px;
            left:-300px;
        }
        svg{
            width:100%;
            height:100%;
        }
    }
    .services-section{
        position: relative;
        background:url('/images/line_home.svg') no-repeat 160% -20%;
        
        padding-top:10%;
        padding-bottom:10%;
        @include lg{
            
            padding-top:2%;
            padding-bottom:30%;

        }
    }
    .centered-flex{
        display: flex;
        justify-content: center;
    }
    h1.section-number{
        margin-left:5%;
    }
    .service-wrapper{
        
        padding:25px 7%;
        flex-basis: 87%;
        flex-grow: 0;
        flex-shrink: 0;
        @include md{
            flex-basis: 445px;
            padding:25px 12px;
        }
        @include lg{
            margin-top:70px;
        }
    }
    .services-container{
        display: flex;
        flex-wrap: wrap;
        @include md{
            justify-content: center;
        }
    }
</style>
    

<script>
    import Icon from 'laravel-mix-vue-svgicon/IconComponent.vue';
    import Service from "../components/Service"; 
    export default {
        components:{Service, Icon},
        data(){
            return{
                services:[
                    {icon:'diamond',
                     heading:'Hello',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                     },
                    {icon:'diamond',
                     heading:'Hello',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                     },
                     {icon:'diamond',
                     heading:'Hello',
                     text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                     }
                ]
            }
        }
    }

</script>