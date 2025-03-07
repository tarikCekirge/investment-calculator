import { useRef } from 'react';
import './App.css'
import Form, { FormHandle } from './Components/Form'
import Header from './Components/Header'
import Input from './Components/Input'
import { useCalculateDispacth } from './store/hooks';
import { calculateInvestment, resetInvestment } from './store/calculate-slice';
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
    dispatch(resetInvestment());

  }

  return (
    <>
      <section>
        <div className='container max-w-6xl'>
          <Header title="Investment Calculator" />
          <Form ref={form} className='investment-form' onSave={calculate}>
            <Input
              required
              type='number'
              label='Initial Investment'
              id='initialInvestment'
              min="0"
            />
            <Input
              required
              type='number'
              label='Annual Investment'
              id='annualInvestment'
              min="0"
              max="36"
            />
            <Input
              required
              type='number'
              label='Expected Return'
              id='expectedReturn'
              min="0"
            />
            <Input
              required
              type='number'
              label='Duration'
              id='duration'
              min="1"
              max="36"
            />
            <div className='flex gap-4 justify-end'>
              <button type='button' onClick={handleClear}>Clear</button>
              <button type='submit'>Calculate</button>
            </div>
          </Form>
          <Results />
        </div>
      </section>
    </>
  )
}

export default App;
