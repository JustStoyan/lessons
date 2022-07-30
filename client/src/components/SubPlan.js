import Button from './Button';
import styles from './SubPlan.module.css';


const SubscriptionPlan = props => {
    return <section className={styles['subPlan-card']}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.price}>
            <h3>{props.price}</h3>
            <div className={styles.actions}>
                <Button className={styles[`sub-button`]} type={"button"} name={"Subscribe"}></Button>
                <Button className={styles[`info-button`]} type={"button"} name={"Info"}></Button>
            </div>
        </div>
        <p className={styles.description}>{props.description}</p>
    </section>
}

export default SubscriptionPlan;