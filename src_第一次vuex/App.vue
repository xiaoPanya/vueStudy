<template>
  <div>
    <!-- <h2>{{ $store.state.count }}</h2> -->
    <h2>{{ count }}</h2>
    <button @click="increment">点击加1</button>
    <button @click="decrement">点击减1</button>
    <button @click="incrementInfoAdd">奇数加1</button>
    <button @click="incrementAsync">异步加1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
export default {
  name: '',
  data() {
    return {
      // count: 0,
    };
  },
  /*
    重点
    如果是映射方法,无论是action还是mutations的方法都映射到methods里面
    如果映射属性数据,无论是state的数据还是getters当中的方法都映射到computed里面
  */
  computed: {
    ...mapState(['count']),
    /* count() {//或者
      return this.$store.state.count;
    }, */
  },

  /*
  //这个几乎不这样用
  methods: mapActions([ 'increment','decrement','incrementInfoAdd','incrementAsync']), */
  methods: {
    //这个函数允许传递一个数组,当回调函数的名字和actions当中的名字一样的时候,调用的
    /*
      {
        //context上下文对象,本质就是store对象
        increment:function(context) {
          setTimeout(() => {
            context.commit('INCREMENT'); //是mutations里面的.先提交到mutations
          }, 100);
        },
        decrement({ commit }) {
          //利用解构的方式获取commit
          commit('DECREMENT');
        },
        incrementInfoAdd({ commit, state }) {
          if (state.count % 2 == 1) {
            commit('INCREMENT');
          }
        },
        incrementAsync({ commit }) {
          setTimeout(() => {
            commit('INCREMENT');
          }, 500);
        },
      }
*/
    //自动映射
    /* ...mapActions([
      //还可以更简洁直接不用拆包
      //相当于拆对象  返回一个新的对象
      'increment',
      'decrement',
      'incrementInfoAdd',
      'incrementAsync',
    ]), */
    //名字不一样的必须使用对象
    ...mapActions(['decrement', 'incrementInfoAdd', 'incrementAsync']),
    ...mapActions({
      increment() {
        this.$store.dispatch('iincrement');
      },
    }),

    //最原始的写法
    /* increment: function() {
      // this.count++
      //dispatch和 emit 都是触发分发的意思  分发触发actions当中 对象的方法
       this.$store.dispatch('increment');
      this.$store.commit('INCREMENT');//也可以
    }, */
    /*  decrement() {
      this.$store.dispatch('decrement');
    },
    incrementInfoAdd() {
      //奇数加1
      this.$store.dispatch('incrementInfoAdd');
    },
    incrementAsync() {
      //异步加一
      this.$store.dispatch('incrementAsync');
    } */
  },
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
}
</style>
