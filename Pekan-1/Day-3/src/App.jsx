// App.jsx - Contoh penggunaan
import Greeting from './component/Greeting';

function App() {
  return (
    <div>
      {/* Tanpa prop name - akan menggunakan default */}
      <Greeting />
      
      {/* Dengan prop name - akan menggunakan nilai yang diberikan */}
      <Greeting name="Siti" />
      
      {/* Dengan prop name undefined - akan menggunakan default */}
      <Greeting name={undefined} />
      
      {/* Dengan prop name null - akan tetap null */}
      <Greeting name={null} />
    </div>
  );
}