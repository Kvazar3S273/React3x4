import React,{useRef} from "react";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetFnds, UpdateFndTable } from "../../../../constants/actions/photoActions/fnd";
import { useNavigate } from "react-router-dom";

const FndEditPrice = () => {

  const input1 = useRef();
  const input2 = useRef();
  
  const initialFndState = {
    id: null,
    price: null,
    archivePice:null
    
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listfnds } = useSelector((state) => state.fnd);
  const [ editFnd, setEditFnd ] = useState(initialFndState);
  const [ isOpen, setIsOpen ] = useState(null);
  const [ foc, setFoc ] = useState(false); 
  const [ complete, setComplete ] = useState(false);
  

  useEffect(() => {
          dispatch(GetFnds());  
          
      }, []);     
     
      const Table = ({ listfnds }) => (
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <table className="table table-striped text-center">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Документ</th> 
                  <th scope="col" className="text-center">Кількість</th>
                  <th scope="col" className="text-center">Ціна</th>
                  <th scope="col" className="text-center">Архів</th>
                </tr>
              </thead>
              <tbody>
                {listfnds.map((row, index) => (
                  <TableRow key={row.id} row={row} index={listfnds[index]} />
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
        <th scope="row" className="text-start">{row.title}</th>
        <td className="text-center">{row.qty}</td>
        {/* <td>{row.price}</td> */}
        {isOpen == row.id && complete ? (
          <td colSpan={3}>
            <div
              className="d-flex justify-content-between"
              style={{ left: "1em" }}
            >
              <td></td>
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
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  style={{ width: "60px", height: "35px"}}
                  onClick={updateFndItem}
                  type="submit"
                >
                  Save
                </button>

              </td>
            </div>
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
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listfnds={listfnds}  />       
      </div>
    </div>
  );

  
};
export default FndEditPrice;