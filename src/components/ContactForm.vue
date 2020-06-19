<template>
    <div class='cf-wrp'>
        <form @submit="handleSubmit" @keydown.enter="handleSubmit">
            <div 
            class="form-group" 
            :class="{ 'form-group--error': $v.contactForm.firstName.$error, 'active':active.firstName, 'hasValue':$v.contactForm.firstName.$model }"            
            >
                <label>Meno</label>
                <input 
                type="text" 
                v-model.trim="$v.contactForm.firstName.$model"
                @focus="active.firstName = true"
                @blur="active.firstName = false"
                @input="delayTouch($v.contactForm.firstName)"
                >
                <div class="error" v-if="backend_errors.first_name">{{ backend_errors.first_name }}</div>
                <div v-if="$v.contactForm.firstName.$error">
                    <div class="error" v-if="!$v.contactForm.firstName.required">Meno je povinné.</div>
                    <div class="error" v-if="!$v.contactForm.firstName.minLength">Meno musí pozostávať z aspoň {{ $v.contactForm.firstName.$params.minLength.min }} písmen.</div>
                    <div class="error" v-if="!$v.contactForm.firstName.maxLength">Meno može pozostávať z maximálne {{ $v.contactForm.firstName.$params.minLength.min }} písmen.</div>
                </div>
                
            </div>
            <div 
            class="form-group" 
            :class="{ 'form-group--error': $v.contactForm.lastName.$error, 'active':active.lastName, 'hasValue':$v.contactForm.lastName.$model }"            
            >
                <label>Priezvisko</label>
                <input 
                type="text" 
                v-model.trim="$v.contactForm.lastName.$model"
                @focus="active.lastName = true"
                @blur="active.lastName = false"
                @input="delayTouch($v.contactForm.lastName)"
                >
                <div class="error" v-if="backend_errors.last_name">{{ backend_errors.last_name }}</div>
                 <div v-if="$v.contactForm.lastName.$error">
                    <div class="error" v-if="!$v.contactForm.lastName.required">Priezvisko je povinné.</div>
                    <div class="error" v-if="!$v.contactForm.lastName.minLength">Meno musí pozostávať z aspoň {{ $v.contactForm.lastName.$params.minLength.min }} písmen.</div>
                    <div class="error" v-if="!$v.contactForm.lastName.maxLength">Meno može pozostávať z maximálne {{ $v.contactForm.lastName.$params.minLength.min }} písmen.</div>
                 </div>
            </div>
            <div 
            class="form-group extra-margin" 
            :class="{ 'form-group--error': $v.contactForm.email.$error, 'active':active.email, 'hasValue':$v.contactForm.email.$model }"            
            >
                <label>Email</label>
                <input 
                type="text" 
                v-model.trim="$v.contactForm.email.$model"
                @focus="active.email = true"
                @blur="active.email = false"
                @input="delayTouch($v.contactForm.email)"
                >
                <div class="error" v-if="backend_errors.email_name">{{ backend_errors.email_name }}</div>
                <div v-if="$v.contactForm.email.$error">
                    <div class="error" v-if="!$v.contactForm.email.required">Email je povinný.</div>
                    <div class="error" v-if="!$v.contactForm.email.email">Nesprávny e-mail.</div>
                </div>
            </div>
            <div 
            class="form-group" 
            :class="{ 'form-group--error': $v.contactForm.message.$error, 'active':active.message, 'hasValue':$v.contactForm.message.$model }"            
            >
                <label>Správa</label>
                <textarea
                type="text" 
                v-model.trim="$v.contactForm.message.$model"
                @focus="active.message = true"
                @blur="active.message = false"
                @input="delayTouch($v.contactForm.message)"
                ></textarea>
                <div class="error" v-if="backend_errors.message">{{ backend_errors.message }}</div>
                <div v-if="$v.contactForm.message.$error">
                    <div class="error" v-if="!$v.contactForm.message.required">Správa je povinná.</div>
                    <div class="error" v-if="!$v.contactForm.message.minLength">Správa musí pozostávať z aspoň {{ $v.contactForm.message.$params.minLength.min }} písmen.</div>
                    <div class="error" v-if="!$v.contactForm.message.maxLength">Správa može pozostávať z maximálne {{ $v.contactForm.message.$params.minLength.min }} písmen.</div>
                </div>
            </div>
            <VueLoadingButton 
            type="submit" 
            aria-label='Odoslať' 
            class='btn btn-primary' 
            :class="{'shake-horizontal shake-constant': button.failed}"
            :loading="button.is_loading"
            />

        </form>
    </div>
