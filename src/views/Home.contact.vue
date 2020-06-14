<template>
    <div class=' contact-section' id='contact'>
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
                            <span>
                                <div>
                                    <Telephone />
                                </div>
                            </span>
                            {{ contact.phone_number }}
                        </li>
                        <li>
                            <span>
                                <div>
                                    <Envelope />
                                </div>
                            </span>
                            {{ contact.email }}
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
                            {{ contact.company_info.ico }}
                        </li>
                        <li>
                            <b>IČ DPH</b>
                            {{ contact.company_info.icdph}}
                        </li>
                        <li>
                            <span class="w-full fill-current stroke-current" >
                                <div>
                                    <Placeholder/>
                                </div>
                            </span>
                            {{ contact.company_info.address.street }} {{ contact.company_info.address.num }}
                        </li>
                        <li>
                            <span class="margin-left">{{ contact.company_info.address.post_code }} {{ contact.company_info.address.city }}</span>
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
        width: 100%;
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
                transform: scale(.7) translateY(10px);
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

    import Placeholder from '../assets/svg/placeholder.svg?ico'
    import Envelope from '../assets/svg/envelope.svg?ico'
    import Telephone from '../assets/svg/telephone.svg?ico'
    import ContactForm from "../components/ContactForm"

    import contact from '../content/contact'

    export default {
        components:{ContactForm,
         Placeholder, Envelope, Telephone},
        data(){
            return{
                contact
            }
        }

    }

</script>