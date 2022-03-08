import React ,{ useState } from 'react';

import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import NewTransactionModal from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App(): JSX.Element {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(): void {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/> 
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      
      <GlobalStyle />
    </>
  );
}