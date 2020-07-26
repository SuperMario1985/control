<template>
  <div class="demo">
    <h4>演示阀</h4>
    <div class="test-box">
      <div class="test-item">
        <h5>景观演示阀</h5>
        <el-button type="success" @click="viewOpen">打开</el-button>
        <el-button type="danger" @click="viewClose">关闭</el-button>
      </div>
      <div class="test-item">
        <h5>拟态降雨演示阀</h5>
        <el-button type="success" @click="rainfallOpen">打开</el-button>
        <el-button type="danger" @click="rainfallClose">关闭</el-button>
      </div>
      <div class="test-item">
        <h5>虹吸效果演示阀</h5>
        <el-button type="success" @click="siphonOpen">打开</el-button>
        <el-button type="danger" @click="siphonClose">关闭</el-button>
      </div>
      <div class="test-item">
        <h5>同层排水演示阀</h5>
        <el-button type="success" @click="sameFloorDrainageOpen">打开</el-button>
        <el-button type="danger" @click="sameFloorDrainageClose">关闭</el-button>
      </div>
      <div class="test-item">
        <h5>内涝调控演示阀</h5>
        <el-button type="success" @click="waterloggingControlOpen">打开</el-button>
        <el-button type="danger" @click="waterloggingControlClose">关闭</el-button>
      </div>
    </div>
    <h4>地下室水箱</h4>
    <div class="test-box2">
      <div class="test-item">
        <h5>潜水泵1</h5>
        <el-button type="success" @click="waterTank1Open">启动</el-button>
        <el-button type="danger" @click="waterTank1Close">停止</el-button>
      </div>
      <div class="test-item">
        <h5>潜水泵2</h5>
        <el-button type="success" @click="waterTank2Open">启动</el-button>
        <el-button type="danger" @click="waterTank2Close">停止</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import httpService from "../api/httpService";
export default {
  name: "Demo",
  data() {
    return {
      loadingInfo: {
        viewOpen: false,
        viewClose: false
      }
    };
  },
  methods: {
    viewOpen() {
      let that = this;
      httpService.viewOpen(function(response) {});
    },
    viewClose() {
      let that = this;
      this.isLoading = true;
      httpService.viewClose(function(response) {});
    },
    rainfallOpen() {
      httpService.rainfallOpen(function(response) {});
    },
    rainfallClose() {
      httpService.rainfallClose(function(response) {});
    },
    siphonOpen() {
      httpService.siphonOpen(function(response) {});
    },
    siphonClose() {
      httpService.siphonClose(function(response) {});
    },
    sameFloorDrainageOpen() {
      httpService.sameFloorDrainageOpen(function(response) {});
    },
    sameFloorDrainageClose() {
      httpService.sameFloorDrainageClose(function(response) {});
    },
    waterloggingControlOpen() {
      httpService.waterloggingControlOpen(function(response) {});
    },
    waterloggingControlClose() {
      httpService.waterloggingControlClose(function(response) {});
    },
    waterTank1Open() {
      httpService.waterTank1Open(function(response) {});
    },
    waterTank1Close() {
      httpService.waterTank1Close(function(response) {});
    },
    waterTank2Open() {
      httpService.waterTank2Open(function(response) {});
    },
    waterTank2Close() {
      httpService.waterTank2Close(function(response) {});
    }
  },
  computed: {},
  created: function() {},
  mounted: function() {
    let that = this;
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo {
  h4 {
    font-size: 24px;
    padding-top: 100px;
    text-align: center;
    // padding: 20px 0;
  }
  h5 {
    text-align: center;
    padding: 20px 0;
  }
  .test-box {
    display: flex;
    padding-top: 50px;
    text-align: center;
    padding: 0 20px 0;
    .test-item {
      flex: 1;
    }
  }
  .test-box2 {
    display: flex;
    text-align: center;
    padding: 0 20px;
    .test-item {
      flex: 1;
    }
  }
}
</style>
