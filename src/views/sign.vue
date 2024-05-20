<script setup>
    import { RouterView } from 'vue-router';
    import {ref} from 'vue';
    import { Tabbar,TabbarItem } from 'vant';
import { onActivated } from 'vue';
    const items = ref([
        {date:'2023-07-09'},
        {date:'2023-07-09'},
        {date:'2023-07-09'},
        {date:'2023-07-09'},
        {date:'2023-07-09'}
    ]);
    components:{
        Tabbar,
        TabbarItem
    }


</script>


<template>
<div class="fixing">
    <div class="record">
        我的签到记录
    </div>
<ul>
    <li v-for="(item,index) in items" class="container">        
            <div class="text">
                第{{index+1}}次打卡
            </div>
            <div class="date">
                日期:{{ item.date }}
            </div>
    </li>
</ul>
</div>

<div class="tabbar">
  <van-tabbar v-model="onActivated">
    <van-tabbar-item to="/" icon="passed">签到</van-tabbar-item>
    <van-tabbar-item replace to = "/myHome" icon="user">我的</van-tabbar-item>
    <!-- replace to="/search"属性实现路由 -->
  </van-tabbar>
   
</div>
<!-- 底部安全区 -->
<div class="van-safe-area-bottom"></div>

</template>

<style scoped>
.text{
    margin:0 12px;
}
.record{
    display: block;
    width: 100%;
    margin: 0 12px;
    height: 32px;
    line-height: 30px;
    color: #a8a4a4;
}
.fixing{
    height: calc(100%-50px);
}
.container{
    display:flex;
    padding: 4px;
    line-height: 64px;
    list-style: none;
    height: 80px;
    border-top:1px solid rgb(206, 206, 206);
}

.date{
    padding: 0 12px ;
    margin-left: auto;

    color: #a8a4a4;
}
.tabbar {
  position: fixed;
  width: 100%; 
  height: 50px; 
  bottom: 0;
  z-index: 999;
}

</style>