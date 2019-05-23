var categories = [];categories["menuList"] = ["New Jersey","New York","California","Maryland"]

categories["New Jersey"] = ["Somerset","Middlesex","Monmouth"];
categories["New York"] = ["Saratoga","Putnam","Suffolk"];
categories["California"] = ["Los Angeles","Orange","Solano"];
categories["Maryland"] = ["Montgomery","Harford","Baltimore"];
categories["Somerset"] = ["Hillsborough","Somerville","Bridgewater"];
categories["Middlesex"] = ["Edison","New Brunswick","Piscataway"];
categories["Monmouth"] = ["Freehold","Middletown","Asbury Park"];
categories["Saratoga"] = ["Clifton Park","Wilton","Ballston"];
categories["Nassau"] = ["Roslyn","Mineola","Westbury"];
categories["Westchester"] = ["Yonkers","Rye","Tarrytown"];
categories["Los Angeles"] = ["Los Angeles","Pasadena","Santa Monica"];
categories["Orange"] = ["Irvine","Anaheim","Tustin"];
categories["Solano"] = ["Fairfield","Rockville","Dixon"];
categories["Montgomery"] = ["Rockville","Bethesda","Germantown"];
categories["Harford"] = ["Bel Air","Aberdeen","Abingdon"];
categories["Anne Arundel"] = ["Anapolis","Russett","Millersville"];

var numberList = 3; // number of lists in the set

function fillSelect(currCat,currList){
var step = Number(currList.name.replace(/\D/g,""));

for (i=step; i<numberList+1; i++) {
document.forms[0]['List'+i].length = 1;
document.forms[0]['List'+i].selectedIndex = 0;}

var nCat = categories[currCat];
for (each in nCat) {
var nOption = document.createElement('option'); 
var nData = document.createTextNode(nCat[each]); 
nOption.setAttribute('value',nCat[each]); 
nOption.appendChild(nData); 
currList.appendChild(nOption); 
} 
}

function getValue(isValue) {

switch(isValue)
{
	case "Hillsborough":
		window.open("hillsborough.html");
		break;

	case "Somerville":
		window.open("somerville.html");
		break;

}
}

function init() {
fillSelect('menuList',document.forms[0]['List1'])
}

navigator.appName == "Microsoft Internet Explorer" ? attachEvent('onload', init, false) : addEventListener('load', init, false);	
