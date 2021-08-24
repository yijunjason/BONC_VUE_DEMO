<template>
    <div>
        <p v-if="bool_one">v-if的值为true</p>
        <p v-if="bool_two">v-if值为false</p>
        <p v-else>v-if值为false，但是有v-else</p>
        <p v-show="bool_three">v-show:true。false时，使用display: none;作为隐藏</p>
    </div>
    <br>
    <div>
        <span>v-for遍历数组</span>
        <template v-for="(item, index) in items" v-bind:key="item">
            <li>{{ item.message }} {{ index }}</li>
        </template>
        <span>v-for遍历对象</span>
        <ul style="list-style-type: none">
            <li v-for="(value, name, index) in myObject" v-bind:key="index">
                {{ index }} → {{ name }}: {{ value }}
            </li>
        </ul>
        <span>v-for显示过滤/排序后的结果,配合computed计算属性</span>
        <ul style="list-style-type: none">
            <li v-for="n in evenNumbers" :key="n">
                {{ n }}
            </li>
        </ul>
        <span>v-for显示过滤/排序后的结果,配合methods方法</span>
        <ul style="list-style-type: none">
            <li v-for="n in even(numbers)" v-bind:key="n">{{ n }}</li>
        </ul>
        <span>v-if比v-for有更高的优先级，所以同时使用时，v-if会读取不到v-for的值。这时推荐在template中使用v-for，在下层标签中使用v-if</span>
        <template v-for="todo in todos" v-bind:key="todo">
            <p v-if="todo.id !== 2">id:{{ todo.id }}, title:{{ todo.title }}</p>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'IfPage',
        data: function () {
            return {
                bool_one: true,
                bool_two: false,
                bool_three: true,
                items: [{ message: 'Foo' }, { message: 'Bar' }],
                myObject: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },
                numbers: [ 1, 2, 3, 4, 5 ],
                todos: [
                    {
                        id: 1,
                        title: 'Do the dishes'
                    },
                    {
                        id: 2,
                        title: 'Take out the trash'
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn'
                    }
                ],
            }
        },
        methods: {
            even: function () {
                return this.numbers.filter((number) => number % 2 === 0);
            },
        },
        computed: {
            evenNumbers: function () {
                return this.numbers.filter((number) => number % 2 === 0);
            },
        },
    }
</script>

<style>

</style>