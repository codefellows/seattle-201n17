// Display and do a count down of 99 bottles of beer on the wall
// When out of beer you should say
// 'No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall...'

function bottlesOfBeer(){
    for(var i = 99; i >= 0; i--) {
        if (i > 0){
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.  Take one down, pass it around, ' + (i-1) + ' bottles of beer on the wall!');
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall...")
        }
    }
};

bottlesOfBeer();