</template>

<style lang="scss" scoped>
    .cf-wrp{
        width:100%;
        .extra-margin{
            margin:30px 0px;
        }
        .error{
            font-size:12px;
            color:#ff0033;
            padding-left:5px;
        }
        .failed{
            background-color:#ff0033 !important;
        }
        label{
            color:#081F62;
            font-family: "Titillium Web";
            font-size: 16px;
            transition: .2s top, .2s font-size;
        }
        .form-group{
            margin-top:20px;
            position: relative;
            label{
                top:17px;
                left:10px;
                position: absolute;
                
            }
            &.hasValue, &.active{
                label{
                    top:3px;
                    font-size:12px;
                }
            }
            &.active{
                input, textarea{
                    border: 1.2px solid black;
                    border-radius: 3px;

                }
            }
            &.form-group--error{
                input, textarea{
                    border: 1.2px solid #ff0033;
                    color:#ff0033;
                    border-radius: 3px;
                }
                label{
                    color:#ff0033;
                }

            }
        }
        input, textarea{
            font-family: "Titillium Web";
            font-size: 16px;
            width: 98% ;
            margin: 2px 0px;
            padding:14px 10px;
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
            
        }
        textarea{
            height: 150px;
            line-height: 25px;
        }
        button{
            border:none;
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);
            font-size:18px;
            margin:25px 0px;
            margin-top:40px;
            width: 170px;
        }

    }
</style>

<script>
import { required, email, minLength, maxLength } from "vuelidate/lib/validators";
import {sendForm} from '../services/formService'
import VueLoadingButton from 'vue-loading-button';

const touchMap = new WeakMap()

export default {
    components:{
        VueLoadingButton,
    },
    data(){
        return{
            contactForm:{
                firstName:'',
                lastName:'',
                email:'',
                message:'',
            },
            active:{
                firstName:false,
                lastName:false,
                email:false,
                message:false,
            },
            backend_errors:{
                first_name:null,
                last_name:null, 
                email:null,
                message:null
            },
            button:{
                is_loading:false,
                failed:false,
            }
        }
    },
    validations:{
        contactForm:{
            firstName:{
                required,
                minLength:minLength(2),
                maxLength:maxLength(50)
            },
            lastName:{
                required,
                minLength:minLength(2),
                maxLength:maxLength(50),
            },
            email:{
                required,
                email
            },
            message:{
                required,
                minLength:minLength(10),
                maxLength:maxLength(1000),
            }
        }
    },
    methods:{
        delayTouch($v) {
            $v.$reset()
            if (touchMap.has($v)) {
                clearTimeout(touchMap.get($v))
            }
            touchMap.set($v, setTimeout($v.$touch, 1000))
        },
        handleSubmit: async function(e){
            e.preventDefault();
            this.$v.$touch()
            if(this.$v.$invalid){

                this.button.failed = true 
                setTimeout(()=>{
                    this.button.failed = false
                }, 500)

            }else{
                this.button.is_loading = true;
                const res = await sendForm({
                    first_name: this.$v.contactForm.firstName.$model,
                    last_name: this.$v.contactForm.lastName.$model,
                    email: this.$v.contactForm.email.$model,
                    message: this.$v.contactForm.message.$model,
                })
                this.button.is_loading = false
                if(res.success){
                    // do somthing here
                    this.$toasted.show("Správa bola spracovaná! Ďakujeme.", { 
                        theme: "toasted-primary", 
                        position: "top-center", 
                        duration : 5000
                    });
                    this.contactForm.firstName = ''
                    this.contactForm.lastName = ''
                    this.contactForm.email = ''
                    this.contactForm.message = ''
                    this.$v.$reset()

                }else{
                    this.backend_errors = res.errors;
                    if(res.network_error){
                        this.$toasted.show(res.network_error, { 
                            theme: "bubble", 
                            position: "top-center", 
                            duration : 5000
                        });

                    }else{
                        this.backend_errors = res.errors;
                        this.button.failed = true 
                        setTimeout(()=>{
                            this.button.failed = false
                        }, 500)
                    }

                }
            }
            
        },

    }
}
</script>