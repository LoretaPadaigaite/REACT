import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <div  style={{ color: 'pink', 
        backgroundColor: 'black', 
        padding: '1rem 2rem'}}> 
            <h1 className={styles['pavadinimas']}>Labas, tai pagrindinis puslapis</h1>
        </div>
    )
}

