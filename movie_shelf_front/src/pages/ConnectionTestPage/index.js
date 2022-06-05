import ConnectionTest from '../../components/scripts/ConnectionTest';
import styles from './styles.module.css';

function ConnectionTestPage (){
    return (
        <div className={styles.page_body}>
            <ConnectionTest></ConnectionTest>
        </div>
    )
}
export default ConnectionTestPage;