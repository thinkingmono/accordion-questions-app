import { FaPlus } from '../node_modules/react-icons/fa';
import { FaMinus } from '../node_modules/react-icons/fa';

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
    const isActive = id === activeId;

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button type="button" className="question-btn" onClick={() => toggleQuestion(id)}>{isActive ? <FaMinus /> : <FaPlus />}</button>
            </header>
            {isActive && <p>{info}</p>}
        </article>
    )
}

export default SingleQuestion