<template>
    <div class='asset-container'>
        <div class="bottom-box abs rounded"></div>
        <div class="middle-box abs rounded"></div>
        
        <div class="image-box abs rounded"></div>
    </div>
</template>
<style lang="scss" scoped>
    
    .rounded{
        border-radius: 7px;
    }
    .abs{
        top:0;
        position:absolute;
    }
    .asset-container{
        position:relative;
        width:100%;
        padding-top:80%;
        
    }
    .bottom-box{
        left:10%;
        margin-top:5%;
        width: 80%;
        padding-top:70%;
        background:  white;
        box-shadow: 3px 5px 10px 0px rgba(0,0,0,0.23);
    }
    .middle-box{
        left:15%;
        width:30%;
       
        background: #051747;
        padding-top:80%;
        box-shadow: 3px 5px 10px 0px rgba(0,0,0,0.23);
    }
    .image-box{
        width:100%;
        background:url(../assets/images/office.jpg);
        background-position: center;
        background-size: cover;
        margin-top:15%;
        padding-top:50%;
        box-shadow: 3px 5px 10px 0px rgba(0,0,0,0.23);
    }
</style>
<script>
export default {
    
}
</script>