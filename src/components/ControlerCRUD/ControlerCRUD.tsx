import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ControlerCRUD = () => {
  let initialState = []

  const [bills, setBills] = useState(initialState)

  function addBill(e) {
    e.preventDefault();
    const bill  = {
      id: Math.floor(Math.random() * 10000),
      name: (document.getElementById('name') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement).value,
      value: (document.getElementById('value') as HTMLInputElement).value
    };
    console.log(bill);
    setBills([ ...bills, { ...bill }]);
  }

  function deleteBill(id) {
    const focusBillDelete = bills.filter(bill => bill.id !== id);
    setBills([...focusBillDelete])
  }

  return (
    <>
      <form>
        <input id="name" type="text" placeholder="Digite aqui o nome"/>
        <input id="description" type="text" placeholder="Digite aqui a descrição"/>
        <input id="value" type="number" placeholder="Digite aqui o valor"/>
        <button onClick={addBill}>Adicionar</button>
      </form>
      <Table className="rTable">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            bills.map(bill =>
              <tr key={bill.id}>
                <td>{bill.name}</td>
                <td>{bill.description}</td>
                <td>{bill.value}</td>
                <td>
                  <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteBill(bill.id)} />
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default ControlerCRUD
