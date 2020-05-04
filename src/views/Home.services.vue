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
            <div v-for="(service, index) in services" v-bind:key="index" class='service-wrapper' v-bind:class='[index != 1 ? "smaller":"larger"]'>
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
        @include md{
            &.smaller{
             padding:25px 20%;
            }
        }
        @include lg{
            padding:0px !important;
            flex-basis: 300px;
            &.larger{
                height: 550px;
            }
            &.smaller{
                height: 400px;
            }
            .banner{
                height: 100%;
            }

        }
        @include xl{
            flex-basis: 350px;
            &.larger{
                height: 430px;
            }
            &.smaller{
                height: 350px;
            }
        }

    }
    .services-container{
        @include lg{
            display: flex;
            width:1000px;
            height: fit-content;
            align-items: center;
            margin:auto;
            justify-content: space-evenly;
        }

        @include xl{
            width: 1200px;
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
                     text:'Ponúkame Vám naše dlhoročné skúsenosti a know-how v oblasti dizajnu a stavebníctva. Pristupujeme ku každému projektu tak, aby sme spoločne našli ideálne riešenie, k čomu prispejeme našimi skúsenosťami a odborným poradenstvom.'
                     },
                     {icon:'diamond',
                     heading:'Projektovanie',
                     text:"Pomôžeme vám premeniť Vašu ideu v realitu. Spolu s našim dizajnérmi a overenými architektmi Vám vypracujeme riešenie na mieru a to pre akokoľvek náročné aj nenáročné stavby. Vypracujeme pre Vás projektovú dokumentáciu rôznych druhov pozemných stavieb ako rodinné domy, bytové domy, nebytové stavby, priemyselné stavby a iné. Ukážeme Vám, ako sa dá vniesť duša do Vášho nového domu. Zrekonštruujeme Vašu ambulanciu, predajňu, salón či byt."
                    
                     },
                     {icon:'diamond',
                      heading:'Sprostredkovanie',
                      text:"V SR WORLD sa postaráme o všetko. Zaručíme Vám rýchle a efektívne riešenie Vašej stavby. Od analýzy Vašej počiatočnej predstavy a administratívy, cez prvú položenú tehlu, až po kolaudáciu a doriešenie všetkých drobností. Všetko transparentne a bez starostí teda vyriešite pod jednou strechou s našimi dlhoročnými kontaktmi."
                    },
                ]
            }
        }
    }

</script>