   
     var dob = new Date("01/17/2020");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var oAge = Math.abs(year - 1970);  
    
    var aDob = new Date("04/09/2021");  
    //calculate month difference from current date in time  
    var aMonth_diff = Date.now() - aDob.getTime();  
      
    //convert the calculated difference in date format  
    var aAge_dt = new Date(aMonth_diff);   
      
    //extract year from date      
    var aYear = aAge_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var aAge = Math.abs(aYear - 1970);  
    
      
   
   