import { useState } from 'react';
import './Accordion.css';
import ChevronUp from '../assets/chevron_up.svg';

const Accordion = ({ title, children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `accordion-content-${id}`;

  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        type="button"
      >
        <h3 className="accordion-title">{title}</h3>
        <span className={`accordion-chevron ${isOpen ? 'open' : ''}`}>
          <img src={ChevronUp} alt="expand" />
        </span>
      </button>

      {isOpen && (
        <div className="accordion-content" id={contentId} role="region">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
