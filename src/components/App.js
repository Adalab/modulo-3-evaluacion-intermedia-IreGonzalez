
import '../styles/App.scss';
import initialData from '../data/clubs.json'
// importamos useEffect además de useState
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(initialData);
  const weekDays = [data.id].openOnWeekdays ? 'Si' : 'No';
  const weekEnd = [data.id].openOnWeekend ? 'Si' : 'No';

  const htmlClubList = data.map((data, index) => (
    <li className="club" key={index} id={index}>
      <h3>{data.name}</h3>
      <button>X</button>
      <p>Abierto entre semana : {weekDays}</p>
      <p>Abierto el fin de semana : {weekEnd}</p>
    </li>
  )
  );

  return (
    <div className="App">
      <header>
        <h1>Mis clubs</h1>
        <form>
          <select name="show" id="show">
            <option value="all">Todos</option>
            <option value="week">Los que abren entre semana</option>
            <option value="weekend">Los que abren el fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        <ul>{htmlClubList}
        </ul>
        <section>
          <h2>Añadir un nuevo club</h2>
          <form>
            <label htmlFor="name"> Nombre del club
              <input type="text" />
            </label>
            <label htmlFor="week"> ¿Abre entre semana?
              <input type="checkbox" />
            </label>
            <label htmlFor="weekend"> ¿Abre los fines de semana?
              <input type="checkbox" />
            </label>
            <input type="submit" value="Añadir un nuevo club" />
          </form>
        </section>
      </main>

    </div>
  );
}

export default App;
