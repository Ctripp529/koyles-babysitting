window.onload = run;
function run() {

     bday=  09;
     bmonth= 3;
     
   
dd = parseInt(bday) + 1;
console.log(dd);
mm = parseInt(bmonth) + 1;
console.log(mm);
yy = 2021;


days = new Date();
gdate = days.getDate();
gmonth = days.getMonth();
gyear = days.getFullYear();
if (gyear < 2000) gyear += 1900;
age = gyear - yy;
if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) 
	{
	age = age; 
	} 
else 
	{
	if (mm <= (gmonth)) 
		{
		age = age;
		} 
	else 
		{
		age = age - 1; 
   		}
	}
if (age == 0) age = age;
document.getElementById('age').innerHTML += age + " year & ";
console.log(age);
//document.agecalc.timealive.value = "You are " + age+ " years old . . .\n\n";

if (mm <= (gmonth + 1)) age = age - 1;
if ((mm == (gmonth + 1)) && (dd > parseInt(gdate))) age = age + 1;
var m;
var n; 
//////////////DOCUMENTED CORRECTIONS AND COMMENTS - by Maurici Cardo Jordi //////////// 
var p;                                                                                                    ////////ADDED VAR p //////////
if (mm == 12) n = 31 - dd;                                                               ///////////n is days to end year///
if (mm == 11) n = 61 - dd;                                                               //////////mm is birthday month///////////////////
if (mm == 10) n = 92 - dd;
if (mm == 9) n = 122 - dd;
if (mm == 8) n = 153 - dd;
if (mm == 7) n = 184 - dd;
if (mm == 6) n = 214 - dd;
if (mm == 5) n = 245 - dd;
if (mm == 4) n = 275 - dd;
if (mm == 3) n = 306 - dd;
if (mm == 2) { n = 334 - dd; if (leapyear(yy)) n++; }
if (mm == 1) { n = 365 - dd; if (leapyear(yy)) n++; }                                   //////m is birthday days from new year/////////////////

if (gmonth == 0) m = 0;																				//////////Added this: m=0/////////////////////////////////////		  
if (gmonth == 1) m = 31;                                                             
if (gmonth == 2) {m = 59; if (leapyear(gyear)) m++;}              
if (gmonth == 3)  { m = 90;  if (leapyear(gyear)) m++; }          
if (gmonth == 4)  { m = 120; if (leapyear(gyear)) m++; }         
if (gmonth == 5)  { m = 151; if (leapyear(gyear)) m++; }         
if (gmonth == 6)  { m = 181; if (leapyear(gyear)) m++; }         
if (gmonth == 7)  { m = 212; if (leapyear(gyear)) m++; }         
if (gmonth == 8)  { m = 243; if (leapyear(gyear)) m++; }         
if (gmonth == 9)  { m = 273; if (leapyear(gyear)) m++; }         
if (gmonth == 10) { m = 304; if (leapyear(gyear)) m++; }        
if (gmonth == 11) { m = 334; if (leapyear(gyear)) m++; }        

months = age * 12;
months += 13 - parseInt(mm);                                                                 
months += gmonth; 
totdays = (parseInt(age) * 365);
totdays += age / 4;
totdays = parseInt(totdays) + gdate + m + n;                                           //////////////////////correction for leap years!//////////////

if (gmonth == 0) {p=gdate;}                                                                        ////////////////////Added this//////////////////////////////
if (gmonth == 1) {p = 31 + gdate; if (leapyear(gyear)) m = m+1;}              ////////////////////February///////////////////////////////

if (gmonth == 2) {p = 59 + gdate; if (leapyear(gyear)) m = m+1; p++;}      //////////////////added p++////////////////////////////////
if (gmonth == 3)  { p = 90 + gdate;  if (leapyear(gyear)) p++; }       
if (gmonth == 4)  { p = 120 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 5)  { p = 151 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 6)  { p = 181 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 7)  { p = 212 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 8)  { p = 243 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 9)  { p = 273 + gdate; if (leapyear(gyear)) p++; }      
if (gmonth == 10) { p = 304 + gdate; if (leapyear(gyear)) p++; }     
if (gmonth == 11) { p = 334 + gdate; if (leapyear(gyear)) p++; }     
weeks = (age * 365) + n + p; 
/////////////age*365 + days to end year(birth year) + p (days from new year to today)////////

