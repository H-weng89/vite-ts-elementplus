<template>
  <div class="main_wra">
    <div class="main_header">
      xxxx
    </div>
    <div class="main_menu">
        <el-menu
        active-text-color="#f40"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        @select="handleOpen"
      
        router
      >
        <el-sub-menu :index="item.title" v-for="(item, index) in newMenus" :key="item.id">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.title}}</span>
          </template>
          <template  v-for="(child, index) in item.children" :key="child.id" >
<el-menu-item :index="'/'+item.name+'/'+child.name" v-if="!child.hidden" >{{child.title}}</el-menu-item>
          </template>
            

</el-sub-menu>
      </el-menu>
    </div>
    <div class="main_content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue'
import {userInfo} from '@/api'
import {useStore} from 'vuex'
export default {
  name: '',
  setup(prop,emit) {
    console.log(prop,emit)
    const store = useStore()
    console.log('1-开始创建组件-setup')
    const data = reactive<{name:string}>({
        name:'1'
    })
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    let newMenus = ref(store.getters.getNewMenus)
    
    onMounted(() => {
   

      
      
      
    })
    const handleOpen = (key:string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
    return {
      ...toRefs(data),
      handleClose,
      handleOpen,
      newMenus
    }
  },
}

</script>
<style scoped lang='less'>
.main_wra{
    position: relative;
    height: 100%;
    .main_header{
        height: 70px;
        background-color: aqua;
       

    }
    .main_menu{
        position: absolute;
        top: 70px;
        left: 0;
        height:calc(~"100vh - 70px");
        width: 250px;
        background-color: aquamarine;
    }

    .main_content{
position: absolute;
top: 70px;
left: 250px;

width: calc(~"100vw - 250px");
 height:calc(~"100vh - 70px");    }
}
</style>