import React,{useRef} from "react";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { GetDuplicates, UpdateDuplicateTable } from "../../../../constants/actions/photoActions/duplicate";

const DuplicateEditPrice = () => {

  const input1 = useRef();
  const input2 = useRef();
  
  const initialDuplicateState = {
    id: null,
    priceFirst: null,
    priceEachOther: null
    
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listDuplicates } = useSelector((state) => state.duplicate);
  const [ editDuplicate, setEditDuplicate ] = useState(initialDuplicateState);
  const [ isOpen, setIsOpen ] = useState(null);
  const [ foc, setFoc ] = useState(false); 
  const [ complete, setComplete ] = useState(false);
  

  useEffect(() => {
          dispatch(GetDuplicates());  
          
      }, []);     
     
      const Table = ({ listDuplicates }) => (
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <table className="table table-hover">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Формат</th>
                  <th scope="col">Ціна за перший</th>
                  <th scope="col" className="text-center">Кожен наступний</th>
                </tr>
              </thead>
              <tbody>
                {listDuplicates.map((row, index) => (
                  <TableRow key={row.id} row={row} index={listDuplicates[index]} />
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
         const item = listDuplicates.find(row => row.id == e.currentTarget.id)

         setIsOpen(item.id);  
         setComplete(true);
         const data={
          id:item.id,
          priceFirst:item.priceFirst,
          priceEachOther:item.priceEachOther         
         }

         if(!foc){
          setEditDuplicate(data);
         }         
                      
       }

       const handleInputChange =(dataType,values,index) => {
                    
       //console.log("Datatype",dataType);                 
       //console.log("datas:",values);       
       setEditDuplicate({...editDuplicate, [dataType]: values})         
       //console.log("Final:",editFnd); 
      };


      const handleToggle = () => {
        setFoc(preState => !preState);
      }


      const updateDuplicateItem = () => {

        //console.log("FND:",editFnd);
        const idItem = editDuplicate.id;

        const upd = {
          priceFirst:editDuplicate.priceFirst,
          priceEachOther:editDuplicate.priceEachOther
        }

        dispatch(UpdateDuplicateTable(idItem,upd))
        .then(res => {
          console.log("Result:", res);
          setComplete(false);
          navigator("/admin");
          dispatch(GetDuplicates());
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
        <th scope="row">{row.format}</th>
        {/* <td className="text-center">{row.qty}</td> */}
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
                id="priceFirst"
                value={editDuplicate.priceFirst}
                name="priceFirst"
                onChange={(e) =>
                  handleInputChange("priceFirst", e.currentTarget.value, index)
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
                id="priceEachOther"
                value={editDuplicate.priceEachOther}
                name="priceEachOther"
                onChange={(e) =>
                  handleInputChange("priceEachOther", e.currentTarget.value, index)
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
                  onClick={updateDuplicateItem}
                  type="submit"
                >
                  Save
                </button>

              </td>
            </td>
          </td>
        ) : (
          <React.Fragment>
            <td className="text-center">{row.priceFirst}</td>
            <td>{row.priceEachOther}</td>
          </React.Fragment>
        )}
      </tr>
    );


  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Дублікати фотографій</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listDuplicates={listDuplicates}  />       
      </div>
    </div>
  );

  
};
export default DuplicateEditPrice;