<template>
    <div class='services-section'>
        <span id="planet-wm" class="w-full fill-current stroke-current">
            <div>
                 <PlanetWM class="w-full fill-current stroke-current" />
            </div>
        </span>
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
 @import '../mixins';
    #planet-wm{
        position:absolute;
        top:-80px;
        left:-150px;
        z-index: -10000;
        width:335px;
        height:335px;
    
        @include lg{

            top:-80px;
            left:-300px;
            width:670px;
            height:670px;
        }

    }
    .services-section{
        position: relative;
        background:url("../assets/images/line_home.svg?external")no-repeat 160% -20%;
        
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
            flex-basis: 350px;
            padding:25px 12px;
            .banner{
                height: 190px;
                font-size:14px;
            }
        }
        @include lg{
            margin-top:20px;
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
    import PlanetWM from  '../assets/svg/planet-wm.svg?ico';
    import Service from "../components/Service"; 
    export default {
        components:{Service, PlanetWM},
        data(){
            return{
                services:[

                    {icon:'diamond',
                     heading:'Poradenstvo',
                     text:'Radi sa s Vami podelíme o naše know-how v oblasti stavebníctva. Čo sa týka stavby, poradíme vám s každým problémom.'
                     },
                     {icon:'diamond',
                     heading:'Projektovanie',
                     text:'Pomôžeme vám premeniť vašu ideu v realitu. Spolu s našim dizajnérmi a overenými architektmi vám vypracujeme riešenie na mieru.'
                     },
                     {icon:'diamond',
                      heading:'Sprostredkovanie',
                      text:"Zaručíme rýchle a efektívne sprostredkovanie stavby. Postaráme sa o všetko;- Od vašej počiatočnej požiadavky, cez prvú položenu tehlu až po odovzdanie kľúču. Všetko transparentne a bez starosti."
                    },
                ]
            }
        }
    }

</script>