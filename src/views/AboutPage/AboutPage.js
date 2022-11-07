import styled  from 'styled-components'
import styles from './aboutPage.module.scss';

const Title = styled.h1`
    color: salmon;
`

const AboutPage = () => {
    return (
        <div className={styles.fonas}>
            {/*<h1 className={styles['title']}>Tai ABOUT puslapis</h1>*/}
            <Title>Tai ABOUT puslapis...</Title>
            </div>
    )
}
export default AboutPage;