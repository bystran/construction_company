<template>
    <div class="flex-center position-ref full-height bg-ba" id='home'>
        <div class="content-main-page">
            <!-- <h2>Kompletné riešenia stavby.</h2> -->
            <h1>Vaša budúca stavba bez starostí.</h1>
            <h3>Odbremeníme Vás od administratívy a zároveň Vás vždy informujeme o aktuálnom dianí a pokročení vo výstavbe.</h3>
            <a href="#contact" v-smooth-scroll class="btn btn-primary">Napíšte nám</a> 
            <a href="#services" v-smooth-scroll class="btn btn-secondary">Zistite viacej</a> 
        </div>
    <!-- <icon icon="down-icon-box" class="w-full fill-current stroke-current" id='downIcon'></icon>  -->
    </div>
    
</template>

    <style lang='scss'>

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

.full-height {
    height: 100vh;
}
.flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
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
.content-main-page{
    position:absolute;
    padding: 0px 5%;
    top:35%;
    color: #fff;
    @include rwd(1600){
        padding:0px 15%;
    }

    @include rwd(1800){
        padding:0px 20%;
    }
    @include sm{
        h1{
            font-size:35px;
        }
    }
    .btn{
        margin-top:20px;
        display:inline-block;
    }

    h1{
        font-family: "Titillium Web";
        font-weight: bold;
        font-size:30px;
        // font-size: 79px;
        text-align: left;
        
        margin:0px;
        margin-top:-40px;


    }
    h2{
        font-size:18px;
        text-align: left;
        font-weight: normal;
        
    }
    h3{
        font-size:15px;
        text-align: left;
        font-weight: normal;
        opacity:0.90;
    }
    a{
        margin-top:.5em;
    }
    @include md{
        h1{
            font-size:500px;
        }

    }
    @include lg{
        h1{
            font-size:72px;
        }
        h2{
            font-size:32px;
            height: 10px;
            margin-top:5px;
            font-weight: normal;

        }
    }

}


</style>

