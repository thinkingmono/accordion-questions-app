import { useState } from 'react';
import { FaPlus } from '../node_modules/react-icons/fa';
import { FaMinus } from '../node_modules/react-icons/fa';

const SingleQuestion = ({ id, title, info, active, isActive }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button type="button" className="question-btn" onClick={() => {
                    if (active && showInfo) {
                        active = false;
                        setShowInfo(false);
                    } else {
                        setShowInfo(isActive(id));
                    }
                }}>{showInfo && active ? <FaMinus /> : <FaPlus />}</button>
            </header>
            {showInfo && active ? <p>{info}</p> : null}
        </article>
    )
}

export default SingleQuestion