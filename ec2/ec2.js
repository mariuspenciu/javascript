//------------------------------------------
function citeste()
{
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  
  var coef = [a, b, c];
  return coef;
}
//------------------------------------------
function calcul_delta(coeficienti)
{
	return coeficienti[1] * coeficienti[1] - 4 * coeficienti[0] * coeficienti[2];
}
//------------------------------------------
function calcul_radacini(coef, delta)
{
  var x1_re, x1_im, x2_re, x2_im;
	
  if (delta >= 0){
	x1_re = (-coef[1] - Math.sqrt(delta)) / (2 * coef[0]);
	x1_im = 0;
	x2_re = (-coef[1] + Math.sqrt(delta)) / (2 * coef[0]);
	x2_im = 0;
  }
  else{
	x1_re = (-coef[1]) / (2 * coef[0]);
	x1_im = -Math.sqrt(-delta) / (2 * coef[0]);
	x2_re = (-coef[1]) / (2 * coef[0]);
	x2_im = + Math.sqrt(-delta) / (2 * coef[0]);
  }	
  var v = [x1_re, x1_im, x2_re, x2_im];
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
	if (radacini[1] >= 0)
	document.getElementById("x1").innerHTML = radacini[0].toString() + "+" + radacini[1].toString() + "i";
else
	document.getElementById("x1").innerHTML = radacini[0].toString() + radacini[1].toString() + "i";

	if (radacini[3] >= 0)
	document.getElementById("x2").innerHTML = radacini[2].toString() + "+" + radacini[3].toString() + "i";		
else
	document.getElementById("x2").innerHTML = radacini[2].toString() + radacini[3].toString() + "i";		
}
//------------------------------------------