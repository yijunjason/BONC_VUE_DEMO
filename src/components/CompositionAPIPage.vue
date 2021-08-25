<template>
    <div>Composition API Page</div>
</template>

<script>
    import { ref, onMounted, watch, toRefs, computed, toRef } from 'vue';

    export default {
        name: 'CompositionAPIPage',
        props: ['user', 'b'],
        setup: function (props, {attrs, slots, emit}) {
            console.log(props, attrs, slots, emit);

            const counter = ref(0); // 创建响应式的引用类型变量,counter.value === 0
            // const {user} = props; // 解构会导致user丢失props的响应式，所以使用toRefs对props进行包装
            const { user } = toRefs(props); // 使用 `toRefs` 创建对prop的 `user` property 的响应式引用
            const title = toRef(props, 'title'); // 当props中的某个属性是可选的时候，toRefs有可能不会创建该属性的ref，这时需要使用toRef替代
            console.log(title.value);

            const repositories = ref([]);
            const getUserRepositories = async () => {
                repositories.value = await Promise
            };

            onMounted(() => {
                console.log('on Mounted');
            });

            watch(user, (newValue, oldValue) => {
                console.log('props.user has changed,', newValue, oldValue)
            });

            const twiceTheCounter = computed(() => {
                return counter.value * 2;
            }); // computed输出的是一个只读的响应式引用
            console.log(twiceTheCounter.value);

            return {
                repositories,
                getUserRepositories,
            }
        }
    }
</script>

<style>

</style>