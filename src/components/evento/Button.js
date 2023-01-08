import styles from './styles.css';

export default function Button(props) {
    return <button className={styles.buttonSubmit}  onClick={props.event} >{props.text}</button>
}