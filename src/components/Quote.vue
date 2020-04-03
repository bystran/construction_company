<template>
    <div class='quote-container'>
        <p>
            <span class="quotation-marks">""</span>

                {{text}}

            <span class="quotation-marks">""</span>

            
        </p>
        <p class="author">- {{author}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .quote-container{
        margin-bottom:2em;
        p{
            color:#051747;
            font-style: italic;
        }
        .quotation-marks{
            font-size: 2em;
            line-height: 1;
            color: #44A1E7;
        }
        .author{
            margin-top:-10px;
            font-weight: bold;
            color:#081F62;
        }
    }
</style>

<script>
export default {
    props:{
        author:String,
        text:String,
    }
}
</script>