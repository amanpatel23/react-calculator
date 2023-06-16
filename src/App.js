import CalcProvider from './contexts/calcContext';
import Calculator from './pages/Calculator/Calculator';

function App() {
  return (
    <>
    {/* wrapping Calculator component around CalcProvider */}
    <CalcProvider>
      <Calculator />
    </CalcProvider>
    </>
  );
}

export default App;
