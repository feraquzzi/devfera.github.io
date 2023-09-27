const firebaseConfig = {
    apiKey: "AIzaSyDVg41YrvhmlUnDZVIcOrtr7EKCJe3-QSw",
    authDomain: "devfera-20bff.firebaseapp.com",
    databaseURL: "https://devfera-20bff-default-rtdb.firebaseio.com",
    projectId: "devfera-20bff",
    storageBucket: "devfera-20bff.appspot.com",
    messagingSenderId: "177992932641",
    appId: "1:177992932641:web:d282b04882e02ea78c7260"
  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages'); 

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(firstname, lastname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
  //console.log('hello')
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message
  });
}
