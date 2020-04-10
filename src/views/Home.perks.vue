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
                     text:'Postráme sa o všetky starosti, birokraciu, návrh, stavbu a riešenie problemov, aby ste vy nemuseli.'
                     },
                    {icon:Diamond,
                     heading:'Flexibilita',
                     text: 'Máte špecialne požiadavky? Nastavili sme naše procesi tak aby sme vyhoveli vašim novím požiadavkam.'
                     },
                     {icon:Diamond,
                     heading:'Priatelsky pristup',
                     text:'S úsmevom na tvári v každej situácii.'
                     },
                     {icon:Diamond,
                     heading:'Dôraz na kvalitu',
                     text:'Kvalita je u nás na prvom mieste. V každej fáze projektu dohliadame na to že všetko podlieha naším prísnim štandardom.'
                     },
                     {icon:Diamond,
                     heading:'Skúsenosti',
                     text: 'Máme vyše 10 rokov a 50+ úspešne dokončených projektov.'
                     },
                    {icon:Diamond,
                     heading:'Transparencia',
                     text:'Všetko bez starostí? To neznamená, že neviete ako je na tom vaša stavaba. Je pre nás dôležité aby ste mali úplný prehľad o vašej stavbe a preto poskytujeme naším zákazníkom časté update-y.'
                     },
                ]
            }
        }
    }

</script>