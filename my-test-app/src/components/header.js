import React, {useState} from "react";
import logo from './logo.svg';

function AppHeader() {
  // カウントアップ追加
  const [cource, setcource] =useState(0)
  const test=()=>{
    setcource(cource+2)
  }

  const test_2 =()=>{
    alert("COMMONN!!!")
  }

  //フォームの詳細仕様
  const [name, setName] = useState({
    lastName: '',
    firstName: ''
  })

    return(
        <>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label>{cource}</label>
        <button onClick={test}>SWITCH COLOR</button>
        <button onClick={test_2}>ADD TO CART</button>
        <form>
        <input placeholder="姓"
          value={name.lastName}
          onChange={(e)=>setName({name,lastName: e.target.value})}></input>
        <input placeholder="名"
          value={name.firstName}
          onChange={(e)=>{setName({name,firstName: e.target.value})}}></input>
        <input type="submit" value="送信" ></input>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </>
  );
}

export default AppHeader;