import React,{useRef} from "react";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetPhotoscans, UpdatePhotoscanTable } from "../../../../constants/actions/photoActions/photoscan";
import { useNavigate } from "react-router-dom";

const PhotoscanEditPrice = () => {

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  
  const initialPhotoscanState = {
    id: null,
    price300dpi: null,
    price600dpi: null,
    price1200dpi: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listphotoscans } = useSelector((state) => state.photoscan);
  const [ editPhotoscan, setEditPhotoscan ] = useState(initialPhotoscanState);
  const [ isOpen, setIsOpen ] = useState(null);
  const [ foc, setFoc ] = useState(false); 
  const [ complete, setComplete ] = useState(false);
  

  useEffect(() => { dispatch(GetPhotoscans()); }, []);     
     
      const Table = ({ listphotoscans }) => (
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <table className="table table-striped text-center">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Формат</th>
                  <th scope="col">300 dpi</th>
                  <th scope="col">600 dpi</th>
                  <th scope="col">1200 dpi</th>
                </tr>
              </thead>
              <tbody>
                {listphotoscans.map((row, index) => (
                  <TableRow key={row.id} row={row} index={listphotoscans[index]} />
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
         const item = listphotoscans.find(row => row.id == e.currentTarget.id)

         setIsOpen(item.id);  
         setComplete(true);
         const data = {
           id: item.id,
           price300dpi: item.price300dpi,
           price600dpi: item.price600dpi,
           price1200dpi: item.price1200dpi,
         };

         if(!foc){
          setEditPhotoscan(data);
         }         
                      
       }

       const handleInputChange =(dataType,values,index) => {
                    
       //console.log("Datatype",dataType);                 
       //console.log("datas:",values);       
       setEditPhotoscan({...editPhotoscan, [dataType]: values})         
       //console.log("Final:",editFnd); 
      };


      const handleToggle = () => {
        setFoc(preState => !preState);
      }


      const updatePhotoscanItem = () => {

        //console.log("FND:",editFnd);
        const idItem = editPhotoscan.id;

        const upd = {
          price300dpi: editPhotoscan.price300dpi,
          price600dpi: editPhotoscan.price600dpi,
          price1200dpi: editPhotoscan.price1200dpi,
        };

        dispatch(UpdatePhotoscanTable(idItem,upd))
        .then(res => {
          console.log("Result:", res);
          setComplete(false);
          navigator("/admin");
          dispatch(GetPhotoscans());
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
        {isOpen == row.id && complete ? (
          <td colSpan={3}>
            <div
              className="d-flex justify-content-between"
              style={{ left: "3em" }}
            >
              <td></td>

              <td>
                <input
                  ref = { foc ? (input1) => {
                          input1 && input1.focus();
                        } : input1 }
                  id="price300dpi"
                  value={editPhotoscan.price300dpi}
                  name="price300dpi"
                  onChange={(e) =>
                    handleInputChange(
                      "price300dpi",
                      e.currentTarget.value,
                      index
                    )}
                  onClick={handleToggle}
                  style={{
                    width: "100px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "7px",
                  }}
                />
              </td>
              <td>
                <input
                  ref = { foc ? (input2) => {
                          input2 && input2.focus();
                        } : input2 }
                  id="price600dpi"
                  value={editPhotoscan.price600dpi}
                  name="price600dpi"
                  onChange={(e) =>
                    handleInputChange(
                      "price600dpi",
                      e.currentTarget.value,
                      index
                    )}
                  onClick={handleToggle}
                  style={{
                    width: "100px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "7px",
                  }}
                />
              </td>
              <td>
                <input
                  id="price1200dpi"
                  value={editPhotoscan.price1200dpi}
                  name="price1200dpi"
                  onChange={(e) =>
                    handleInputChange(
                      "price1200dpi",
                      e.currentTarget.value,
                      index
                    )
                  }
                  ref={ !foc ? (input3) => {
                          input3 && input3.focus();
                        } : input3 }
                  onClick={handleToggle}
                  style={{
                    width: "100px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "7px",
                  }}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary "
                  style={{ width: "60px", height: "35px" }}
                  onClick={updatePhotoscanItem}
                  type="submit"
                >
                  Save
                </button>
              </td>
            </div>
          </td>
        ) : (
          <React.Fragment>
            <td className="text-center">{row.price300dpi}</td>
            <td>{row.price600dpi}</td>
            <td>{row.price1200dpi}</td>
          </React.Fragment>
        )}
      </tr>
    );

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Сканування фото</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listphotoscans={listphotoscans}  />       
      </div>
    </div>
  );

  
};
export default PhotoscanEditPrice;