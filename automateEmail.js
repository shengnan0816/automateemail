//check if value in a cell has number
function hasNumber(myString) {
    return /\d/.test(myString);
  }

//send email
function sitedailyreminder() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Form Responses"); //note1: sheet name
    var LastRow1 = sheet.getLastRow();
    var lastc = sheet.getLastColumn();
    var data = sheet.getRange(2,1,1,lastc).getValues();
    var i = 0;

     //note2: create variables and store columns for later use
     for (var j = 0; j < data[i].length; j++) {
 
       if (data[i][j] == "Credit Value" ) {
         var colcv = j + 1;
         // Logger.log(colcv)
       }
       
       if (data[i][j] == "Plant Issuing " ) {
         var cols = j + 1;
         // Logger.log(cols)
       }
       
       if (data[i][j] == "Timestamp" ) {
         var colt = j + 1;
         // Logger.log(colt)
       }
 
       if (data[i][j] == "Category" ) {
         var colcat = j + 1;
         // Logger.log(colcat)
       }
 
       if (data[i][j] == "CSR Submitting Request Email" ) {
         var colc = j + 1;
       }
 
       if (data[i][j] == "QITS/QPulse Reference #" ) {
         var colQ = j + 1; 
       }
     }
   
   var rcount = LastRow1-30; //note3: loop start point
   var nxt = rcount+1;
   var check = sheet.getRange(nxt,cols).getValue();
 
 //note4: loop from rcount  
 while(rcount <= LastRow1){
     var plant = sheet.getRange(nxt,cols).getValue();
     var ts = sheet.getRange(nxt,colt).getValue();
     var qn = sheet.getRange(nxt,colQ).getValue(); 
 
     if(ts != ""){
     var date = Utilities.formatDate(ts, SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "yyyy-MM-dd'T'HH'Z'") //"MM/dd/yyyy"
     }
     var csr = sheet.getRange(nxt,colc).getValue(); 
     var creditvalue = sheet.getRange(nxt,colcv).getValue();
     var category = sheet.getRange(nxt,colcat).getValue();
     
     var day = new Date(); //Todays date
     var day2 = new Date(day.setHours(day.getHours()-1)); //capture all last hour's entries
     var crit = Utilities.formatDate(day2, SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "yyyy-MM-dd'T'HH'Z'"); //note5: use spreadsheet timezone

     
     if(ts != ""){
     if(check != ""){
       if(date == crit){ 
   
      if(plant=="A"){var email = "email1@gmail.com";}
      else if (plant=="B"){var email = "email2@gmail.com";}
      else if (plant=="C"){var email = "email3@gmail.com"+","+"email4@gmail.com";}
      else if (plant=="D"){var email = "email5@gmail.com";}
      else if (plant=="E"){var email = "email6@gmail.com"+","+"email7@gmail.com";}
      else if (plant=="F"){var email = "email8@gmail.com";}
      else if (plant=="G"){var email = "email9@gmail.com";}
      else if (plant=="H"){var email = "email10@gmail.com";}
      else if (plant=="I"){var email = "email11@gmail.com"+","+"email12@gmail.com";}      
          
       if(email != null && date == crit) {
         var message = "<br> Hello, </br><br></br><br> There is a new entry in Credit Authorization Tool, Line: "+nxt+". Update of Credit Memo # and Line closure remains pending.</br>"
          + '<p>Here is a <a href="https://docs.google.com/123456">link</a> to view the request </p>';
          +"<h4><b> This request can be found on Line: "+nxt+"</b></h4>";
         var copy = csr + "," + "email13@gmail.com" + "," + "email14@gmail.com";
         var ns = "email15@gmail.com";
         var subject = plant+ '-new entry in Credit & Debit Authorization File - Line: ' + nxt + ' ' +'credit value $'+ creditvalue + ' ' + 'category ' + category;
         MailApp.sendEmail(email, subject, message, {htmlBody:message,cc:copy})    //live mode
 
 
           if(hasNumber(qn)==true){ 
           var subject1 = 'QITS number '+ qn + ' from ' + plant;
           var message1 = "<br> Hello, </br><br></br><br> There is a new entry in Credit Authorization Tool, Line: "+nxt+". </br>"
           + '<p>Here is a <a href="https://docs.google.com/123456">link</a> to view the request </p>';
           +"<h4><b> This request can be found on Line: "+nxt+"</b></h4>";
           MailApp.sendEmail("email1@gmail.com", subject1, message1, {htmlBody:message1})  // udpate email after test

         }
       }
      }
     }
     }
   if(rcount <= LastRow1){
      rcount = rcount +1;
      nxt = nxt + 1;
      check = sheet.getRange(nxt,cols).getValue(); 
      ts = sheet.getRange(nxt,colt).getValue();
      if(ts != ""){
      date = Utilities.formatDate(ts, SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "yyyy-MM-dd'T'HH'Z'")
      }
 
   }
    
   } //while loop end
   
  
 }
 