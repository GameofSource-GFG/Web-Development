import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Table = () => {
    const team = [
        {Name: "name 1" , Position:"position 1", Domain:"domain 1"},
        {Name: "name 2" , Position:"position 2", Domain:"domain 2"},
        {Name: "name 3" , Position:"position 3", Domain:"domain 3"},
        {Name: "name 4" , Position:"position 4", Domain:"domain 4"},
    ]
    const renderTeam = (team, index) =>{
        return(
            <tr key={index}>
                <td>{team.Name}</td>
                <td>{team.Position}</td>
                <td>{team.Domain}</td>
            </tr>
        )
    }
    return(
        <div className="Table">
          <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Domain</th>
    </tr>
  </thead>
  <tbody>
  {team.map(renderTeam)}
  </tbody>
</ReactBootStrap.Table>
        </div>
    )
}

export default Table;