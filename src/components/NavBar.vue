<template>
    <div>
        <nav class="navbar" v-bind:class="[ isUp ? 'invisible' : '', !isAtTop ? 'displaced': '']">
                <div class="container">
                    <router-link :to="{name: 'home'}" class="navbar-brand" id='logo'>
                        <Logo/>
                    </router-link>
                    <button class="navbar-toggler" type="button" v-on:click="toggleNav">
                        <tasty-burger-button type="spin" color="#fff" />
                    </button>

                    <div class="hidden-nav" v-bind:class="{ toggled : isToggled}">
                        <ul class=''>
                            <li >Domov</li>
                            <li >Služby</li>
                            <li >O nás</li>
                            <li >Referencie</li>
                            <li > <a href="" class="btn btn-primary">Napíšte nám</a> </li>
                        </ul>

                    </div>
                </div>
            </nav>
    </div>
</template>

<script>

import Logo from '../assets/svg/logo.svg?ico'
import {TastyBurgerButton} from 'vue-tasty-burgers'
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css'

export default {
    data(){
        return{

            isToggled: undefined,
            prevScrollpos:undefined,
            isUp: undefined,
            isAtTop: undefined,
        };
    },
    components:{ Logo,
    'tasty-burger-button': TastyBurgerButton
     },
     methods:{
         toggleNav(){
             this.isToggled = !this.isToggled;
         },
         hideNavOnScroll(){
            var currentScrollPos = window.pageYOffset;
            if (this.prevScrollpos > currentScrollPos) {
                this.isUp=false;
         
            } else {
                this.isUp=true;
                
                
            }
            console.log(this.isUp);
            this.prevScrollpos = currentScrollPos;  
         },
         stickNavOnInitialDown(){
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                this.isAtTop = false;
            } else {
                this.isAtTop = true;
            }

         }
         ,scrollFunctions(){
             this.hideNavOnScroll(); 
             this.stickNavOnInitialDown();
         }
     },
     mounted() {
        this.isToggled = false; 
        this.isUp = false; 
        this.stickNavOnInitialDown();
        this.prevScrollpos = window.pageYOffset;
        console.log(this.isToggled); 
        window.onscroll = this.scrollFunctions; 

     },
}

</script>

<style lang="scss" >
    @import '../mixins';    
    $nav_height_mobile : 55px;
    $nav_height_lg : 65px;
    $grey: #4E4E4E;  
    .navbar-toggler{
        background:none !important;
    }
    .invisible{
        top:-80px !important;
        @include md{
            top:-100px !important;
        }
    }

    .navbar.displaced{
        background:white;
        border-bottom:.5px solid rgba(83,95,128,.5);
        color:black;
        position:fixed;
        padding-top:5px;
        top:0px;
        #logo{
            svg{
                height: $nav_height_mobile;
                width:200px;
                g path{
                    fill:#081F62 !important;
                }
                path{
                    fill:transparent;
                }
                text{
                    font-family: ansonregular;
                    fill:#081F62;
                }
                @include lg{
                    height:$nav_height_lg;
                }
                
    
                
            }
        }


        .hidden-nav{
            ul{
                li{
                    @include md{
                        color:#081f62;
                    }
                }
            }
        }
        .hamburger-box{
            span{
                background: #081F62 !important;
            }
        }
        
    }
    .navbar{
        transition: top .5s, background .5s;
        position: fixed;
        top:0px;
        width: 95%;
        z-index: 10000;
        padding:5px 2.5%;

        .container{
            width:100%;
            display:flex;
            justify-content: space-between;
            @include md{
                
                justify-content: space-around;
            }
            
        }

    }

    #logo{
        svg{
            height: $nav_height_mobile;
            width:200px;

            g path{
                fill:white !important;
            }
            path{
                fill:transparent;
            }
            text{
                font-family: ansonregular;
                fill:white;
            }
            @include lg{
                height:100px;
                width:250px;
            }
 
            
        }
    }
    .navbar-toggler{
        border: none;
        @include md{
            display:none;
        }
    }
    .nav-item{
        padding: 10px;
        font-size:1.3em;

        .btn.btn-primary{
            margin-top:-8px;
        }
    }
    .hidden-nav{
        position:fixed;
        top:0;
        right:0;
        width: 0%;
        height: 100vh;
        text-align:center;
        padding-top:$nav_height_mobile;
        background:rgba(255, 255, 255, 0.95);
        z-index: 1040;
        transition: width .5s ease;
        text-overflow: clip;
        white-space: nowrap;
        ul{
            list-style: none;
            margin:0;
            padding:0;
        }
        li{
            font-size:1.2em;
            padding:7px;
        }
        @include md{
            position:relative;
            width:auto;
            height: auto;
            padding:0px;
            background:none;
            display:flex;
            align-items: center;
            color:white;
            
            ul{
                float:left;
                height:50px;
            }
            li{
                font-size:.95em;
                float:left;
                .btn-primary{
                    margin-top:-7px;
                    padding: 8px 15px;
                }
            }
            
        
        }
        @include lg{
            li{
                padding:14px;
            }
        }

    }
    .navbar-toggler{
        z-index: 1050;
    }
    .hidden-nav.toggled{ 
        width:90%;
    }
    
    
</style>
