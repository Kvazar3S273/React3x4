import React,{useRef} from "react";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetFnds, UpdateFndTable } from "../../../../constants/actions/photoActions/fnd";
import { useNavigate } from "react-router-dom";

const FotoprintEditPrice = () => {

  const input1=useRef();
  const input2=useRef();
  
  const initialFotoprintState = {
    id: null,
    price: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listfotoprints } = useSelector((state) => state.fotoprint);
  const [ editFotoprint, setEditFotoprint ] = useState(initialFotoprintState);
  const [ isOpen, setIsOpen ] = useState(null);
  const [ foc, setFoc ] = useState(false); 
  const [ complete, setComplete ] = useState(false);
  
  useEffect(() => {
          dispatch(GetFotoprints());  
      }, []);     
     
      const Table = ({ listfotoprints }) => (
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <table className="table table-hover">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Формат</th>
                  <th scope="col">Точні розміри, мм</th>
                  <th scope="col" className="text-center">Ціна</th>
                </tr>
              </thead>
              <tbody>
                {listfotoprints.map((row, index) => (
                  <TableRow key={row.id} row={row} index={listfotoprints[index]} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      );
    
    const RowHandleClick = (e,row) => {
      e.preventDefault();        
               
         console.log("Row",row);
         //console.log("e.currentTarget.id",e.currentTarget.id)
         const item = listfnds.find(row => row.id == e.currentTarget.id)

         setIsOpen(item.id);  
         setComplete(true);
         const data={
          id:item.id,
          price:item.price,
          archivePice:item.archivePice         
         }

         if(!foc){
          setEditFnd(data);
         }         
                      
       }

       const handleInputChange =(dataType,values,index) => {
                    
       //console.log("Datatype",dataType);                 
       //console.log("datas:",values);       
       setEditFnd({...editFnd, [dataType]: values})         
       //console.log("Final:",editFnd); 
      };


      const handleToggle = () => {
        setFoc(preState => !preState);
      }


      const updateFndItem = () => {

        //console.log("FND:",editFnd);
        const idItem = editFnd.id;

        const upd = {
          price:editFnd.price,
          archivePice:editFnd.archivePice
        }

        dispatch(UpdateFndTable(idItem,upd))
        .then(res => {
          console.log("Result:", res);
          setComplete(false);
          navigator("/admin");
          dispatch(GetFnds());
        })
        .catch(ex => {
          console.log("Errorr", ex);
        })        

      };
      
    const TableRow = ({ row, index }) => (
      <tr
        className="table-light"
        id={row.id}
        onClick={(e) => RowHandleClick(e, row)}
      >
        <th scope="row">{row.title}</th>
        <td className="text-center">{row.qty}</td>
        {/* <td>{row.price}</td> */}
        {isOpen == row.id && complete ? (
          <td colSpan={2} className="position-relative">
            <td >
              <input
                ref={
                  foc
                    ? (input1) => {
                        input1 && input1.focus();
                      }
                    : input1
                }
                id="price"
                value={editFnd.price}
                name="price"
                onChange={(e) =>
                  handleInputChange("price", e.currentTarget.value, index)
                }
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                  marginRight: "5px"
                }}
              />
            </td>
            <td >
              <input
                id="archivePice"
                value={editFnd.archivePice}
                name="archivePice"
                onChange={(e) =>
                  handleInputChange("archivePice", e.currentTarget.value, index)
                }
                ref={
                  !foc
                    ? (input2) => {
                        input2 && input2.focus();
                      }
                    : input2
                }
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                  marginRight: "8px",
                }}
              />
              <td>
                <button
                  className="btn btn-primary position-absolute end-0 "
                  style={{ width: "60px", height: "35px", top:"0.5em", right:"0.5em" }}
                  onClick={updateFndItem}
                  type="submit"
                >
                  Save
                </button>

              </td>
            </td>
          </td>
        ) : (
          <React.Fragment>
            <td className="text-center">{row.price}</td>
            <td>{row.archivePice}</td>
          </React.Fragment>
        )}
      </tr>
    );


  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фото на документи</h1>
        <Table listfnds={listfnds}  />       
      </div>
    </div>
  );

  
};
export default FotoprintEditPrice;


// import React from "react";

// const FotoprintEditPrice = () => {
//   return (
//     <div className="row mt-3 mb-3">
//       <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
//         <h1 className="text-center">Фотодрук</h1>

//         {/* Прайс */}
//         <div className="row">
//           <div className="col-md-2 "></div>
//           <div className="col-md-8">
//             <h3 className="text-center text-danger">
//                 Редагування вартості друку фотографій
//             </h3>
//             <table className="table table-striped text-center">
//               <thead>
//                 <tr>
//                   <th scope="col">Формат</th>
//                   <th scope="col">Точні розміри, мм</th>
//                   <th scope="col" style={{ background: "#E1A3B3" }}>Ціна, грн</th>
//                 </tr>
//               </thead>
//               <tbody>
                
//                 <tr>
//                   <th scope="row">10x15</th>
//                   <td>102x152</td>
//                   <td style={{ background: "#E1A3B3" }}>5,00</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">13x18</th>
//                   <td>127x178</td>
//                   <td style={{ background: "#E1A3B3" }}>10,00</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">15x21</th>
//                   <td>152x216</td>
//                   <td style={{ background: "#E1A3B3" }}>11,00</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">20x30</th>
//                   <td>203x305</td>
//                   <td style={{ background: "#E1A3B3" }}>21,00</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">30x40</th>
//                   <td>305x420</td>
//                   <td style={{ background: "#E1A3B3" }}>42,00</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="col-md-2"></div>
//         </div>
        
//       </div>
//     </div>
//   );
// };
// export default FotoprintEditPrice;
