import style from './style.module.css'
import Logo from '../../assets/Vector.svg'
import Input from "../../components/Input"
import ButtonFlat from "../../components/ButtonFlat"

const Login = () => {
return (
    <div className={style.main}>
         <div className={`${style.div_login} bg_black_1200 `}>
            <div className={style.imagem}>
                <img src={Logo} width={336} height={60}/>
                <p className={style.acesse}>Acesse sua Conta</p>
                </div>
                <div className={`d-flex flex-column `}>
                <div className={`d-flex flex-column gap-4`}>
                <Input
                    type='text'
                    nome='E-mail'
                    id='Input-e-mail'
                    placeholder='Digite aqui seu e-mail.'
                    className={`${style.Input_email}  `}
                    label='E-mail:' >
                </Input>
                <Input
                    type='password'
                    nome='Senha'
                    id='Input-senha'
                    placeholder='Digite aqui sua senha.'
                    className={`${style.Input_senha}    `}
                    label='Senha:' >
                </Input>
                </div>
                <div className={style.Esenha}>
                    <p>Esqueceu a senha?</p>
                </div>
                <div className="mt-1">
                    <ButtonFlat
                        nome='Acessar'
                        className='bg_primary_900 primary_200'>
                    </ButtonFlat>
                </div>
                <div className={style.line}>
                    <div />
                </div>
                <div className="mt-4">
                    <ButtonFlat
                        nome='Cadastre-se'
                        className='bg_white_100 primary_200 border_primary_900'>
                    </ButtonFlat>
                </div>
            </div>
        </div>
    </div>
)
}
export default Login;