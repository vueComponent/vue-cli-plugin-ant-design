<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <img src="./assets/logo.png">
      <div>
        <p>
          If Ant-Design-Vue is successfully added to this project, you'll see an
          <code v-text="'<a-button>'"></code>
          <code v-text="'<a-pagination>'"></code>
          below
        </p>
        <a-button type="primary">Primary</a-button>
        <a-pagination size="small" :total="50" showSizeChanger showQuickJumper />
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
