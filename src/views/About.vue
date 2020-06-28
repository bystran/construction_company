<template>
  <div class="about">
    <div class="banner">
      <h1 class='dark-blue-c underlined '>O nás</h1>
    </div>
    <div class="text">
      <p class='larger margin-bottom'>
          Žijeme a dýchame stavebníctvom -  staviame „ s dušou“. Našim cieľom je Vám pomôcť premeniť Vašu vysnívanú stavbu v realitu. Už takmer dvadsať rokov spolupracujeme s talentovanými architektami a remeselníkmi na rôznych projektoch. Od návrhov a realizácií  kancelárskych priestorov, športových a relaxačných priestorov až po exkluzívne rezidenčne stavby. 
      </p>
      <h2>Individuálny prístup</h2>

      <p class='normal'>
          V SR WORLD vieme, že každá stavba a každý zákazník si vyžaduje individuálny prístup a preto všetky stavby vyhotovujeme tak, aby  realizácia viedla k dokonalej spokojnosti každého zákazníka.
      </p>
      <p class="normal">
        Či staviate nový dom, prerábate nehnuteľnosť alebo sa rozhodujete riešiť prístavbu, staviate nebytový alebo iný priestor, sme tu na to, aby ste sa s nami vždy mohli poradiť. Aby ste si pri odovzdávaní vyhotovenej stavby mohli povedať, že sa Váš sen stal skutočnosťou bez toho, aby Vám zobral všetok voľný čas.
      </p>
      <p class="normal mirgin-bottom">
        S nami zistíte, ako je pre Vás výstavba jednoduchá, pretože Vás odbremeníme od administratívy a zároveň Vás vždy informujeme o aktuálnom dianí a pokročení vo výstavbe. To je stavanie s dušou. 
      </p>
      <h2>Bratislava a Slovensko</h2>
      <p class='normal'>
          V SR WORLD staviame primárne v Bratislave a okolí  ale pôsobíme na celom Slovensku.
      </p>
      <div class="button-wrapper">
        <router-link href="#contact" class='btn btn-primary' to="/#contact">Napíšte náme</router-link>
      </div>

      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../variables';
  @import '../mixins';

  .about{
    position: relative;
    margin-top:-22px;
    h1{
      @include mq('phone'){
        font-size:40px;
      }
      @include mq('tablet'){
        font-size:50px;
      }
    }
    .banner{
        display: flex;
        padding-top:50px;
        justify-content: center;
        align-items: center;
        height: 200px;
        width:100%;
        background:url(../assets/images/office.jpg);
        background-position: center;
        background-size: cover;
        @include mq('tablet'){
          height:300px;
          padding-top:100px;
        }

    }
    .text{
      font-size:16px;
      padding:30px 20px;
      @include mq('tablet'){
        width:600px;
        margin:auto;
      } 
      @include mq('tablet-wide'){
        width:800px;
      }
      .larger{
        font-size:17px;
        font-weight: 600;
        opacity: 0.7;
      }
      .margin-bottom{
        margin-bottom:60px;
      }
      .btn-blue{
        color:$light_blue !important;
        border-color: $light_blue;
      }
      .button-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        padding:40px 0px;

      }
    }

  }
</style>
