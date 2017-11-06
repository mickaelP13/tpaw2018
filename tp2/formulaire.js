function valider(){
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var adresse = document.getElementById("adresse").value;
	var mail = document.getElementById("mail").value;
	if (nom.length<5 || prenom.length<5 || adresse.length<5 || mail.length <5 )
	{
		document.querySelector("#error").style.visibility="visible";
		document.querySelector("#resultat").style.visibility="hidden";
		document.getElementById("error").innerHTML = "les champs doivent contenir 5 caracteres";
	
	}

	else{
		document.querySelector("#error").style.visibility="hidden";
	document.querySelector("#resultat").style.visibility="visible";
	document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
	
}
}