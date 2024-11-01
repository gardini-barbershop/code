import { useMemo, useState } from "react";
import * as S from "./styles";

const Button = ({ name, action, icon }) => {
    const [values] = useState({ "name": name, "action": action, "icone": icon })

    function handleFunction(param) {
        switch (param.target.dataset.action) {
            case "modal":

                break;
            case "enviar":
                console.log(param.target.innerText);
                if (param.target.innerText == "Whatsapp") {
                    window.open("https://wa.me/5547984576843?text=Olá!");
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
                return <img alt="Ícone" src="./icon-whatsapp.png"></img>
            case "Instagram":
                return <img alt="Ícone" src="./icon-instagram.png"></img>
            case "Maps":
                return <img alt="Ícone" src="./icon-localizacao.png"></img>
            default:
                break;
        }
    }, [values])

    return (
        <S.Button data-action={`${action}`} onClick={(e) => { handleFunction(e) }}><p>{icone}</p>{name}</S.Button>
    )
}

export default Button;