import SubscriptionPlan from "../SubPlan";
import styles from './Pricing.module.css';
const Pricing = () => {
    return <div className={styles.pricing}>
        <SubscriptionPlan title="BASIC" price="2.99$/m" description="* Watch BASIC  tutorials for lifetime" />
        <SubscriptionPlan title="ADVANCED" price="5.99$/m" description="* Watch ALL tutorials for lifetime" />

    </div>
}

export default Pricing;