weeks = weeks / 7;
etcdays = parseFloat(weeks) - parseInt(weeks);
etcdays = Math.round(etcdays * 7);
weeks = parseInt(weeks);
etcdays += parseInt(age / 4);           
if (etcdays > 7) weeks += parseInt(etcdays / 7); 

document.getElementById('age').innerHTML += months + " months";
console.log(months);   
//document.agecalc.timealive.value += "     or " + months + " months old\n";
//document.agecalc.timealive.value += "     or " + weeks + " weeks old\n";
//document.agecalc.timealive.value += "     or " + totdays + " days old\n";
var time = new Date();
ghour = time.getHours();
gmin = time.getMinutes();
gsec = time.getSeconds(); 
hour = ((age * 365) + n + p) * 24;
hour += (parseInt(age / 4) * 24);                                                        /////////////////////////correction for leap years: //////////////////
// document.getElementById('age').innerHTML += "     or " + hour + " hours old\n";
var min = (hour * 60) + gmin;
// document.getElementById('age').innerHTML += "     or " + min + " minutes old\n";
sec = (min * 60) + gsec;
// document.getElementById('age').innerHTML += "     or " + sec + " seconds old";
mm = mm - 1;                                                                                                /////////////////////mm was the birthday month//////////////////
var r;
if (mm == 0) r = 0;                                                                                         ////////////////////// r is days from new year to birthday//////////
if (mm == 1) r = 31;
if (mm == 2) { r = 59; if (leapyear(gyear)) m++; }
if (mm == 3)  { r = 90;  if (leapyear(gyear)) r++; }
if (mm == 4)  { r = 120; if (leapyear(gyear)) r++; }
if (mm == 5)  { r = 151; if (leapyear(gyear)) r++; }
if (mm == 6)  { r = 181; if (leapyear(gyear)) r++; }
if (mm == 7)  { r = 212; if (leapyear(gyear)) r++; }
if (mm == 8)  { r = 243; if (leapyear(gyear)) r++; }
if (mm == 9)  { r = 273; if (leapyear(gyear)) r++; }
if (mm == 10) { r = 304; if (leapyear(gyear)) r++; }
if (mm == 11) { r = 334; if (leapyear(gyear)) r++; }
mm = mm + 1;
r = parseInt(r) + parseInt(dd); 
////////////////////////dd was birthday day of month/////////// 

if ((mm >= (gmonth + 1)) && (dd > gdate)) 
	{
	bday = r - m - gdate; 
	}
else 
	{
	if ((leapyear(gyear)) && ((mm > 2) && (dd < 29))) 
		{
		a = 366;
		}
	 else 
	 	{
		a = 365;
		}
	bday = a + (r - m - gdate);                                            
	/////////a is size days of year///////////////////// 
	}
nhour = 24 - parseInt(ghour);
nmin = 60 - parseInt(gmin);
nsec = 60 - parseInt(gsec);
while (bday > 366) bday -= 365;
if (((bday == 366) && (leapyear(gyear)) || ((bday == 365) && (!leapyear(gyear))))) {
     // document.getElementById('age').innerHTML += "\n\nAnd, today is your birthday!";
} else {
//      document.getElementById('age').innerHTML += "\n\nAnd, your next birthday is in:\n"
// + bday + " days " + nhour + " hrs " + nmin + " mins " + nsec + " secs";
// setTimeout("run()", 1000);
   }
}
function leapyear(a) {
if (((a%4 == 0) && (a%100 != 0)) || (a%400 == 0))
return true;
else
return false;
}
//  End -->