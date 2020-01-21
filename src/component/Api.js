import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { MdDelete, MdEdit, MdUpdate } from "react-icons/md";
 import EditTable from "../component/editTable";
import addTable from "../component/addTable";
// import Checkbox from '@material-ui/core/Checkbox';

function Api() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   };
  // }
  const [data, setData] = useState([]);
  const [showEditTable, setShowEditTable] = useState(false);
  const [editId, setEditId] = useState(null);
  const[username, setUsername] = useState('');
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');


  // const addUser = user => {
  //   user.id = users.length + 1
  //   setData([...data, user])
  // }

  const getData = () => {
    axios.get("http://localhost:3004/user/getUser").then(result => {
      console.log(result);
      setData(result.data.element);
    });
  };

  useEffect(() => {
    // axios.get("http://jsonplaceholder.typicode.com/users" ).then(result => {
    getData();
  }, []);

  const deleteTable = id => {
    //  const table = {tab_name: data.tab_name, tab_username: data.tab_username,
    // tab_email: data.tab_email, tab_address: data.tab_email};
    let payload = {
      _id: id
    };
    axios
      .post("http://localhost:3004/user/deleteUser", payload)
      .then(result => {
        console.log(result);
        getData();
      });
  };

  const updateTable = id => {
    let payload = {
      _id: editId,
      name: name,
      username: username,
      email: email,
      address:address
    };
    axios
    .post("http://localhost:3004/user/updateUser", payload)
    .then(result => {
      console.log(result);
      setShowEditTable(false)
      getData();
    });
  }

  const onClickEdit = result => {
    setShowEditTable(!showEditTable);
    setEditId(result._id);
  };

  // render() {
  console.log("data", data);

  return (
    <div>
      <h1>My Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined && data !== null
            ? data.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element._id}</td>

                    {showEditTable && element._id === editId ? (
                      <td>
                        <div class="form-group">
                          <label for="usr">Name:</label>
                          <input type="text" class="form-control" id="usr"  onChange = {(event) => setName(event.target.value)} />
                        </div>
                      </td>
                    ) : (
                      <td>{element.name}</td>
                    )}

                    {showEditTable && element._id === editId ? (
                      <td>
                        <div class="form-group">
                          <label for="usr">Username:</label>
                          <input type="text" class="form-control" id="usr" onChange = {(event) => setUsername(event.target.value)} />
                          
                        </div>
                      </td>
                    ) : (
                      <td>{element.username}</td>
                    )}

                    {showEditTable && element._id === editId ? (
                      <td>
                        <div class="form-group">
                          <label for="usr">Email:</label>
                          <input type="text" class="form-control" id="usr" onChange= {(event) => setEmail(event.target.value)} />
                        </div>
                      </td>
                    ) : (
                      <td>{element.email}</td>
                    )}

                    {showEditTable && element._id === editId ? (
                      <td>
                        <div class="form-group">
                          <label for="usr">Address:</label>
                          <input type="text" class="form-control" id="usr" onChange = {(event) => setAddress(event.target.value)} />
                        </div>
                      </td>
                    ) : (
                      <td>{element.address}</td>
                    )}

                    {/* <td>{element.username}</td> */}
                    {/* <td>{element.email}</td>
                    <td>{element.address} </td> */}
                    <td>
                      <MdDelete
                        onClick={() => {
                          deleteTable(element._id);
                        }}
                      ></MdDelete>
                      <MdEdit
                        style={{ marginLeft: "40px" }}
                        onClick={() => onClickEdit(element)}
                      ></MdEdit>
                      <MdUpdate style={{ marginLeft: "40px" }} onClick={() => updateTable(element)}></MdUpdate>
                    </td>

                    <td>
                      {/* <Checkbox
        checked={checked}
        onChange={handleChange}
        value="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /> */}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      {showEditTable}
    </div>
  );
}

export default Api;
