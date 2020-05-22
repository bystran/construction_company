<template>
    <div class='about-wrapper' id='about'>
        <h1 class="section-number light-blue-c">
            02
        </h1>
        <div class="about-content">
            <div class="about-image-wrp">
                <decorated-image></decorated-image>
            </div>
            <div class="about-text-wrp">
                <div class="centered-h2">
                    <h2 class='underlined '>O nás</h2>
                </div>
                <p class='larger'>
                    Žijeme a dýchame stavebníctvom -  staviame „ s dušou“. Našim cieľom je Vám pomôcť premeniť Vašu vysnívanú stavbu v realitu. Už takmer dvadsať rokov spolupracujeme s talentovanými architektami a remeselníkmi na rôznych projektoch. Od návrhov a realizácií  kancelárskych priestorov, športových a relaxačných priestorov až po exkluzívne rezidenčne stavby. 
                </p>
                <p class='normal'>
                    V SR WORLD vieme, že každá stavba a každý zákazník si vyžaduje individuálny prístup a preto všetky stavby vyhotovujeme tak, aby  realizácia viedla k dokonalej spokojnosti každého zákazníka. Či staviate nový dom, prerábate nehnuteľnosť alebo sa rozhodujete riešiť prístavbu, staviate nebytový alebo iný priestor, sme tu na to, aby ste sa s nami vždy mohli poradiť. Aby ste si pri odovzdávaní vyhotovenej stavby mohli povedať, že sa Váš sen stal skutočnosťou bez toho, aby Vám zobral všetok voľný čas. S nami zistíte, ako je pre Vás výstavba jednoduchá, pretože Vás odbremeníme od administratívy a zároveň Vás vždy informujeme o aktuálnom dianí a pokročení vo výstavbe. To je stavanie s dušou. 
                </p>
                <p class='normal'>
                    V SR WORLD staviame primárne v Bratislave a okolí  ale pôsobíme na celom Slovensku.
                </p>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
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
    .about-content{
        display: flex;
        flex-flow: column-reverse;
        @include lg{
            flex-flow:initial;
            justify-content: space-evenly;
            align-items:center;
            width:100%;
        }
    }
    .about-wrapper{
        padding:50px 30px;
        position:relative;
        background: #081F62;
        background: linear-gradient(
            0deg, rgba(83,95,128,0.58) .5px,
          rgba(0,0,0,0) 1px, rgba(0,0,0,0) 0), #081F62;
        background-size:auto 50px;
        color:#A1ACC5;
        h2{
            color: #F1F1F1 !important;
        }
        .centered-h2{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        @include md{
            padding: 100px 60px;
        }
        @include lg{
            padding:0px;
            height:110vh;
            display:flex;
            align-items:center;
        }
        
    }
    h1.section-number{
        position:absolute;
        top:-85px;
        right:50px;
        @include md{
            top:-150px;
        }
        @include lg{
            top:-180px;
            right:130px
        }

    }
    .about-image-wrp{
        width:90%;
        margin:auto;
        @include lg{
            width:40%;
            margin:0px;
        }
        @include xl{
            width:35%;
        }
    }
    .about-text-wrp{
        padding-bottom:50px;
        
        @include md{
            width:80%;
            margin:auto;
        }
        @include lg{
            width:500px;
            margin:0px;
            padding:0px;
        }

        p.larger{
           margin:0px; 
           font-size:20px;
           font-weight: bold;
           @include md{
               font-size:23px;
           }
           @include xl{
               font-size: 20px;
           }
        }
        p.normal{
            font-size:13px;
            font-weight: normal;
            @include md{
                font-size:15px;
            }
            @include xl{
                font-size:13px;
            }
        }
    }

</style>



<script>
import DecoratedImage from "../components/DecoratedImage";
export default {
    components:{DecoratedImage}

}
</script>