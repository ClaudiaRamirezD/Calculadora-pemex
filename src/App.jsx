import { useState } from 'react';
import { calcularLitros } from './utils/calcularLitros'
import InputField from './components/InputField';
import Result from './components/Result';
import './App.css';

function App() {
  const [capacidad, setCapacidad] = useState("");
  const [actual, setActual] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const mensaje = calcularLitros(capacidad, actual, porcentaje);
    setResultado(mensaje);
  };

  const limpiar = () => {
    setCapacidad("");
    setActual("");
    setPorcentaje("");
    setResultado(null);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-y-6 ">
        <h1 className="text-2xl font-bold text-center">Calculadora 🚛</h1>

        <div className="flex flex-col gap-y-4">
          <InputField
            label="Capacidad total (en miles de litros)"
            placeholder="Ej. 60 → 60,000 L"
            value={capacidad}
            onChange={setCapacidad}
          />
          <InputField
            label="Litros actuales almacenados"
            placeholder="Ej. 4000"
            value={actual}
            onChange={setActual}
          />
          <InputField
            label="Porcentaje de llenado deseado"
            placeholder="Ej. 90"
            value={porcentaje}
            onChange={setPorcentaje}
          />
        </div>

        <Result resultado={resultado} />

        <div className="flex justify-between pt-2">
          <button
            onClick={calcular}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition"
          >
            Calcular
          </button>
          <button
            onClick={limpiar}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Limpiar
          </button>
        </div>
      </section>
    </main>
  );

}


export default App;
