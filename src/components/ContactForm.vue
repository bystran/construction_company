<template>
    <div class='cf-wrp'>
        <form action="">
            <input type="text" placeholder="Meno a Priezvisko" v-model="name">
            <input type="tel" placeholder="Telefón" v-model="phone">
            <input type="email" placeholder="Email" v-model="email">
            <textarea placeholder="Vaša správa" v-model='msg'></textarea>
            <input type="submit" class='btn btn-primary' value="Odoslať">

        </form>
    </div>
</template>

<style lang="scss" scoped>
    .cf-wrp{
        input, textarea{
            font-family: "Titillium Web";
            font-size: 18px;
            width: 98% ;
            margin: 7px 0px;
            padding:8px 1%;
            border:none;
            color:#081F62;
            background: #fff;
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);

        }
        ::placeholder{
            color:#081F62;
        }
        input[type='submit']{
            width: 100px;
            margin:auto;
            
        }
        textarea{
            height: 150px;
            line-height: 15px;
        }

    }
</style>

<script>
export default {
    data(){
        return{
            name:'',
            phone:'',
            email:'',
            msg:'',
        }
    }
}
</script>