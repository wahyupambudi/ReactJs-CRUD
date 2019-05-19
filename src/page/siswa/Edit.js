import React, { Component } from "react";
import axios from '../../axios'


class SiswaEdit extends Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      alamat: "",
      kelas: ""
    };
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    const siswaId = this.props.match.params.id;
    axios
      .get(`/siswas/${siswaId}`, {headers})
      .then(res => {
        console.log(res);
        const { nama, alamat, kelas } = res.data.data;
        this.setState({
          nama,
          alamat,
          kelas
        });
      })
      .catch(err => console.log(err));
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
    const siswaId = this.props.match.params.id;
    const { nama, alamat, kelas } = this.state;
    axios
      .put(`/siswas/${siswaId}`, { nama, alamat, kelas }, {headers})
      .then(res => {
        console.log(res);
        this.props.history.push("/siswa");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Edit Data Siswa</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Nama</label>
          <div className="form-group">
            <input
              required
              name="nama"
              value={this.state.nama}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <label>Alamat</label>
          <div className="form-group">
            <input
              required
              name="alamat"
              value={this.state.alamat}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <label>Kelas</label>
          <div className="form-group">
            <input
              required
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

export default SiswaEdit;
