import React, { useState, FormEvent } from "react"
import Modal from 'react-modal';
import closeImage from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { useTransactions } from "../../hooks/useTransactions";
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ( { isOpen, onRequestClose }: NewTransactionModalProps ) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category,setCategory] = useState('');

  const [type,setType] = useState('deposit');

  async function handleCreateNewTransaction({ e }: { e: FormEvent; }) {
    e.preventDefault()
    
    await createTransaction({
      title,
      amount: value,
      category,
      type
    })

    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }
  
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type="button" 
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImage} alt="Fechar modal" />
    </button>

    <Container 
      onSubmit={ (event) => handleCreateNewTransaction({ e: event }) }
    >
      <h2>Cadastrar transação</h2>
      <input 
        placeholder="Titulo" 
        value={title}
        onChange={ event => setTitle(event.target.value) }
      />

      <input 
        type="number" 
        placeholder="Valor" 
        value={value}
        onChange={ event => setValue(Number(event.target.value)) }
      />

      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={ ()=> setType('deposit') }
          isActive={ type === 'deposit' }
          activeColor="green"
        >
          <img src={incomeImage} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>
        
        <RadioBox
          type="button"
          onClick={ ()=> setType('withdraw') }
          isActive={ type === 'withdraw' }
          activeColor="red"
        >
          <img src={outcomeImage} alt="Saída" />
          <span>Saída</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input 
        placeholder="Categoria" 
        value={category}
        onChange={ event => setCategory(event.target.value) }
      />

      <button type="submit">
        Cadastrar
      </button>

    </Container>
    
  </Modal>
  )
}

export default NewTransactionModal