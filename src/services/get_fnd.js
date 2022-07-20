import http from '../http_common';

class FndDataService {

    getdatafnd() {
        return http.get("api/photo");        
    }  
    
}

export default new FndDataService();