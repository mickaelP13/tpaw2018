$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    var trigger = 0;

   $("#name").keydown(function(){

     $('#div-name').text($("#name").val().length +' car');
     });
   
$("#firstname").keydown(function(){

 $('#div-first').text($("#firstname").val().length +' car');

});

    $("#submit").on("click",function(){ 
 //console event.preventDefault(); 
  console.log( "click" ); 

    // Y mettre le code jQuery pour valider tous les champs du formulaire
    if ($("#name").val().length>4 && $("#firstname").val().length>4 && $("#mail").val().length>4 && $("#adresse").val().length>4 ){

   /*  $('#myModal').modal("show");
     $(".modal-title").text("Bienvenue "+ $("#name").val());
     $(".modal-body").html('Vous etes né(e) le '+ $("#date").val()+'<br></br><a href="http://maps.google.com/maps?q='+ $("#adresse").val()+'"> <img src="https://maps.googleapis.com/maps/api/staticmap?center='+$("#adresse").val()+ 		',&zoom=13&size=400x400&KEY=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a> <br></br>'
     	+'et vous habitez <a href="http://maps.google.com/maps?q='+ $("#adresse").val()+'">'+ $("#adresse").val()+'</a>');*/
      contactStore.add($("#name").val(), $("#firstname").val(), $("#birth").val(), $("#adresse").val(), $("#mail").val());
list = contactStore.getList()
for(var index in list ){
  
      document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
  '<tr><td>'+list[index].name+'</td><td>'+list[index].firstname+'</td><td>'+list[index].date+'</td><td> <a href="https://maps.google.com/?q='+list[index].adress+'">'+list[index].adress+'</a></td><td><a href="mailto:'+list[index].mail+'">'+list[index].mail+'</td><td>';
}
    
   
 	}
 	else
 	{
 	 $('#myModal').modal("show");
     $(".modal-title").text("EEREUR DE SOUMISSION");
     $(".modal-body").html('REMPLIR TOUT LES CHAMPS');
     
 	}
 });

    $("#gps").on("click",function(){ 
 //console event.preventDefault(); 
  console.log( "click" ); 
  getLocation()
});
});


