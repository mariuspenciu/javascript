//------------------------------------------
function citeste()
{
  var _a = document.getElementById("a").value;
  var _b = document.getElementById("b").value;
  var _c = document.getElementById("c").value;
  
var coef = {a:_a, b:_b, c:_c};
  return coef;
}
//------------------------------------------
function calcul_delta(coeficienti)
{
	return coeficienti.b * coeficienti.b - 4 * coeficienti.a * coeficienti.c;
}
//------------------------------------------
function calcul_radacini(coef, delta)
{
  var x1, x2;
	
  if (delta >= 0){
	x1 = {re:(-coef.b - Math.sqrt(delta)) / (2 * coef.a), im:0};
	x2 = {re:(-coef.b + Math.sqrt(delta)) / (2 * coef.a), im:0};
  }
  else{
	x1 = {re:(-coef.b) / (2 * coef.a), im: -Math.sqrt(-delta) / (2 * coef.a)};
	x2 = {re:(-coef.b) / (2 * coef.a), im: + Math.sqrt(-delta) / (2 * coef.a)};
  }	
  var v = {x1:x1, x2:x2};
  return v;
}
//------------------------------------------
function rezolva()
{
  var coef = citeste();
  var delta = calcul_delta(coef);
  var radacini = calcul_radacini(coef, delta);
  afiseaza(radacini);
}
//------------------------------------------
function afiseaza(radacini)
{
	if (radacini.x1.im >= 0)
	document.getElementById("x1").innerHTML = radacini.x1.re.toString() + "+" + radacini.x1.im.toString() + "i";
else
	document.getElementById("x1").innerHTML = radacini.x1.re.toString() + radacini.x1.im.toString() + "i";

	if (radacini.x2.im >= 0)
	document.getElementById("x2").innerHTML = radacini.x2.re.toString() + "+" + radacini.x2.im.toString() + "i";		
else
	document.getElementById("x2").innerHTML = radacini.x2.re.toString() + radacini.x2.im.toString() + "i";		
}
//------------------------------------------