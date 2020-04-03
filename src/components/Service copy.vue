<template>
<div class="banner">


    <div class="main-container">
        <div class=row>
            <icon :icon="icon" class='icon'></icon>
            <h3>{{heading}}</h3>
        </div>

        <p>{{text}}</p>
    </div>


</div>
</template>

<style lang="scss" >
    .banner{
        .row{
            display: flexbox;
            padding-bottom:10px;
        }
        .main-container{
            background: rgb(78,78,78);
            background: linear-gradient(180deg, rgba(78,78,78,1) 0%, rgba(72,83,100,1) 35%, rgba(79,106,149,1) 100%);
            color:white;
            padding: 30px 40px;
            border-radius: 20px;
            box-shadow: 3px 5px 10px 0px rgba(120,139,171,1);
            
        }
        .icon{
            display: inline;
            div{
                display:inline;
                svg{
                    height: 34px;
                    fill: white;
                    padding-left: 10px
                }
            }
        }
        h3{
            display: inline;
            font-size: 1.95em;
            margin-top: 5px;
            padding-left:10px;
        }
        p{
            color:rgba(255,255,255,0.9);
        }


    }
</style>

<script>
    import Icon from 'laravel-mix-vue-svgicon/IconComponent.vue';
    export default {
        

        
        components:{Icon},
        props:{ 
            heading:String,
            text:String,
            icon:String,
        }

        
    }
</script>