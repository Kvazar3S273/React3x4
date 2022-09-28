import percentChange_service from "../../services/percentChange_service";

export const ChangePriceByPercent=(percentvalue)=> async ()=>{
    try {      
        const result = await percentChange_service.changeByPercent(percentvalue);          
        console.log("Percent value:", percentvalue);        
        console.log("Result:", result.status); 
        return Promise.resolve(result.status);

      } catch (error) {

        const errorsdata = error.response;      
        return Promise.reject(errorsdata.data);
      }
}