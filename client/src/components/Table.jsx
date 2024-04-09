// const Table = ({ data, columns, templates }) => {
//   //will use when it is needed, the resusable table component
//   const columnValues = columns?.map((c) => c.value);
//   return (
//     <table className="bg-baseColor rounded-xl fixed w-[50%]">
//       <thead>
//         <tr>
//           {columnValues.map((columnValue) => {
//             return (
//               <th scope="col" className="px-10 py-6" key={columnValue}>
//                 {columns.find((column) => column.value === columnValue)?.name ||
//                   ''}
//               </th>
//             );
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {data?.map((row) => (
//           <tr key={row._id}>
//             {columnValues.map((columnValue) => (
//               <td key={columnValue} className="px-10 py-6">
//                 {templates && templates[columnValue] != null ? (
//                   <>
//                     {templates[columnValue]({
//                       data: row[columnValue],
//                     })}
//                   </>
//                 ) : (
//                   <>{row[columnValue] !== null ? row[columnValue] : '-'}</>
//                 )}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
