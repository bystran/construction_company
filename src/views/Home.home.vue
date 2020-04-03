<template>
    <div class="flex-center position-ref full-height bg-ba">
        <div class="content-main-page">
            <h1>Kompletné riešenia stavby.</h1>
            <h2>Manažment a konzultácia.</h2>

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

    h1{
        font-family: "Titillium Web";
        font-weight: 600;
        font-size:25px;
        // font-size: 79px;
        text-align: center;
        
        margin:0px;


    }
    h2{
        font-size:18px;
        text-align: right;
    }
    h3{
        font-size:1.2em;
    }
    a{
        margin-top:.5em;
    }
    @include md{
        h1{
            font-size:50px;
        }

    }
    @include lg{
        h1{
            font-size:79px;
        }
        h2{
            font-size:22px;
        }
    }

}


</style>

