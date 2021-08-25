<template>
    <div :style="{ fontSize: postFontSize + 'px'}">
        <ComponentP
                v-for="post in posts"
                :title="post.title"
                :key="post.id"
                :color="post.color"
                @enlarge-text="enlargeText($event)"
                @reduceText="reduceText($event)"
        >点击
        </ComponentP>
        <!--        在单文件组件里，父组件分发事件所使用@enlarge-text和@reduceText，两种写法都是接受的-->
        <!--        可以使用v-model:modelValue以及update:modelValue这两个语法糖作为组件传值和传递回调的简化写法-->
        <!--        <ComponentP v-model:title="modelValue">组件内部使用$emit('update:title', $event.target.value)进行回调，这样省略了@enlarge-text和@reduceText</ComponentP>-->
    </div>
</template>

<script>
    import ComponentP from "./ComponentP";

    export default {
        name: 'ComponentPage',
        components: {
            ComponentP,
        },

        data: function () {
            return {
                posts: [
                    {id: 1, title: 'My journey with Vue', color: 'rgb(255, 0, 0)'},
                    {id: 2, title: 'Blogging with Vue', color: 'rgb(0, 255, 0)'},
                    {id: 3, title: 'Why Vue is so fun', color: 'rgb(0, 0, 255)'}
                ],
                postFontSize: 20,
                modelValue: 'v-model语法糖'
            }
        },
        provide: function () {
            return {
                provideData: 'from long range props'
            }
        },
        methods: {
            enlargeText: function (v) {
                console.log('enlarge text', v);
                this.postFontSize += v;
            },
            reduceText: function (v) {
                console.log('reduce text', v);
                this.postFontSize -= v;
            }
        }
    }
</script>

<style>

</style>