module.exports = {
    clean : function(req, res, next) {
        var data = req.body;
        var keys = new Array();
        
        for(var key in data) {
            keys.push(key);
        }
        
        var query = "";
        
        switch(data[keys[0]]){
            case "SELECT":
                query = data[keys[1]].replace(/([^(),\w\s])/g, '');
                req.response = query;
                break;
                
            case "DELETE":
                var auth = data[keys[1]];
                if (auth == "thisissecretsecretsecret") {
                    query = data[keys[2]].replace(/([^(),\w\s])/g, '');
                    req.response = query;
                } else {
                    req.response = "Unauthorized";
                }
                break;
                
            case "UPDATE":
                
                break;
                
            default:
                
                break;
        }
        
        // .replace(/([^(),\w\s;])/gi, '');
        
        next();
    }
}