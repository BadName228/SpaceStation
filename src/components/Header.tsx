import React from "react";
import IHeaderProps from "../types/headerProps";
import "../styles/header.css";

const Header: React.FC<IHeaderProps> = ({ long, lang, sec }: IHeaderProps) => {
  let date: Date = new Date();
  return (
    <header>
      <div id="header">
        <div id="block">
          <h2>Координаты МКС:</h2>
          <h4>Долгота: {long}</h4>
          <h4>Широта: {lang}</h4>
        </div>
        <div id="block">
          <h2>Обновление данных через:</h2>
          <h4>{sec}: cек</h4>
        </div>
        <div>
          <h2>Время в UTC:</h2>
          <h4>{date.toString()}</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;