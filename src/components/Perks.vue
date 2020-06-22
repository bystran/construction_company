<template>
<div class="banner-perks">


    <div class="main-container">
        <div class="row-wrp">
            <div class=row>
                <span class='icon'>
                    <div>
                        <component :is=icon></component>
                    </div>
                </span>

                <h3>{{heading}}</h3>
            </div>
        </div>

        <p>{{text}}</p>
    </div>


</div>
</template>

<style lang="scss" >
    .banner-perks{
        position: relative;
        .row-wrp{
            position:absolute;
            top:0;
            left:0;
            margin-top:-20px;
            
            .row{
                display: flexbox;
                padding-bottom:10px;
                padding-right:15px;
                background: white;
            }

        }

        .main-container{
            color:#051747;
   
            padding: 20px 33px;
            border-radius: 12px;
            border: 2px solid #081F62;
            background: white;
            
        }
        .icon{
            margin-left: -22px;
            width: 40px !important;
            overflow: hidden;
            padding-left: 10px;
            display: inline-block;
            div{
                display:inline;
                svg{
                    height: 34px;
                    fill: #44A1E7;
                    display: block;
                    width: 100%;

                }
            }
        }
        h3{
            display: inline;
            font-size: 1.9em;
  
            padding-left:10px;
        }
        p{
            color:#051747;
            font-size:.95em;
        }

    }
</style>

<script>
    //  import Icon from 'laravel-mix-vue-svgicon/IconComponent.vue';
    export default {
        

        
        // components:{Icon},
        props:{ 
            heading:String,
            text:String,
            icon:Object,
        },


        
    }
</script>