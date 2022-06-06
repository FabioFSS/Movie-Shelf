import ConnectionTest from '../../components/scripts/ConnectionTest';
import styles from './styles.module.css';

function ConnectionTestPage (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
    return (
        <div className={styles.page_body}>
            <ConnectionTest></ConnectionTest>
        </div>
    )
}
export default ConnectionTestPage;