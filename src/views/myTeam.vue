<script setup>
import Axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const teamname = ref('11');
const teacher = ref('张三');
const leader = ref('3');
const institute = ref('2');
const local = ref('4');

// const fetchTeamData = () => {
//       Axios.get("https://sp23.54sher.com"+'/api/v2/team/myteam', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token
//         }
//       })
//       .then(response => {
//         if (!response.data.data) {
//           alert('您的队伍不存在');
//           setTimeout(() => {
//             router.push({ name: "info" });
//           }, 2000);
//         } else {
//           const { name, teacher, leader, academy, location } = response.data.data;
//           teamname.value = name;
//           teacher.value = teacher;
//           leader.value = leader;
//           institute.value = academy;
//           local.value = location;
//         }
//       })
//       .catch(error => {
//         console.error('网络错误:', error);
//         alert('网络错误');
//       });
//     };

//     onMounted(() => {
//       fetchTeamData();
//     });

</script>



<template>
<div id="myTeam">
    
     <div class="header">

<van-button  size= "small" to="/myInfo" icon="arrow-left" color="rgb(157,041,050)"
loading-text="加载中..." ></van-button>

        <span>2024CSU暑期打卡</span>
        
    </div>
   <div class="van-cell-group">
    <van-cell-group title="我的团队信息">
    <van-cell title="团队名称" :value="teamname" />
    <van-cell title="指导老师" :value="teacher" />
    <van-cell title="团队队长" :value="leader"/>
    <van-cell title="所属学院" :value="institute"/>
    <van-cell title="实践地点" :value="local"/>
</van-cell-group>
</div>
</div>


<!-- 底部安全区 -->
<div class="van-safe-area-bottom"></div>
</template>


<style scoped>
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
.van-button {
  float: left;
  margin-left: 10px;
  margin-top: 4px;

}
.span {
  margin-left: 5px;
}
</style>