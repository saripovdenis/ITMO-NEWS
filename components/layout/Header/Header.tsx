import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={'container'}>
                <div className={styles.header__content}>
                    <Image src={'/itmo.svg'} width={162} height={16} layout={'fixed'}/>
                </div>
            </div>
        </header>
    );
}

export default Header;