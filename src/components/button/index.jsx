import { useMemo, useState } from "react";
import * as S from "./styles";

const Button = ({ name, action, icon }) => {
    const [values] = useState({ "name": name, "action": action, "icone": icon })

    function handleFunction(param) {
        console.log(param.target.dataset.action);
        switch (param.target.dataset.action) {
            case "modal":
                window.open("https://wa.me/5547984576843?text=Gostaria%20de%20agendar%20um%20hor%C3%A1rio!.");
                break;
            case "enviar":
                console.log(param.target.innerText);
                if (param.target.innerText == "Whatsapp") {
                    window.open("https://wa.me/5547984576843?text=Gostaria%20de%20agendar%20um%20hor%C3%A1rio!.");
                    break;
                }
                if (param.target.innerText == "Instagram") {
                    window.open("https://www.instagram.com/barbearia.gardini");
                    break;
                }
                if (param.target.innerText == "Maps") {
                    window.open("https://www.google.com/maps/place/Barbearia+Gardini/@-27.0266975,-48.6546576,15z/data=!4m6!3m5!1s0x94d8b5eb1450d7cb:0x80c84e6625321602!8m2!3d-27.0266975!4d-48.6546576!16s%2Fg%2F11sf3t10zx?entry=ttu");
                    break;
                }
            default:
                break;
        }
    }

    const icone = useMemo(() => {
        switch (values.icone) {
            case "Whatsapp":
                return <img alt="Ícone" src="../src/assets/icon-whatsapp.png"></img>
            case "Instagram":
                return <img alt="Ícone" src="../src/assets/icon-instagram.png"></img>
            case "Valores":
                return <img alt="Ícone" src="../src/assets/icon-valores.png"></img>
            case "Maps":
                return <img alt="Ícone" src="../src/assets/icon-localizacao.png"></img>
            default:
                break;
        }
    }, [values])

    return (
        <S.Button data-action={`${action}`} onClick={(e) => { handleFunction(e) }}><p className={values.icone == "Valores" ? "ajustar" : ""}>{icone}</p>{name}</S.Button>
    )
}

export default Button;