import React, { ReactNode } from 'react'

//Components
import Header from '../Header/Header';

interface Props {
    children?: ReactNode | ReactNode[]
};

const Base: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Base