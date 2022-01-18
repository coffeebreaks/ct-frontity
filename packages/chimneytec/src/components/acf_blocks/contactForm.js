import {useState} from "react"
import {Input, InputLines, InputWrapper, Headline, SectionWrapper} from "./styledComponents"
import {styled} from "frontity"
import axios from "axios"
const ContactForm = () => {

    const [formResp, setFormResp] = useState("")
    const [display, showForm] = useState(true)

    const Wrapper = styled.div`
    display: ${display? "block": "none"};
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
    `
    const Button = styled.button`
    background: #1b4ea4;
    color: white;
    padding: 1rem;
    outline: none;
    border: none;
    margin-left: 1rem;
    min-width: 200px;
}
    `
    function sendMail(e){
        e.preventDefault()
     
        let data = new FormData()

        data.set("your-subject", "Förfrågan från Chimneytec.se")
        data.set("your-name", e.target.name.value)
        data.set("your-email", e.target.email.value)
        data.set("your-message", e.target.message.value)

        axios.post(
            `https://vlogtog.webbdesign.org/wp-json/contact-form-7/v1/contact-forms/71/feedback`,
            data,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
            ) 
            .then(response => {
                setFormResp(response.data.message)
                response.data.status === "mail_sent"? showForm(false): showForm(true)
                console.log(response.data.status)
            }
                )
           
    }
    const FromResponse = styled.p`
    display: ${formResp === ""? "none": "block"};
    background: #00000061;
    padding: 1rem;
    `
    return (
        <>
            <Wrapper>
            
                <Headline>
                    <h2>Kontakta oss</h2> 
                    <p> Lämna dina kontaktuppgifter så hör vi av oss till dig </p>
                </Headline>

                <form onSubmit={sendMail}>
                    <Input type="text" name="name" required placeholder="Ditt Namn"/>
                    <Input type="tel" name="tel" required placeholder="Ditt telefonnummer"/>
                    <Input type="email" name="email" required placeholder="Din e-post"/>
                    <InputLines name="message" placeholder="Din fråga"></InputLines>
                    <Button type="submit">Kontakta oss</Button> 
                </form>
            
            </Wrapper>
            <FromResponse>{formResp}</FromResponse>
        </>
    )
}

export default ContactForm