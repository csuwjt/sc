<script setup>
    import { RouterView } from 'vue-router'
    import { Tabbar,TabbarItem,Uploader } from 'vant';
    import { onActivated } from 'vue';
    import { ref } from 'vue';
    import {Image as VanImage} from 'vant';

    components:{
        Tabbar,
        TabbarItem
    }
    const activeTab = ref(1);

    const fileList = ref([]);



    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };

</script>


<template>
    <div id="myHome">
        <!-- <van-image 
        round 
        fit="cover"
        src="" 
        class="Image"/> -->
        <div class="Image">
        
        <van-uploader 
        v-model="fileList"
        preview-size="200"
        :after-read="afterRead" 
        reupload 
        max-count="1"
        :deletable=false 
        />
        </div>
        <div class="message">
            <router-link to="/myInfo"  class="setInner">个人信息</router-link>
            <router-link to="/sign" class="setInner">签到记录</router-link>
        </div>
        <img src="../assets/版权标识.png" class="logo">
    </div>

    <div class="tabbar">
  <van-tabbar v-model="activeTab" >
    <van-tabbar-item to="/" icon="passed">签到</van-tabbar-item>
    <van-tabbar-item replace to = "/myHome" icon="user">我的</van-tabbar-item>
    <!-- replace to="/search"属性实现路由 -->
  </van-tabbar>
   
</div>

<!-- 底部安全区 -->
<div class="van-safe-area-bottom"></div>
</template>

<style scoped>

#myHome{
    display: flex;
    flex-direction: column;
    text-align: center;
}


.Image{

    margin: 80px auto 48px;
    width:200px;
    height: 200px;
    /* background-color: rgb(231, 231, 231); */
}

.logo{
    margin: 0 auto;
    width: 400px;
}

.message{
    
    display: flex;
    margin: 20px auto;
    width: 320px;

    flex-direction: column;
}

.setInner{
    color: #FFF;
    font-size: large;
    height: 70px;
    line-height: 70px;
    border-radius: 50px;
    margin: 0 0 48px;
    text-decoration: none;
    padding: 0;
    background-color: rgb(157, 041, 050);
}
.tabbar {
  position: fixed;
  width: 100%; 
  height: 50px; 
  bottom: 0;
  z-index: 999;
}


</style>