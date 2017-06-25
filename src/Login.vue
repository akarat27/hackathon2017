<template>
  <div class="container-fluid">
    <p>Please login</p>
    <a class="facebook" href="#" @click="facebook_signon">Facebook</a>
  </div>
</template>
<script>
  import {firebase, provider ,db} from './firebase/firebase'
    export default {
      methods : {
        facebook_signon() {
          console.log(">>facebook_signon()")
          var vm = this
          firebase.auth().signInWithPopup(provider).then(function (accessFacebook) {
            // console.log(result)
            var token = accessFacebook.credential.accessToken
            var user = accessFacebook.user // user.uid
            var profile = {
              name: accessFacebook.user.displayName
            }
            vm.$store.dispatch('setProfile',profile)
            vm.$router.push('/main')
          }).catch(function (response) {
            // error callback
            console.log(response)
          })
        }
      }
    }
</script>
<style scoped>
  .facebook {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: 120px;
    height: 40px;
    padding-top: 10px;
    border: 0px solid #178bb6;
    border-radius: 8px;
    background: #3b5998;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    margin-right: 10px;
  }
</style>
