
import '../styles/App.scss';
import initialData from '../data/clubs.json'
// importamos useEffect además de useState
import { useState } from 'react';

function App() {

  const [data, setData] = useState(initialData);
  const [name, setName] = useState("");
  const [openOnWeekdays, setOpenOnWeekdays] = useState(false);
  const [openOnWeekend, setOpenOnWeekend] = useState(false);

  const handleName = (ev) => {
    setName(ev.target.value)
  };

  //Recogemos el valor de los Checked
  const handleWeek = (ev) => {
    setOpenOnWeekdays(ev.target.checked)
  };

  const handleWeekEnd = (ev) => {
    setOpenOnWeekend(ev.target.checked)
  };

  //Añadimos la función que creará un nuevo objeto y recogerá los datos introducidos por la usuaria y 
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newClub = {
      "name": name,
      //Actualmente no recoge el valor del checkeo de lo siguiente
      "openOnWeekdays": openOnWeekdays,
      "openOnWeekend": openOnWeekend
    };
    //añadimos con el spread nuevos datos
    setData([...data, newClub])
  };

  const renderClubList = () => {
    return data.map((club, index) => {
      const weekDays = club.openOnWeekdays ? 'Si' : 'No';
      const weekEnd = club.openOnWeekend ? 'Si' : 'No';
      return (
        <li className="club" key={index} id={index}>
          <h3>{club.name}</h3>
          <button>X</button>
          <p>Abierto entre semana : {weekDays}</p>
          <p>Abierto el fin de semana : {weekEnd}</p>
        </li>
      )
    }
    )
  };

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
        <ul>{renderClubList()}
        </ul>
        <section>
          <h2>Añadir un nuevo club</h2>
          <form>
            <label htmlFor="name"> Nombre del club</label>
            <input type="text" value={name} onChange={handleName} />
            <label htmlFor="week" onChange={handleWeek}> ¿Abre entre semana?</label>
            <input type="checkbox" />
            <label htmlFor="weekend"> ¿Abre los fines de semana?</label>
            <input type="checkbox" onChange={handleWeekEnd} />
            <input type="submit" value="Añadir un nuevo club" onClick={handleSubmit} />
          </form>
        </section>
      </main>

    </div>
  );
}

export default App;
