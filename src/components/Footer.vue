<template>
    <footer class='footer'>
        <div class="small-hidden">
            <ul class="footer-nav">
                                            <li ><a href="#home" v-smooth-scroll>Domov</a></li>
                            <li > <a href="#services" v-smooth-scroll>Služby</a></li>
                            <li > <a href="#about" v-smooth-scroll>O nás</a></li>
                            <li> <a href="#gallery" v-smooth-scroll>Referencie</a></li>
                            <li > <a href="#contact" v-smooth-scroll>Napíšte nám</a> </li>
            </ul>

            <hr class=''>
        </div>
       
        <div class="x-centered">
            <h2 class="">
                Kontaktné údaje 
            </h2>
        </div>
        <div class="x-centered">
            <ul class='footer-contact-ul'>
                <li>
                    <span>
                        <div>
                             <Telephone />
                        </div>
                    </span>
                    <span>
                        {{ contact.phone_number }}
                    </span>
                </li>
                <li>
                    <span>
                        <div>
                            <Envelope />
                        </div>
                    </span>
                        {{contact.email}}
                </li>
            </ul>
        </div>
        <ul class="icons">
            <li class="">
                <span>
                    <a v-bind:href="contact.social_media.facebook" alt="facebook">
                        <div>
                            <Fb />
                        </div>
                    </a>
                </span>
            </li>
            <li class="">
                <span>
                    <a v-bind:href="contact.social_media.instagram" alt="instagram">
                        <div>
                            <Instagram />
                        </div>
                    </a>
                </span>
            </li>
        </ul>
    </footer>
</template>

<style lang="scss">
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
    .footer{
        a{
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
        }
        
        padding:5% 7%;
        padding-bottom: 0px;
        background: #081F62;
        background: linear-gradient(
            0deg, rgba(83,95,128,0.58) .5px,
          rgba(0,0,0,0) 1px, rgba(0,0,0,0) 0), #081F62;
        background-size:auto 50px;
        color:#E7E9F0;
        .small-hidden{
            display:none;
            @include md{
                display: block;
            }
        }
        ul{
            list-style:none;
            padding:0px;
            margin:0px;
        }
        .footer-nav{
            font-size:1.2em;
            display:flex;
            width:100%;
            justify-content: center;
            li{
                padding:10px;
                @include lg{
                    padding:14px; 
                }
            }
            @include lg{
                font-size:1.4em;
                
            }
        }
        .footer-contact-ul{
            li{
                font-size:1.2em;

                svg{
                    padding-right: 7px;
                    transform: scale(.7) translateY(12px);
                    path{
                        fill:white;
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
        hr{
            color: rgba(231,233,240,.29);
            border-color:rgba(231,233,240,.29);
            background-color: rgba(231,233,240,.29);
            width:60%;
            @include lg{
                width:30%;
            }
            @include xl{
                width:25%;
            }

        }
        .icons{
            display:flex;
            justify-content: center;
            padding:30px 0px;
            li{
                width:35px;
                padding:10px;
            }
            span{
                div{
                    height: 35px;
                    width: 35px;
                    position: relative;
                }
            }
            svg{
                transform: scale(.8);
               
                    path{
                        fill:white;
                    }
            }

        }
    }

</style>

<script>
    import Envelope from '../assets/svg/envelope.svg?ico'
    import Telephone from '../assets/svg/telephone.svg?ico'
    import Fb from '../assets/svg/facebook.svg?ico'
    import Instagram from '../assets/svg/instagram.svg?ico'


    import contact from '../content/contact'
  

    export default {
        components:{Telephone, Envelope, Fb, Instagram},
        data(){
            return{
                contact:contact,
            }
        }

    }
</script>