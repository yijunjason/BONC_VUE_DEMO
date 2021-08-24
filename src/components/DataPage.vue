<template>
    <el-header>
        <div>{{ message }}</div>
    </el-header>
    <el-main>
        <div>
            click time: {{ count }}
            <el-button type="primary" @click="increment">add</el-button>
            <el-button type="primary" @click="reduction">add</el-button>
        </div>
        <br/>
        <div>
            计算属性1：【{{ publishedBooksMessage }}】
            计算属性2：【{{ numberChange }}】
        </div>
        <br/>
        <div>
            watch函数需要与监听对象同名
            <el-input v-model="inputValue" placeholder="监听器"/>
            <el-radio v-model="radio" label="1">单选框1</el-radio>
            <el-radio v-model="radio" label="2">单选框2</el-radio>
            <el-checkbox-group v-model="checkBox" @change="checkBoxChange">
                <el-checkbox label="1">多选框A</el-checkbox>
                <el-checkbox label="2">多选框B</el-checkbox>
                <el-checkbox label="3">多选框C</el-checkbox>
                <el-checkbox label="4" disabled>多选框D禁用</el-checkbox>
                <el-checkbox label="5" disabled>多选框E选中且禁用</el-checkbox>
            </el-checkbox-group>
        </div>
        <br/>
        <div>
            class与style的绑定
            <div class="a"></div>
            <div class="a" :class="{ b: b_class, 'border': borderValue}"></div>
        </div>
    </el-main>
</template>

<script>
    export default {
        name: 'DataPage',
        data: function () {
            return {
                message: 'DataPage',
                count: 0,
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ],
                inputValue: '',
                radio: '',
                checkBox: ['5', '1'],
                b_class: true,
                borderValue: '1px solid black'
            }
        },
        methods: {
            increment: function () {
                this.count++;
            },
            reduction: function () {
                this.count--;
            },
            checkBoxChange: function (value) {
                console.log(value)
            }
        },
        computed: {
            publishedBooksMessage: function () {
                return this.books.length > 0 ? 'yes' : 'no';
            },
            numberChange: function () {
                let str = "等于0";
                if (this.count < 0) {
                    str = "负数";
                }
                if (this.count > 0) {
                    str = "正数";
                }
                return str;
            }
        },
        watch: {
            inputValue: function (newValue, oldValue) {
                console.log(newValue, oldValue);
            }
        }
    }
</script>

<style>
    .a{
        width: 20px;
        height: 20px;
        display: inline-block;
        background-color: #42b983;
        margin: 5px;
    }
    .b{
        background-color: #ffee07;
    }
</style>