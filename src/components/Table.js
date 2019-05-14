import React, {Component} from "react";


// with class
class Table extends Component {
    render(){
        console.log(this.props)
        return (
            <table>
              <thead>
                <th>{this.props.judulbaru}</th>
              </thead>
              <tbody>
                {this.props.siswa.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.nama}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
    }
}


// with props
// const Table = props => {
//     console.log(props);
//     return (
//       <table>
//         <thead>
//           <th>Nama</th>
//         </thead>
//         <tbody>
//           {props.siswa.map((data, index) => {
//             return (
//               <tr key={index}>
//                 <td>{data.nama}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   };

export default Table;
