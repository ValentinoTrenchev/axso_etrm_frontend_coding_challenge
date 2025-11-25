import { useRef, useEffect, useState } from 'react';
import Accordion from './Accordion';
import './ContractAccordion.css';

const ContractDetail = ({ label, value, icon }) => {
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  }, [value]);

  return (
    <div className="contract-detail">
      <span className="contract-detail-label">{label}</span>
      <span className="contract-detail-value">
        {icon && (
          <img src={icon} alt={`${value} flag`} className="contract-flag" />
        )}
        <span
          ref={textRef}
          className="contract-detail-text"
          title={isOverflowing ? value : undefined}
        >
          {value}
        </span>
      </span>
    </div>
  );
};

const ContractAccordion = ({ contractData }) => {
  return (
    <Accordion title="Overview" id={`contract-${contractData.id}`}>
      <div className="contract-grid">
        <ContractDetail
          label="Contract Type"
          value={contractData.contractType}
        />
        <ContractDetail label="Commodity" value={contractData.commodity} />
        <ContractDetail
          label="Country"
          value={contractData.country}
          icon={contractData.flagIcon}
        />
        <ContractDetail
          label="Signature Date"
          value={contractData.signatureDate}
        />
        <ContractDetail label="Period" value={contractData.period} />
      </div>
    </Accordion>
  );
};

export default ContractAccordion;
