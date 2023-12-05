import { defineStore } from 'pinia'
//操作模板
export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '以和为贵',
            age: 20
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        },
        updateAge(age: number) {
            this.age = age
        }
    }
})

//xxx.vue文件
// <template>
//     <div>名字:{{ userStore.name }}</div>
//     <div>年纪:{{ userStore.age }}</div>
// </template>
// <script lang="ts" setup>
// import { useUserStore } from '@/store/user'
// const userStore = useUserStore()
// </script>
