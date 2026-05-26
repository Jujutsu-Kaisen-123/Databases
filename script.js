const firebaseConfig = {
    apiKey: "AIzaSyBPMmDG1D5meUlVJ0QnwEuYwnc-9Mt5bGw",
  authDomain: "shopping-list-f4de7.firebaseapp.com",
  databaseURL: "https://shopping-list-f4de7-default-rtdb.firebaseio.com",
  projectId: "shopping-list-f4de7",
  storageBucket: "shopping-list-f4de7.firebasestorage.app",
  messagingSenderId: "405729694759",
  appId: "1:405729694759:web:01770748a583900b282a02",
  measurementId: "G-WGFKGPB1VL"
  };

firebase.initializeApp(firebaseConfig);

function addItem(){
  var item= document.getElementById("input").value;

  firebase.database().ref("/").child(item).update({
    purpose: "123",
  })

  firebase.database().ref("/").on("value",function(snapshot){
    document.getElementById("output").innerHTML=""

    snapshot.forEach(function(childSnapshot){
      item=childSnapshot.key

      createtag="<p>"+item+"</p>"

      document.getElementById("output").innerHTML+= createtag
    })
  })
}

function killItem(){
  var kill_item = document.getElementById("input").value;
  firebase.database().ref("/").child(kill_item).remove()

}
  
