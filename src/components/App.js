
import '../styles/App.scss';
// Importamos el servicio del local storage
import ls from '../services/local-storage';
// importamos useEffect además de useState
import { useEffect, useState } from 'react';

function App() {
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
        <section>
          <div>
            <h3>#0: Book club</h3>
            <button>X</button>
            <p>Abierto entre semana : Sí</p>
            <p>Abierto el fin de semana : Sí</p>
          </div>
          <div>
            <h3>#1: Chess club</h3>
            <button>X</button>
            <p>Abierto entre semana : Sí</p>
            <p>Abierto el fin de semana : Sí</p>
          </div>
          <div>
            <h3>#2: Escape room club</h3>
            <button>X</button>
            <p>Abierto entre semana : Sí</p>
            <p>Abierto el fin de semana : Sí</p>
          </div>
          <div>
            <h3>#3: Debate club</h3>
            <button>X</button>
            <p>Abierto entre semana : Sí</p>
            <p>Abierto el fin de semana : Sí</p>
          </div>
        </section>
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
