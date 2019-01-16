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
    
1. get date and time and store in variable because we are using the value for two different method call

    var date = myFunction();
    
2. send alert with that date clear Timeout
    
    alert(date);

3. log the date to console   
    console.log(Date());

}