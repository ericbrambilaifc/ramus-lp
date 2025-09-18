import styles from './Servicos.module.css'

interface CardsEditProps {
    number: string
    text: string
    subText: string
    style?: React.CSSProperties;
}

export function CardsEdit({ number, text, subText, style }: CardsEditProps) {
    return (
        <div className={styles.cards}>
            <div className={styles.number}>
                <h3 className={styles.textNumber}>{number}</h3>
            </div>
            <div className={styles.texts}>
                <h3 className={styles.textText}>{text}</h3>
                <p className={styles.textSubText}>{subText}</p>
            </div>
        </div>
    )
}