import { useState, useEffect } from 'react';
import ContractAccordion from './components/ContractAccordion';
import './styles.css';
import Logo from './assets/logo.svg';

function App() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch('/contracts.json');
        if (!response.ok) {
          throw new Error('Failed to fetch contracts');
        }
        const data = await response.json();
        setContracts(data);
      } catch (err) {
        console.error('Error fetching contracts:', err);
      }
    };
    fetchContracts();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-content">
          <img src={Logo} alt="AXPO Logo" className="app-logo" />
          <h1 className="app-title">Contract Onboarding</h1>
        </div>
      </header>

      <main className="app-main">
        <section className="contract-section">
          <h2 className="section-title">Contract Summary</h2>
          <div className="accordion-grid">
            {contracts.map((contract) => (
              <ContractAccordion key={contract.id} contractData={contract} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
