import Image from "next/image";
import styles from "./Servicos.module.css";
import { GridContainer } from "./GridContainer";
import { CardsEdit } from "./CardsEdit";
import Cards from "./Cards";

export default function Servicos() {
    return (
        <section className={styles.background} style={{ position: 'relative', height: '130vh' }}>


            <div style={{ position: 'absolute', inset: 0, zIndex: 1, }}>
                <Image
                    src="/linha-bg-cards.png"
                    alt="Hero Background"
                    fill
                    style={{ marginTop: '-100px' }}
                />
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}> {/* Adicione z-index para ficar acima da imagem */}
                <h2 className={styles.title}>Conheça nossos serviços</h2>


                <div>
                    <GridContainer>
                        <Cards></Cards>
                    </GridContainer>
                </div>
            </div>
        </section>
    )
}