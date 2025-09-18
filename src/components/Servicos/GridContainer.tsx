import { ReactNode } from "react"

interface GridContainerProps {
    children: ReactNode
    className?: string
    style?: React.CSSProperties // Para permitir estilos customizados
}

export function GridContainer({ children, className, style }: GridContainerProps) {
    const defaultStyles = {
        width: '100%',
        maxWidth: '1200px', // Assumindo max-w-container seja ~1200px
        margin: '0 auto',
        paddingLeft: '0.75rem', // px-3 = 12px = 0.75rem
        paddingRight: '0.75rem'
    }

    // Mescla os estilos padrão com os customizados
    const mergedStyles = {
        ...defaultStyles,
        ...style
    }

    // Combina as classes se className for fornecida
    const combinedClassName = className ? `grid-container ${className}` : 'grid-container'

    return (
        <div
            className={combinedClassName}
            style={mergedStyles}
        >
            {children}
        </div>
    )
}