import styles from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className={styles.background} style={{ position: 'relative', height: '100vh' }}>
            
            {/* Logo + texto */}
            <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                paddingBottom: '290px'
            }}>
                <Image
                    src="/logo-ramus-text.png"
                    alt="Ramus Logo"
                    width={400}   // aumentei o tamanho, ajuste se precisar
                    height={60}
                />
                <p className={styles.textSub}>
                    A Ramus é especialista em fazer seu negócio decolar no digital
                </p>
            </div>

            {/* Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                <Image
                    src="/linha-bg-home.png"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                />
            </div>

        </section>
    )
}
