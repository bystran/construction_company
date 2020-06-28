<template>
<div class="banner" :style="{ backgroundImage: `url(../assets/images/${img})` }">


    <div class="main-container">
        <div class=row>
    
            <h3>{{heading}}</h3>
        </div>

        <p>{{text}}</p>
    </div>


</div>
</template>

<style lang="scss" >
    .banner{
        .row{
            display: flex;
            padding-bottom:10px;
        }
        .main-container{
            height:100%;
            padding: 30px 40px;
            background: #fff;
            box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.11);
            
            
        }
        h3{
            color:#001F60;
            font-weight: normal;
            line-height: .9em;
            margin: 10px 0px;
            display: inline;
            font-size: 1.85em;
            padding-left:10px;
            //border-left:3px solid #44A1E7;
        }
        p{
            color:#455678;

        }


    }
</style>

<script>

    export default {
        props:{ 
            heading:String,
            text:String,
            img:String,
        }

        
    }
</script>