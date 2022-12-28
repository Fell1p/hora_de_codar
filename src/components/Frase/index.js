import React from 'react';
import styles from './Frase.modules.css';

export default function Frase() {
    return(
        <div className={styles.fraseContainer} >
            <p className={styles.fraseContent} >A vida é uma caixa cheia de surpresas!</p>
        </div>
    )
}