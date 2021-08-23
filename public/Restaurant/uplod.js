function saveData(){
    let name=document.getElementById("name");
    let price=document.getElementById("price");

    let key = firebase.database().ref("data").push().key
    let res ={
        name:name.value,
        price:price.value
    }
    firebase.database().ref("data/"+key).set(res)
}


function getFirebaseData(){
    firebase.database().ref('data').once('value',function(data){

    })
}
getFirebaseData(

)



