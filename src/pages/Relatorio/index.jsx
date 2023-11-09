import Input from '../../components/Input'
import style from './style.module.css'
import TextArea from '../../components/TextArea'
import Navbar from '../../components/Navbar'
import ButtonFlat from '../../components/ButtonFlat'
import Logo from '../../assets/card-image 1.svg'
const Relatorio = () => {
    return (
        <div className={`d-flex flex-column `}>
            <Navbar isLogged={"true"} />
            <div className={` ${style.card} d-flex flex-column  justify-content-center gap-3`} >
                <div className={`d-flex flex-wrap gap-3`}>
                    <div className={`d-flex flex-column flex-grow-1 gap-3`}>
                        <Input label='Rua'
                            id='input-Rua'
                            placeholder=''
                            type='text' />

                        <Input label='Bairro'
                            id='input-bairro'
                            placeholder=''
                            type='text' />

                        <Input label='CEP'
                            id='Input-CEP'
                            placeholder=''
                            type='text' />
                        
                    </div>
                    <div className={`${style.img} d-flex flex-column flex-grow-1 gap-3`}>
                            <img src={Logo} alt="Logo" width={96} height={96} />
                            <div><p>Arraste uma imagem ou cole imagem</p></div>
                        </div>
                    <div className={`d-flex flex-column`}>
                        {/* <CardDragDrop /> */}
                    </div>
                </div>
                <Input
                    label='Referência'
                    id='Input-referencia'
                    placeholder=''
                    type='text' />
                <TextArea
                    id='input-observacao'
                    placeholder=''
                    label='Observação' />
                <ButtonFlat nome="Relatar Pet" />
            </div>
        </div>


    )
}
export default Relatorio;