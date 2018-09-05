// Write your JavaScript code here!

// var pluto = document.getElementById( 'planets' ).options[ index ];

var planets = [
  [ 'Pluto', 0.06 ],
  [ 'Neptune', 1.148 ],
  [ 'Uranus', 0.917 ],
  [ 'Saturn', 1.139 ],
  [ 'Jupiter', 2.640 ],
  [ 'Mars', 0.3895 ],
  [ 'Moon', 0.1655 ],
  [ 'Earth', 1 ],
  [ 'Venus', 0.9032 ],
  [ 'Mercury', 0.377 ],
  [ 'Sun', 27.9 ]
];

function findMatch( planetName ){
  console.log( 'Finding match...' )
  for( let i = 0; i < planets.length; ++i ){
    if( planets[ i ][ 0 ] == planetName ){
      console.log( 'Match found' );
      return planets[ i ][ 1 ];
    }
  }
}

// Works
function addOptions(){
  console.log( 'Adding options...' );
  var dropDown = document.getElementById( 'planets' );
  planets.reverse();
  planets.forEach( ( element ) => {
    var option = document.createElement( 'option' );
    option.text = element[ 0 ];
    dropDown.appendChild( option );
  } )
  console.log( 'Options added...' );
}

// New; Requires Testing
function findPlanet( str ){
  console.log('finding planet...')
  var planetsList = document.getElementById( 'planets' );
  // planetsList.forEach( ( elem ) => {
  //   index++;
  //   if( planetsList.options[ elem ].text === str ){
  //     return index;
  //   }
  // })
  for( let index = 0; index < planetsList.length; ++index){
    if( planetsList.options[ index ].text === str ){
      console.log( index );
      return index;
    }
  }
}

// New; Requires Testing
function removePluto(){
  var index = findPlanet( 'Pluto' );
  var planets = document.getElementById( 'planets' ).remove( index );
 }

 // Works
function calculateWeight( weight, planetName ){
  console.log( 'Calculating weight...' );
  var modifier = findMatch( planetName );
  console.log( 'Modifier: ' + modifier );
  var result = weight * modifier;
  return result;
}

// Works
function handleClickEvent(){
    console.log( 'Handling click event...' );
    var userWeight = document.getElementById('user-weight').value;
    console.log( typeof( userWeight ) );
    var index = document.getElementById('planets').selectedIndex;
    var planetName = document.getElementById('planets').options[index].text;
    var result = calculateWeight( userWeight, planetName );
    var str = 'If you were on ' + planetName +', you would weigh ' + result + 'lbs!';
    document.getElementById('output').innerText = str; // or result?
    console.log( result );
}

window.addEventListener( 'DOMContentLoaded', ( e ) => {
  var button = document.getElementById( 'calculate-button' );
  button.addEventListener( 'click', handleClickEvent );
  var checkbox = document.getElementById( 'pluto-box' );
  checkbox.addEventListener( 'change', removePluto );
  addOptions();
});
