import { useState, useRef, useEffect } from 'react';
import styles from './PlanCard.module.css';

const PlanCard = ({ cardHeading, price, quality, resolution, devices }) => {
    const cardWrapperRef = useRef(null);
    useEffect(() => {

        function handleOutsideClick(event) {
            if (cardWrapperRef.current && !cardWrapperRef.current.contains(event.target)) {
                setCardActive(false);
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [cardWrapperRef]);
    
    const [cardActive, setCardActive] = useState(false);

    const cardListStyle = {
        color: "var(--primary)",
        fontWeight: "600",
        opacity: "1"
    }

    const cardHeadStyle = {
        backgroundColor: "var(--primary)",
    }

    const toolTipStyle = {
        position: 'absolute',
        width: '16px',
        height: '16px',
        backgroundColor: 'var(--primary)',
        bottom: '-8px',
        rotate: '45deg',
    }

    return (
        <div ref={cardWrapperRef} onClick={() => setCardActive(true)} className={styles.cardWrapper}>
            <ul>
                <li style={cardActive === true ? cardHeadStyle : {}} className={`${styles.cardHead} flex-center`}>{cardHeading}
                    <span className={styles.tooltip}></span>
                    <span style={cardActive === true ? toolTipStyle : {}}></span>
                </li>
                <li style={cardActive === true ? cardListStyle : {}}>₹{price}</li>
                <li style={cardActive === true ? cardListStyle : {}}>{quality}</li>
                <li style={cardActive === true ? cardListStyle : {}}>{resolution}</li>
                <li style={cardActive === true ? cardListStyle : {}}>
                    <div>Phone</div>
                    <div>Tablet</div>
                    {
                        (price !== 100 && price !== 1000) &&
                        <>
                            <div>Computer</div>
                            <div>TV</div>
                        </>
                    }
                </li>
            </ul>
        </div>
    );
}

export default PlanCard;