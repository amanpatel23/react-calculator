import CalcProvider from './contexts/calcContext';
import Calculator from './pages/Calculator/Calculator';

function App() {
  return (
    <>
    <CalcProvider>
      <Calculator />
    </CalcProvider>
    </>
  );
}

export default App;
