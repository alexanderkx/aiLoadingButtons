var elem = document.querySelectorAll( '.btn' );

  
for ( var i = 0; i < elem.length; i++ ) {
    elem[i].addEventListener( 'click',(function (e){
        e.preventDefault();
    	this.classList.toggle("btn-load--circle");
  }));  
}