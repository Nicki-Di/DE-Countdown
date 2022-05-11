import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../utils/timeLeft';
import './styles.css';

export const Index = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    }, [timeLeft]);

    return (
        <div className="counter">
            <div className="counter-item">
                <span className="value">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="label">روز</span>
            </div>

            <div className="counter-item">
                <span className="value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="label">ساعت</span>
            </div>

            <div className="counter-item">
        <span className="value">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
                <span className="label">دقیقه</span>
            </div>

            <div className="counter-item">
        <span className="value">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
                <span className="label">ثانیه</span>
            </div>
        </div>
    );
};
