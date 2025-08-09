import styles from './styles.module.css';

export default function KeyValuePair(props: {keyName: string, value: string}) {
    const {keyName, value} = props;
    return (
        <div className={styles.keyValuePairContainer}>
            <div className={styles.keyContainer}>
                {keyName}
            </div>
            <div className={styles.valueContainer}>
                {value}
            </div>
        </div>
    )

}