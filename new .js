function counter(callback){
    let count = 1;
function counting(){
    if( count <= 5){
        callback(count);
        count ++;
        setTimeout(counting, 1000);
    }
}
counting();
}
counter((num)=> console.log(num))
// writing name in different ways with a callback function
function formatName(firstName,lastName, callback){
    setTimeout ( () => {
        console.log(`${firstName}  ${lastName}`)
    },5000)
}
formatName("BAHO","HELA")
formatName("helaBaho", 'THST')