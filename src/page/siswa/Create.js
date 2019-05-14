import React, { Component } from "react";
import axios from "axios";

class SiswaCreate extends Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      alamat: "",
      kelas: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    const { nama, alamat, kelas } = this.state;
    axios
      .post("https://expres789.herokuapp.com/siswas", { nama, alamat, kelas }, {headers})
      .then(res => {
        console.log(res);
        this.setState({ message: "Berhasil Menambahkan Data" });        
        this.props.history.push("/siswa");
      })
      .catch(err => console.log(err));

  };
  render() {
    return (
      <div>
        <h1>Tambah Siswa</h1>
        {this.state.message !== "" && (
          alert(this.state.message) 
        )}
        <form onSubmit={this.handleSubmit}>
          <label>Nama</label>          
          <div className="form-group">
            <input required
              name="nama"
              value={this.state.nama}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <label>Alamat</label>
          <div className="form-group">
            <input required
              name="alamat"
              value={this.state.alamat}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <label>Kelas</label>
          <div className="form-group">
            <input required
              placeholder = "Hanya di isi Angka"
              type="number"
              name="kelas"
              value={this.state.kelas}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SiswaCreate;
