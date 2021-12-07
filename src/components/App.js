
import '../styles/Reset.scss';
import '../styles/App.scss';
import initialData from '../data/knit.json'
// importamos useEffect además de useState
import { useState } from 'react';

function App() {

  const [data, setData] = useState(initialData);
  const [name, setName] = useState("");
  const [oneBoolean, setOneBoolean] = useState(false);
  const [twoBoolean, setTwoBoolean] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const [filter, setFilter] = useState('all');

  const handleName = (ev) => {
    setName(ev.target.value)
  };

  //Recogemos el valor de los Checked
  const handleOneBoolean = (ev) => {
    setOneBoolean(ev.target.checked)
    console.log('oneBoolean', oneBoolean);
  };

  const handleTwoBoolean = (ev) => {
    setTwoBoolean(ev.target.checked)
    console.log('twoBoolean', twoBoolean);
  };

  //Añadimos la función que creará un nuevo objeto y recogerá los datos introducidos por la usuaria y 
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newUnit = {
      "name": name,
      "oneBoolean": oneBoolean,
      "twoBoolean": twoBoolean
    };
    //añadimos con el spread nuevos datos
    setData([...data, newUnit])
  };

  const handleFilter = (ev) => {
    setFilter(ev.target.value);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setOneBoolean(false);
    setTwoBoolean(false);
    setName("");
  };

  const handleDelete = (ev) => {
    setToDelete(ev.target.id);
    data.splice(toDelete, 1);
    setData([...data]);
  };

  const renderList = () => {
    return data
      .filter((unit) => {
        if (filter === 'oneBoolean') {
          return unit.oneBoolean === true;
        } else if (filter === 'twoBoolean') {
          return unit.twoBoolean === true;
        }
        return true;
      })
      .map((unit, index) => {
        const oneBoolean = unit.oneBoolean ? 'Si' : 'No';
        const twoBoolean = unit.twoBoolean ? 'Si' : 'No';
        return (
          <li className="main__unit" key={index} id={index}>
            <button className="main__unit--close" onClick={handleDelete}>X</button>
            <h3 className="main__unit--title">{unit.name}</h3>
            <div className="main__unit--boolean">
              <p>Encargo : {oneBoolean}</p>
              <p>Empezado : {twoBoolean}</p>
            </div>
          </li>
        )
      }
      )
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Knit projects</h1>
        <select className="header__select" name="show" id="show" value={filter} onChange={handleFilter}>
          <option className="header__select--option" value="oneBoolean">Encargos</option>
          <option className="header__select--option" value="all">Todos</option>
          <option className="header__select--option" value="twoBoolean">Empezados</option>
        </select>
      </header>
      <main className="main">
        <ul className="main__list">{renderList()}
        </ul>
        <form className="main__form">
          <input className="main__form--input text" type="text" placeholder="Nuevo proyecto" value={name} onChange={handleName} />
          <div className="checkbox">
            <label className="main__form--label" htmlFor="oneBoolean"> Encargo</label>
            <input className="main__form--input" type="checkbox" checked={oneBoolean} onChange={handleOneBoolean} />
            <label className="main__form--label" htmlFor="twoBoolean"> Empezado</label>
            <input className="main__form--input" type="checkbox" checked={twoBoolean} onChange={handleTwoBoolean} />
          </div>
          <div className="buttons">
            <input className="main__form--input" type="submit" value="Añadir" onClick={handleSubmit} />
            <input className="main__form--input" type="button" value="Reset" onClick={handleReset} />
          </div>
        </form>
      </main>
      <footer className="footer">
        <h6 className="footer__copy">&copy;2021 By IreGonzalez</h6>
      </footer>
    </div >
  );
}

export default App;
