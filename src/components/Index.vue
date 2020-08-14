<template>
    <el-menu>
        <el-submenu v-for="(item, index ) in $router.options.routes" :index="index+''">
            <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2 ,indx2)  in item.children" :index="index2+''">{{item2.name}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
