<template>
    <div>
        <div>
            click time: {{ count }}
            <el-button type="primary" @click="increment">add</el-button>
            <el-button type="primary" @click="reduction" autofocus>--</el-button>
        </div>
        <br>
        <div>
            <el-button type="primary" @click="say('info', 'info')">say info</el-button>
            <el-button type="primary" @click="say('success', 'success')">say success</el-button>
            <el-button type="primary" @click="say('warning', 'warning')">say warning</el-button>
            <el-button type="primary" @click="say('error', 'error')">say errorr</el-button>
        </div>
        <br>
        <div>
            <el-button type="primary" @click="warn($event)">特殊变量 $event</el-button>
        </div>
        <br>
        <div>
            <el-button type="primary" @click="three(), one, two()">多个事件绑定，按照绑定顺序执行，无括号的绑定失败</el-button>
        </div>
    </div>
</template>

<script>
    // import { ElMessage } from 'element-plus';

    export default {
        name: 'OnPage',
        data: function () {
            return {
                count: 0,
            }
        },
        methods: {
            increment: function (ev) {
                this.count++;
                let target = ev.target;
                if (target.nodeName === 'SPAN') {
                    target = ev.target.parentNode;
                }
                target.blur(); // element按钮失焦函数写法，注意判断鼠标点击位置如果是span标签，也是就文字位置时，需要重新更正target，才能正确执行blur()失焦函数
            },
            reduction: function () {
                this.count--;
            },
            say: function (word, type = 'info') {
                // ElMessage(word);
                this.$message[type](word); // element的全局方法，无需引用ELMessage组件
                // switch (type) {
                //     case 'info':
                //         this.$message.info(word);
                //         break;
                //     case 'success' :
                //         this.$message.success(word);
                //         break;
                //     case 'warning' :
                //         this.$message.warning(word);
                //         break;
                //     case 'error' :
                //         this.$message.error(word);
                //         break;
                //     default:
                //         return;
                // }
            },
            warn: function (event) {
                console.log(event);
                // event.preventDefault(); // 通过$event可以访问原生事件
            },
            one: function () {
                console.log('methods 1');
            },
            two: function () {
                console.log('methods 2');
            },
            three: function () {
                console.log('methods 3');
            },
        },
    }
</script>

<style>

</style>