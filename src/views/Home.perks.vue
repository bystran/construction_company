<template>
    <div class='perks-container '>
        <span class="watermark">
            Prečo? 
        </span>

        <div class="centered-h2">
            <h1 class="section-number dark-blue-c" id='perks'>
                03
            </h1>
        </div>
        <div class="lg-screen-wrp">
            
            <h2 class='underlined text-center padded-h2'>Prečo s nami?</h2>
            
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
        position: relative;
        .watermark{
            display:none;
            font-family: "Titillium Web";
            transition: font-size .5s;
            font-size:600px;
            white-space: nowrap;
            font-weight: bolder;
            opacity: .09;
            position: absolute;
            top:-80px;
            left:-150px;
            @include xl{
                display:inline;
            }
        }
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
        @include xl{
            padding-top:50px;
            height: 600px;
            flex-direction: column;
            height: 600px;
            align-items:flex-start;
            justify-content: initial;
            
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
    import Key from '../assets/svg/key.svg?ico'
    import SwissKnife from '../assets/svg/swiss_knife.svg?ico'
    import Zoom from '../assets/svg/seo-and-web.svg?ico'
    import Award from '../assets/svg/award.svg?ico'
    import Friendly from '../assets/svg/hands-and-gestures.svg?ico'; 
    export default {
        components:{Service},
        data(){
            return{
                services:[
                    {icon:Key,
                     heading:'Stavba na kľúč',
                     text:'Postaráme sa o všetko od projektu, cez rýchlu administratívu vďaka našim dlhoročným skúsenostiam, až po kolaudácu. – Vaša stavba pre Vás nebude starosťou.'
                     },
                    {icon:SwissKnife,
                     heading:'Flexibilita',
                     text: 'Máte špeciálne požiadavky?  Sme tu na to, aby sme  ich spoločne sprocesovali k Vašej spokojnosti.'
                    },
                     {icon:Friendly,
                     heading:'Priateľský prístup',
                     text:'S úsmevom na tvári v každej situácii. S nami Vás čaká vždy promptné riešenie a rýchla komunikácia počas celého trvania výstavby. Aktuálne  a vždy pravdivé informácie o dianí.' 
                     },
                     {icon:Diamond,
                     heading:'Dôraz na kvalitu',
                     text:'Kvalita je u nás na prvom mieste. V každej fáze dohľiadame na to,  aby každá časť projektu podliehala naším prísnym štandardom a Vašim predstavám.'
                     },
                     {icon:Award,
                     heading:'Skúsenosti',
                     text: 'Máme vyše 20 rokov skúseností , desiatky úspešne dokončených projektov a spokojných klientov'
                     },
                    {icon:Zoom,
                     heading:'Transparencia',
                     text:'Všetko bez starostí znamená, že vždy viete ako je na tom Vaša stavaba. Je pre nás dôležité, aby ste mali úplný prehľad o každej faze stavby  a preto poskytujeme naším zákazníkom časté a vždy aktuálne informácie. Máme za to, že len takýmto spôsobom a korektným jednaním je možné vystavať projekt tak, aby viedol k Vašej spokojnosti ba predčil Vaše očakávania.'
                     },
                ]
            }
        }
    }

</script>