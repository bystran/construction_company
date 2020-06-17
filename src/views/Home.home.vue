<template>
    <div class=" position-ref full-height bg-ba" id='home'>
        <div class="content-main-page">
            <!-- <h2>Kompletné riešenia stavby.</h2> -->
            <h1>Vaša stavba bez starostí.</h1>
            <h3>Postavime Vašu vysnívanú stavbu a odbremeníme Vás od administratívy. Zároveň Vás vždy informujeme o aktuálnom dianí a pokročení vo výstavbe.</h3>
            <a href="#contact" v-smooth-scroll class="btn btn-primary">Napíšte nám</a> 
            <a href="#services" v-smooth-scroll class="btn btn-secondary">Zistite viacej</a> 
        </div>
    <!-- <icon icon="down-icon-box" class="w-full fill-current stroke-current" id='downIcon'></icon>  -->
    </div>
    
</template>

<style lang='scss'>
@import '../mixins';

    $grey: #4E4E4E;
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


.bg-ba{
    background: url( "../assets/images/ba_blue_tint.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    z-index: -50;
}
#downIcon{
    position:absolute;
    bottom:-41px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    svg{
        height:80px;
        
    }
}
#home{
    display:flex;
    justify-content: left;
    height: 100vh;
    @include mq("tablet", $portrait: true){
        height: 600px;
    }
    @include mq("tablet-wide", $portrait:true){
        height: 700px;
    }
    @include mq("desktop"){
        justify-content: center;
        align-items: center;
    }

}
.content-main-page{
    .btn{
        text-align: center;
    }
    .btn-primary{
        width: 120px;
        @include mq("desktop"){
            margin-left:-15px;
        }
    }
    .btn-secondary{
        margin-left:15px;
    }
    position:relative;
    padding: 0px 5%;
    padding-top: 200px;
    color: #fff;
    @include mq("phone"){
        padding-top:220px;
    }
    @include mq("phone-wide"){
        padding-top:130px;
        width:500px;
    }
    @include mq("tablet"){
        padding-top: 250px;
        padding-left: 7%;
    }
    @include mq("tablet", $portrait:true){
        padding-top:200px;
    }
    @include mq("tablet-wide"){
        width: 600px;
    }
    @include mq("tablet-wide", $portrait:true){
        padding-top:280px;
    }
    @include mq("desktop"){
        padding:0px;
        text-align: center;
    }
    @include mq("desktop-wide") {
        width: 700px; 
    }
    




    .btn{
        margin-top:20px;
        display:inline-block;
    }
    h1{
        font-family: "Titillium Web";
        font-weight: bold;
        font-size:36px;
        text-align: left;
        margin:0px;
        margin-top:-40px;
        @include mq("phone"){
            font-size: 40px;
        }
        @include mq("phone-wide"){
            font-size: 30px;
        }
        @include mq("tablet"){
            font-size:45px;
        }
        @include mq("tablet", $portrait: true){
            font-size:35px;
            text-align: center;
        }
        @include mq("tablet-wide"){
            font-size:50px;
        }
        @include mq("tablet-wide", $portrait:true){
            font-size:40px;
            text-align: left;
        }
        @include mq("desktop"){
            text-align: center;
        }

        @include mq("desktop-wide"){
            font-size: 60px;
        }

    }
    h2{
        font-size:18px;
        text-align: left;
        font-weight: normal;      
    }
    h3{
        font-size:16px;
        text-align: left;
        font-weight: normal;
        opacity:0.90;
        @include mq("desktop"){
            text-align: center;
        }
    }
    a{
        margin-top:.5em;
    }

}


</style>

