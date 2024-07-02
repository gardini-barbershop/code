import Header from "../components/Header";
import Button from "../components/button";
import Carousel from "../components/carousel";
import Pattern from "../components/svg/brick-pattern";
import * as S from "./styles";

const home = () => {
    return (
        <main>
            <Header />
            <S.CarouselContent>
                <Carousel></Carousel>
            </S.CarouselContent>
            <S.Content>
                <Pattern />
                <S.ButtonWrapper>
                    <Button name="Whatsapp" action="enviar" icon="Whatsapp"></Button>
                    <Button name="Instagram" action="enviar" icon="Instagram"></Button>
                    <Button name="Maps" action="enviar" icon="Maps"></Button>
                    <Button name="Tabela de Preços" action="modal" icon="Valores"></Button>
                </S.ButtonWrapper>
                <S.Agenda>Agenda agora!</S.Agenda>
                <S.Horarios>
                    <div>
                        <p>SEGUNDA À SEXTA</p>
                        <p>SÁBADOS</p>
                    </div>
                    <div>
                        <p>9:00h ÀS 20:00h</p>
                        <p>8:00h ÀS 17:00h</p>
                    </div>
                </S.Horarios>
            </S.Content>
        </main>
    )
}

export default home;