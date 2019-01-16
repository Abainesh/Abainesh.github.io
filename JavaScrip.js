function myFunction() {
                    var today = new Date();   
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var today = new Date();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date+' '+time;
                    return dateTime;
}
function alertAndLogDate(){
    
// get date and time and store in variable because we are using the value for two different method calls
    var date = myFunction();
    
// send alert with that date clear Timeout
    alert(Date());
    
// log the date to console  
    console.log(Date());

}