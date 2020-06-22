import axios from 'axios'


const default_url = 'https://api.srworld.sk/mail'
const default_config = {
    timeout:4000,
}

export const sendForm = async (form, url=default_url, config = default_config) => {
    let data = {
        first_name : form.first_name,
        last_name  : form.last_name,
        email      : form.email,
        message    : form.message,
        "g-recaptcha-response": form["g-recaptcha-response"]   
    }
    console.log(data);

    try {
        const response = await axios.post(url, data, config)
        return response.data
    } catch (error) {
        console.log(error)
        if(error.response){

            return error.json()
        }else if(error.request){
            console.log(error.request)
            return {network_error:"Nepodarilo sa skontaktovať server."}
        }else{
            console.log(error.message)
            return {network_error:"Nepodarilo sa skontaktovať server."}     
        }
    }


}