import Firebase from 'firebase'

export const firebase = Firebase

var config = {
  apiKey: "AIzaSyBABCSHT6xstjv0J_yrG4SVuzDppXgEhLs",
  authDomain: "hakathon2017.firebaseapp.com",
  databaseURL: "https://hakathon2017.firebaseio.com",
  projectId: "hakathon2017",
  storageBucket: "hakathon2017.appspot.com",
  messagingSenderId: "36069079757"
}
const firebaseApp = Firebase.initializeApp(config)

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()

export const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.addScope('email')
provider.setCustomParameters({
  'display': 'popup'
})
