<template>
    <el-container>
        <el-header>
            <img class="logo" alt="Vue logo" src="./assets/logo.png">
        </el-header>
        <el-container>
            <el-aside width="200px" style="text-align: left;">
                <el-menu :default-active="path" @select="menuClick">
                    <el-menu-item v-for="(item, index) in pathArr" v-bind:key="index" :index="item.path"
                                  :route="{path: item.path}">
                        <i class="el-icon-menu"/>
                        <template #title>{{item.navName}}</template>
                    </el-menu-item>

                    <!--                    <el-menu-item index="1" :route="{path: '/'}">-->
                    <!--                        <i class="el-icon-menu"/>-->
                    <!--                        <template #title>首页</template>-->
                    <!--                    </el-menu-item>-->

                    <!--                    <el-menu-item index="2" v-bind:route="{path: '/404'}">-->
                    <!--                        <i class="el-icon-menu"/>-->
                    <!--                        <template #title>导航二</template>-->
                    <!--                    </el-menu-item>-->

                    <el-menu-item index="3">
                        <i class="el-icon-menu"/>
                        <template #title>导航三</template>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <!--                <HelloWorld msg="Welcome to Your Vue.js App"/>-->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

    export default {
        name: 'App',
        data: function () {
            return {
                pathArr: [
                    {path: '/', name: 'HelloWorld', navName: '首页'},
                    {path: '/DataPage', name: 'DataPage', navName: 'DataPage'},
                    {path: '/IfPage', name: 'IfPage', navName: 'IfPage'},
                    {path: '/OnPage', name: 'OnPage', navName: 'OnPage'},
                    {path: '/FormPage', name: 'FormPage', navName: 'FormPage'},
                    {path: '/ComponentPage', name: 'ComponentPage', navName: 'ComponentPage'},
                    {path: '/CompositionAPIPage', name: 'CompositionAPIPage', navName: 'CompositionAPIPage'},
                    {path: '/EchartsPage', name: 'EchartsPage', navName: 'EchartsPage'},
                    {path: '/404', navName: '未知'},
                ],
                path: window.location.pathname,
            }
        },
        // created() {
        //     this.path = window.location.pathname;// 此处this.$route.path读取的值始终为/，暂时未知为什么无法正确读取path
        // },
        methods: {
            menuClick: function (index, indexPath, routeResult) {
                console.log(index, indexPath, routeResult);
                if (index === '/') {
                    this.$router.push({
                        name: 'HelloWorld',
                        params: {msg: "App to HelloWorld"}
                    });
                } else {
                    this.$router.push({
                        path: index,
                    });
                }
            },
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    .logo {
        height: 60px;
        /* text-align: left; */
        float: left;
    }
</style>
