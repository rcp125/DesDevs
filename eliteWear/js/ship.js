function CalculateOrder(form)
{

if (form.os1.value == "UPS Ground - $8.00")
 {
 form.shipping.value = "8.00";
 }
 
if (form.os1.value == "UPS 2 Day - $20.00")
 {
 form.shipping.value = "20.00";
 }

if (form.os1.value == "UPS Overnight - $30.00")
 {
 form.shipping.value = "30.00";
 }
 
if (form.os1.value == "USPS Priority Mail - $8.25")
 {
 form.shipping.value = "8.25";
 } 

 if (form.os1.value == "Rutgers Pick Up - No Charge")
 {
 form.shipping.value = "0.00";
 } 
}  