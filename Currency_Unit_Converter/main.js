//References
let input = document.getElementById('input');
let output = document.getElementById('output');
let currency = document.getElementById('currency');
//Functions of main logics
function inx()
{
if(input.value ==1)
{
    document.getElementById('inr').disabled = true;
    document.getElementById('i').disabled = true;
    document.getElementById('n').disabled = true;
}
else if(input.value==1.6)
{
    document.getElementById('npr').disabled = true;
    document.getElementById('i').disabled = true;
    document.getElementById('n').disabled = true;
}
}
function convert()
{
let a = currency.value;
let b = input.value;
let c = output.value;
let typ = "";
let data = 0;
//writing its main logic
 if(b==1 && c==1.6)
 {
 data = a*1.6;
typ = "Nepali Currency"
 }else if(b==1.6 && c==1)
 {
data = a/1.6;
typ = "Indian Currency";
 }else
 {
    alert("Error")
 }
 document.getElementById('print').innerHTML = typ+" : "+data+" Rs";
}