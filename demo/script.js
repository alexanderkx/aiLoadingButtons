var effect1 = document.querySelectorAll( '.circle .btn' );
for ( var i = 0; i < effect1.length; i++ ) {
    effect1[i].addEventListener( 'click',(function (e){
        e.preventDefault();
        this.classList.toggle("btn-load--circle");
  }));  
}

var effect2 = document.querySelectorAll( '.circle_only .btn' );
for ( var i = 0; i < effect2.length; i++ ) {
    effect2[i].addEventListener( 'click',(function (e){
        e.preventDefault();
    	this.classList.toggle("btn-load--circle-only");
  }));  
}