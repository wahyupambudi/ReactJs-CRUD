import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Siswa extends Component {
  constructor() {
    super();
    this.state = {
      siswa: [],
      message:""
    };
  }
  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    axios
      .get("https://expres789.herokuapp.com/siswas", { headers })
      .then(res => {
        this.setState({ siswa: res.data.data });
      })
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    axios
      .delete(`https://expres789.herokuapp.com/siswas/${id}`, { headers })
      .then(res => {
        this.getInitialData();
        this.setState({ message: `Berhasil Menghapus Data dengan Id ${id}` });        
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleEdit = id => {
    this.props.history.push(`/siswa/edit/${id}`);
  };
  render() {
    return (
      <div>
        <br />
        <h1>Data Siswa</h1>
        <br />
        <p>
          <Link to="/siswa/create" className="btn btn-primary">
            Tambah Siswa
          </Link>
        </p>
        {this.state.message !== "" && (
          <div class="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}
        <table className="table table-bordered table-dark">
          <thead className="text-center">
            <th>Nama</th>
            <th>Alamat</th>
            <th>Kelas</th>
            <th>Opsi</th>
          </thead>
          <tbody>
            {this.state.siswa.map((data, index) => {
              return (
                <tr>
                  <td>{data.nama}</td>
                  <td>{data.alamat}</td>
                  <td>{data.kelas}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-warning"
                      onClick={() => this.handleEdit(data.id)}
                    >
                      Edit
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={(e) => window.confirm("Apakah Anda Yakin ingin menghapus Data ini?") && this.handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Siswa;
