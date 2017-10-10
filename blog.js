function setDisplayById( id, display ) {
    const el = document.getElementById(id);
    if (el) {
	el.style.display = display;
    }
}

function revealContent(){
    console.log( "Inside reveal content" );
    setDisplayById("excerpt", "none" );
    setDisplayById("full", "inline-block" );
    setDisplayById("th", "none" );
}

function sayThanks() {
    setDisplayById( "thanks", "inline-block" );
    setTimeout( function() {
	setDisplayById( "thanks", "none" );
    }, 5000 );
}

function showAltMessage() {
    setDisplayById( "myad", "inline-block" );
    setDisplayById("th", "none" );
    setTimeout( function() {
	revealContent();
	setDisplayById( "myad", "none" );
    }, 10*1000 );
    console.log( "Hmm, you won't contribute, OK" );
}

TeddyHydeClient.onDecline( function() {
    showAltMessage();
    console.log( "Hey, we declined to pay!!!" );
});

TeddyHydeClient.onContribution( function() {
    sayThanks();
    revealContent();
});

TeddyHydeClient.onAlreadyPaid( function() {
    revealContent();
});

TeddyHydeClient.onTx( function( data ) {
    console.log( "Got tx", data );
    TeddyHydeClient.logTx( data );
});

TeddyHydeClient.onLoadFailed( function() {
    console.log( "Failed to load it!!!" );
});
