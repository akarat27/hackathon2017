<template>
  <div>
    <h1>Simple trade or view your portfolio</h1>
    <h6>เริ่มต้นด้วยวงเงิน 10,000 บาท</h6>
    <h6>เมนู Facebook เพื่อล็อคอินผ่าน Firebase Authenicate</h6>
    <h6>เมนู Stocks แสดงหุ่น Set50 และราคา สำหรับเลือกหุ้นที่จะซื้อ</h6>
    <h6>เมนู Portfolio สำหรับแสดงจำนวนหุ้นในพอร์ตของเราที่เราซื้อไป</h6>
    <h6>สามารถ save และ load ข้อมูลของ Portfolio ของเราได้</h6>
    <h6>ข้อมูลพอร์ตเราเก็บไว้ที่ Firebase Database</h6>
    <h6>เมนู End day สำหรับใช้สุ่มราคาหุ้นที่เปลี่ยนไปสำหรับวันใหม่</h6>
    <hr>
    <h6>หมายเหตุ: ราคาหุ้นที่แสดงเป็นราคาสมมุติขึ้น</h6>
    <hr>
    <p>Your Funds {{ funds | currency }}</p>
  </div>
</template>
<script>
    export default {
      computed: {
        funds() {
          return this.$store.getters.showFunds
        }
      }
    }
</script>
<style scoped>

</style>
