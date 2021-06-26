<template>
  <div>
    <Child>
      <!-- 没给名字给默认插槽 -->
      <template>
        <a href="#">你好</a>
      </template>

      <!-- 给名字了就是给具名插槽添加内容 -->
      <template slot="xxx">
        <em>我是em</em>
      </template>
      <template slot="yyy">
        <div>我给yyy传递的东西</div>
      </template>
    </Child>
    <Child>
      <template>
        <p ref="pp">我是一个p</p>
      </template>
      <template slot="xxx">
        <button>我是一个btn</button>
      </template>
    </Child>

    <!-- 作用域插槽
    数据是由父组件传递给子组件去展示的
    子组件展示数据的过程中,数据的结构是由父组件说的算 -->

    <!-- 如果isOver为true前面打√ 而且高亮显示
    如果没有true原样显示-->
    <ScopeChild :todoS="todoS">
      <!-- 解构赋值接受 -->
      <template slot-scope="{ todo }">
        <span v-if="todo.isOver" style="color: hotpink"
          >√{{ todo.content }}</span
        >
      </template>
      <!-- 作为对象接收 -->
      <!-- <template slot-scope="scopeTodo">
        <span v-if="scopeTodo.todo.isOver" style="color: hotpink">√{{ scopeTodo.todo.content }}</span>
      </template> -->
    </ScopeChild>
  </div>
</template>
<script>
import Child from '@/components/Child';
import ScopeChild from '@/components/ScopeChild';
export default {
  name: '',
  components: {
    Child,
    ScopeChild,
  },
  data() {
    return {
      todoS: [
        { id: 1, content: '抽烟', isOver: false },
        { id: 2, content: '喝酒', isOver: true },
        { id: 3, content: '打牌', isOver: false },
      ],
    };
  },
};
</script>

<style scoped></style>
