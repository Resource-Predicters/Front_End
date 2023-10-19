// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function getExchange() {

//     const [data, setData] = useState({ data: []});
  
//     // data 가져오기
//     async function getData() {
//       try {
//         const response = await axios.get('http://10.10.10.105:8080/exchange/getinfoall?date=2023-09-10')
//             .then(response => {
//                 console.log(response.data)
//                 let save = [...response.data]
//                 setData(save)
//             })
//       } catch (error) {
//             console.log(error)
//             alert('Error')
//       }
//     }
  
//     useEffect(() => {
//       getData();
//     }, [])

//     function showData() {
//     if ( data.length > 0 ) {
//       return data.map((realdata) => (
//         <div key={realdata.date}>
//           {realdata.currency}
//           {realdata.currencyName}
//           {realdata.currencySymbol}
//           {realdata.exchangeRate}
//         </div>
//       ));;
//     }}

//     return(
//         <>
//         {/* // 데이터 출력 */}
//         <div>{showData()}</div>
//         </>
//     );
// }

// export default getExchange;