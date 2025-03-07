
import { useRef } from 'react';
import './App.css'
import Form, { FormHandle } from './Components/Form'
import Header from './Components/Header'
import Input from './Components/Input'
import { useCalculateDispacth } from './store/hooks';
import { calculateInvestment } from './store/calculate-slice';
import { InvestmentParams } from './utils.js/types';
import Results from './Components/Results';

function App() {
  const dispatch = useCalculateDispacth()

  const form = useRef<FormHandle>(null);


  const calculate = (data: Record<string, string>) => {
    const transformedData: InvestmentParams = {
      initialInvestment: Number(data.initialInvestment),
      annualInvestment: Number(data.annualInvestment),
      expectedReturn: Number(data.expectedReturn),
      duration: Number(data.duration),
    };

    dispatch(calculateInvestment(transformedData));
  };

  const handleClear = () => {
    form.current?.clear();
  }

  return (
    <>
      <Header title="Investment Calculator" />
      <Form ref={form} className='container max-w-lg space-y-2' onSave={calculate}>
        <Input value={10000} required type='number' label='Initial Investment' id='initialInvestment' />
        <Input value={1200} required type='number' label='Annual Investment' id='annualInvestment' />
        <Input value={6} required type='number' label='Expected Return' id='expectedReturn' />
        <Input value={10} required type='number' label='Duration' id='duration' />
        <button type='button' onClick={handleClear}>Clear</button>
        <button type='submit'>Calculate</button>
      </Form>
      <Results />
    </>
  )
}

export default App
