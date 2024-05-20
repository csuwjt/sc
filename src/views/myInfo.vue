<script setup>
import {  ref, onMounted } from 'vue';
import Axios from 'axios';


// const name = ref('');
//     const phoneNumber = ref('');

//     const fetchMyInfo = () => {
//       Axios.get('https://sp23.54sher.com/api/v2/auth/myinfo', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token
//         }
//       })
//       .then(response => {
//         const { name: userName, phone: userPhone } = response.data.data;
//         name.value = userName;
//         phoneNumber.value = userPhone;
//       })
//       .catch(error => {
//         console.error('网络错误:', error);
//         // 处理网络错误的逻辑
//       });
//     };

//     onMounted(() => {
//       fetchMyInfo();
//     });

const name = ref("张三")
const phoneNumber = ref('1234567890');

</script>

<template>
  <div id="myInfo">

 
    <div class="header">
        2024CSU暑期打卡

      </div>

   <div class="van-cell-group">
    <van-cell-group title="我的信息">
    <van-cell title="姓名" :value="name" icon="user-o"/>
    <van-cell title="电话" :value="phoneNumber" icon="phone-o"/>
    <van-cell is-link title="所属团队信息" link-type="navigateTo" url="./myteam" />
    </van-cell-group>
  </div>

</div>

</template>



<style scoped>
#myInfo {
  display: flex;
  flex-direction: column;

}
.header {
    background-color: rgb(157,041,050);
    color:white;
    margin:0 auto;
    height: 40px;
    text-align: center;
    font-size:26px;
    width: 330px;
    
}
.van-cell-group {
  width: 330px;
  margin:0 auto;
}
</style>