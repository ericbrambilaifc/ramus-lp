import { CardsEdit } from './CardsEdit'
import styles from './Servicos.module.css'

export default function Cards() {
    return (
        <div
            style={{
                display: 'flex',
                marginTop: '60px',
                gap: '80px',
            }}
        >
            <div style={{gap: '30px', display: 'flex', flexDirection: 'column'}}>
                <CardsEdit
                    number="1"
                    text="Criação de sites"
                    subText="Sites profissionais com design exclusivo, navegação intuitiva e foco na experiência do usuário."
                />
                 
                <CardsEdit
                    number="3"
                    text="UI/UX"
                    subText="Design de interfaces intuitivas, fazendo que o usuário navegue com facilidade."
                />
                 
                <CardsEdit
                    number="5"
                    text="Marketing Digital"
                    subText="Campanhas digitais integradas com SEO, Google Ads que geram ROI comprovado."
                />
            </div>
            <div style={{gap: '30px', display: 'flex', flexDirection: 'column', marginTop: '220px'}}>
                <CardsEdit
                    number="2"
                    text="Criação de Aplicativos"
                    subText="Aplicativos mobile com design personalizados com desenvolvimento para Android e IOS."
                />
                <CardsEdit
                    number="4"
                    text="Social Media"
                    subText="Gestão completa de redes sociais com criação de conteúdo estratégico que engaja e converte seguidores."
                />
            </div>
        </div>
     )
}