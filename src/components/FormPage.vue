<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容">
            <template #prepend>
                <el-select v-model="select" placeholder="输入框前置以及可选项">
                    <el-option label="餐厅名" value="1"/>
                    <el-option label="订单号" value="2"/>
                    <el-option label="用户电话" value="3"/>
                </el-select>
            </template>
            <template #append><span style="padding-right: 20px;">输入框后置</span>
                <el-button icon="el-icon-search"/>
            </template>
        </el-input>
        <p>Message is: {{ input }}</p>
        <el-input v-model="message" placeholder="edit me" type="textarea" :autosize="true"/>
        <p>在文本区域插值不起作用，应该使用 v-model 来代替。Message is: {{ message }}</p>
        <br>
        <div>
            <el-checkbox v-model="checked">{{ checked }}</el-checkbox>
        </div>
        <br>
        <div>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"/>
                <el-checkbox label="复选框 B"/>
                <el-checkbox label="复选框 C"/>
                <el-checkbox label="禁用" disabled/>
                <el-checkbox label="选中且禁用" disabled/>
            </el-checkbox-group>
            <span>{{ checkList }}</span>
        </div>
        <br>
        <div>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <span>{{ radio }}</span>
        </div>
        <br>
        <div>
            <el-select style="width: 200px" v-model="selected" placeholder="请选择今晚什么" @change="selectChange">
                <el-option label="请选择吃啥呢" value="" disabled/>
                <el-option label="拉面" value="1"/>
                <el-option label="日料，吃得起吗" value="2" disabled/>
                <el-option v-for="obj in options" :value="obj.value" :label="obj.label" :key="obj.value" :disabled="obj.disabled"/>
            </el-select>
            <span>今天晚上吃的是：{{ selected }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>iOS中&lt;select&gt;初始为未选中状态会导致用户无法选择，所以推荐给一个初始value为空的选项</span>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'FormPage',
        data: function () {
            return {
                input: '',
                message: '',
                select: '',
                checked: false,
                checkList: ["选中且禁用", "复选框 A"],
                radio: '2',
                selected: '',
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶',
                        disabled: true
                    },
                    {
                        value: '选项3',
                        label: '蚵仔煎'
                    },
                    {
                        value: '选项4',
                        label: '龙须面'
                    },
                    {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
            }
        },
        methods: {
            selectChange: function (v) {
                console.log(v)
            }
        }
    }
</script>

<style scoped>
    .el-select {
        width: 130px;
    }
</style>