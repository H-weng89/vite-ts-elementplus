<template>
  <div>
 <MyPie :data="data.result.data.salePie"></MyPie>

  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onBeforeMount, onMounted,provide } from 'vue'
import {getAdminStat} from '@/api'
import MyPie from './components/MyPie.vue'
 onBeforeMount(async()=>{
        data.result = await getAdminStat()
       
      })
        const data = reactive({ 
          result:{
            data:{
              salePie:[]
            }
        
          }
        });
     
        
    



</script>
<style scoped lang='less'>
</style>