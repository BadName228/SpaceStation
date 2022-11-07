import React from "react";
import "../styles/sidebar.css";

import IPerson from "../types/IssPerson";
import IPersonalProps from '../types/PersonalProps'



function Personal({people}: IPersonalProps): JSX.Element {
  

  const peopleStation: Array<IPerson> = people.filter((el: IPerson) => el.craft === "ISS");
  
  const personal = React.useMemo(() => {
    return (
      <div className="sidebar">
        <h3>Персонал МКС</h3>
        <h3>Кол-во: {peopleStation.length}</h3>
        {peopleStation.map((member) => {
          return (
            <div key={member.name} className="personal_card">
              <h3>Имя Сотрудника:</h3>
              <p>{member.name}</p>
            </div>
          );
        })}
      </div>
    )
  }, [peopleStation]);

  return (
    <>
      {personal}  
    </>
  );
}

export default Personal;
