<template>
    <div>
        <p :style="{color: color}">
            {{ title }}
            <el-button type="primary" @click="buttonClick(), lostBlur($event)">
                <slot></slot>
            </el-button>
            {{count}}
            <el-button type="primary" @click="$emit('enlargeText', 2), lostBlur($event)">放大所有</el-button>
            <el-button type="primary" @click="$emit('reduceText', 3), lostBlur($event)">缩小所有</el-button>
        </p>
        <p>inject, come from long range props {{ this.provideData }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ComponentP',
        // props: ['title', 'color'],
        props: {
            title: String,
            color: {
                type: String, // 类型不同时，控制台产生警告，但是除非逻辑错误，否则组件会继续渲染
                required: true, // 当无值时或者undefined时，控制台产生警告，但是除非逻辑错误，否则组件会继续渲染
                default: 'rgb(0, 0, 0)', // default存在的情况下，required不会在控制台产生任何警告
            },
        },
        // emits: ['enlargeText'], // 暂时未发现不用该属性的后果
        emits: {
            enlargeText: null,
        },
        data: function () {
            return {
                count: 0,
            }
        },
        inject: ['provideData'],
        methods: {
            lostBlur: function(ev) {
                let target = ev.target;
                if (target.nodeName === 'SPAN') {
                    target = ev.target.parentNode;
                }
                target.blur();
            },
            buttonClick: function () {
                this.count++;
            }
        },
    }
</script>