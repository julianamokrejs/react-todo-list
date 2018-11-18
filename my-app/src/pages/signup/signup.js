import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container';

// function Signup() {
//     return (
//         <Container>
//             <Form title='Signup' text='Cadastre-se'>
//                 <Form.Label htmlFor='name'>Nome</Form.Label>
//                 <Form.Input id='name' type='text' required/>
//                 <Form.Label htmlFor='email'>Email</Form.Label>
//                 <Form.Input id='email' type='email' required/>
//                 <Form.Label htmlFor='phone'>Telefone</Form.Label>
//                 <Form.Input id='phone' type='tel'/>
//                 <Form.Label htmlFor='password'>Password</Form.Label>
//                 <Form.Input id='password' type='password' minLength={6} required/>
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='/conta'>Criar uma conta</Form.Link>
//             </Form>
//         </Container>
//     )
// }

class Signup extends React.Component {
    constructor() {
        super()
        this.state = { disabled : true }
        this.email = React.createRef()
        this.password = React.createRef()
        this.name = React.createRef()
        this.phone = React.createRef()
    }

    onDisabledButton = () => {
        const inputEmail = this.email.current;
        const inputPassword = this.password.current;
        const inputName = this.name.current;
        const inputPhone = this.phone.current;
        

        if(inputEmail.hasError() || inputPassword.hasError() || inputName.hasError() || inputPhone.hasError()){
            this.setState({ disabled : true })
        } else {
            this.setState({ disabled : false })
        }
    }
render() {
    return (
        <Container>
             <Form title='Signup' text='Cadastre-se'>
                 <Form.Label htmlFor='name'>Nome</Form.Label>
                 <Form.Input ref={this.name} id='name' type='text' onChange={this.onDisabledButton} required/>
                 <Form.Label htmlFor='email'>Email</Form.Label>
                 <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton} required/>
                 <Form.Label htmlFor='phone'>Telefone</Form.Label>
                 <Form.Input ref={this.phone} id='phone' type='tel' minLength={10} onChange={this.onDisabledButton}/>
                 <Form.Label htmlFor='password'>Password</Form.Label>
                 <Form.Input ref={this.password} id='password' type='password' minLength={6} onChange={this.onDisabledButton} required/>
                 <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                 <Form.Link href='/login'>Criar uma conta</Form.Link>
             </Form>
        </Container>
    )
}
}


export default Signup