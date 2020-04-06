<template>
    <div class=' contact-section'>
        <div class='contact-form-wrp'>
            <div class="x-centered">

                <h2 class='underlined'> Napíšte nám.</h2>
            </div>
            <contact-form class=''></contact-form>
        </div>
        <div class="contact-info-wrp">
            <div class="">
                <div class="x-centered">
                    <h2 class="underlined">
                        Kontaktné údaje 
                    </h2>

                </div>
                <div class="x-centered">
                    <ul class='contact-info'>
                        <li>
                            <!-- <icon icon="telephone"></icon> -->
                            0903 267 726
                        </li>
                        <li>
                            <!-- <icon icon="envelope"></icon> -->
                            info@srworld.sk
                        </li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div class="x-centered">
                    <h2 class="underlined">
                        Fakturačné údaje 
                    </h2>

                </div>
                <div class="x-centered">
                    <ul class='contact-info pt-3'>
                        <li>
                            <b>IČO</b>
                            36 829 447
                        </li>
                        <li>
                            <b>IČ DPH</b>
                            SK2022440101
                        </li>
                        <li>
                            <!-- <icon icon="placeholder" class="w-full fill-current stroke-current"></icon> -->
                            Jašíkova 3151/15
                        </li>
                        <li>
                            <span class="margin-left">821 03 Bratislava</span>
                        </li>
                    </ul>
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
    .contact-section{
        display: flex;
        
        background:#E7E9F0;
        justify-content: center;
        flex-wrap: wrap;
        @include md{
            flex-flow: row-reverse;
            justify-content: space-around;
            padding: 5% 0px;

        }
        

    }
    .contact-form-wrp{
        padding:1% 7%;
        @include md{
            width:50%;
            
        }
        h2.underlined{
            font-size:2.1em;
            padding:8px;
        }
    }
    .contact-info-wrp{
        
        h2.underlined{
            font-size:2.1em;
            padding:8px;
        }
        @include md{
            width:50%;
        }
    }
    ul.contact-info{
        list-style: none;
        padding:0px;
        li{
            padding:3px;
            color:#535F80;
            font-size:1.2em;
            svg{
                height:20px;
                padding-right: 3px;
                path{
                    fill:#535F80;
                }
            }
            div{
                display: inline;
            }
            .margin-left{
                margin-left:30px
            }
        }


    }

    
</style>
    

<script>       

    //import Icon from 'laravel-mix-vue-svgicon/IconComponent.vue';
    import ContactForm from "../components/ContactForm"
    export default {
        components:{ContactForm},

    }

</script>