<template>
  <div class="home">
    <div class="step0">
      <div class="left-side"></div>
      <div class="center"></div>
      <div class="right-side">
        <ul>
          <li class="index1">
            <span @click="goStep(1)">景观演示</span>
          </li>
          <li class="index2">
            <span @click="goStep(2)">拟态降雨</span>
          </li>
          <li class="index3">
            <span @click="goStep(3)">虹吸排水</span>
          </li>
          <li class="index4">
            <span @click="goStep(4)">同层排水</span>
          </li>
          <li class="index5">
            <span @click="goStep(5)">内涝排水</span>
          </li>
          <li class="index6">
            <span @click="goStep(6)">调试界面</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import httpService from "../api/httpService";
export default {
  name: "Home",
  data() {
    return {
      pageStep: 0,
    };
  },
  methods: {
    goStep(step) {
      this.pageStep = step;
    },
  },
  computed: {},
  created: function () {},
  mounted: function () {
    let that = this;
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./home.scss";
</style>
