import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";


function EditTable() {
    const [data, setData] = useState();
return (
    <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>Username</th>
      <th>email</th>
      <th>address</th>
      <th>update</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</Table>
</div>
)
}
export default EditTable