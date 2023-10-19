// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function getResource() {

//     const [resourcedata, setresourceData] = useState({ resource: []});
  
//     // data 가져오기
//     async function getresourceData() {
//       try {
//         const response = await axios.get('http://10.10.10.105:8080/resource/getinfoall?date=2023-09-10')
//             .then(response => {
//                 console.log(response.data)
//                 let save = [...response.data]
//                 setresourceData(save)
//             })
//       } catch (error) {
//             console.log(error)
//             alert('Error')
//       }
//     }
  
//     useEffect(() => {
//       getresourceData();
//     }, [])

//     function showResource() {
//     if ( resourcedata.length > 0 ) {
//       return resourcedata.map((realdata2) => (
//         <div>
//           {realdata2.date}
//           {realdata2.engName}
//           {realdata2.price}
//           {realdata2.symbol}
//           {realdata2.unit}
//         </div>
//       ));;
//     }}

//     const resourceTable = resourcedata && resourcedata.map(
//       (item, index) =>
//       <tbody>              
//         <tr>
//           <td>{realdata2.date}</td>
//           <td>{realdata2.engname}</td>
//           <td>{realdata2.korname}</td>
//           <td>{realdata2.price}</td>
//           <td>{realdata2.unit}</td>
//         </tr>
//       </tbody> )

//     return(
//         <>
//         {/* // 데이터 출력 */}
//         <div>{showResource()}</div>
//         </>
//     );
// }

// export default getResource;