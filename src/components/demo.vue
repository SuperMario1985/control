<template>
  <div class="demo">
    <h3></h3>
    <p class="timer">{{nowTime}}</p>
    <div class="main-content">
      <div class="part1">
        <h5>
          <i></i>性能试验台出水管
        </h5>
        <div class="part-item">
          <div>
            <p>高位压力:</p>
            <strong>
              <i>{{swtchInfo.waterPipe1HighWaterPressure}}</i>
              <span>KPa</span>
            </strong>
          </div>
          <div>
            <p>目标流量</p>
            <strong>
              <i @click="config('VW1042',configInfo.waterPipe1Flow)">{{configInfo.waterPipe1Flow}}</i>
              <span>M3/H</span>
            </strong>
          </div>
        </div>
        <div class="part-item">
          <div>
            <p>低位压力:</p>
            <strong>
              <i>{{swtchInfo.waterPipe1LowWaterPressure}}</i>
              <span>KPa</span>
            </strong>
          </div>
          <div>
            <p>实际流量</p>
            <strong>
              <i>{{swtchInfo.waterPipe1Flow}}</i>
              <span>KPa</span>
            </strong>
          </div>
        </div>
      </div>
      <div class="part1">
        <h5>
          <i></i>地下室出水总管路
        </h5>
        <div class="part-item">
          <div>
            <p>目标压力:</p>
            <strong>
              <i
                @click="config('VW1038',configInfo.waterPipe2Pressure)"
              >{{configInfo.waterPipe2Pressure}}</i>
              <span>KPa</span>
            </strong>
          </div>
          <div>
            <p>目标流量</p>
            <strong>
              <i @click="config('VW1040',configInfo.waterPipe2Flow)">{{configInfo.waterPipe2Flow}}</i>
              <span>M3/H</span>
            </strong>
          </div>
        </div>
        <div class="part-item">
          <div>
            <p>实际压力</p>
            <strong>
              <i>{{swtchInfo.waterPipe2Pressure}}</i>
              <span>KPa</span>
            </strong>
          </div>
          <div>
            <p>实际流量</p>
            <strong>
              <i>{{swtchInfo.waterPipe2Flow}}</i>
              <span>M3/H</span>
            </strong>
          </div>
        </div>
      </div>
      <div class="part1"></div>
      <div class="part1">
        <h5 class="special">
          <i></i>调节阀
          <strong>
            开度：
            <i
              @click="config('VW1038',configInfo.waterPipe2Pressure)"
            >{{configInfo.waterPipe2Pressure}}</i>
            <span>%</span>
          </strong>
        </h5>
      </div>
      <div class="part3">
        <h5>
          选择开关:
          <i></i>
        </h5>
        <div>
          <div class="part-item">
            <h6>景观演示阀</h6>
            <p>
              <i @click="viewOpen" class="btn-open">打开</i>
              <i @click="viewClose" class="btn-close">关闭</i>
            </p>
            <p>
              <i class="btn-open" :class="{active:swtchInfo.isViewOpened}">开到位</i>
              <i class="btn-close" :class="{active:swtchInfo.isViewClosed}">关到位</i>
            </p>
          </div>
          <div class="part-item">
            <h6>拟态降雨演示阀</h6>
            <p>
              <i @click="rainfallOpen" class="btn-open">打开</i>
              <i @click="rainfallClose" class="btn-close">关闭</i>
            </p>
            <p>
              <i class="btn-open" :class="{active:swtchInfo.isRainfallOpened}">开到位</i>
              <i class="btn-close" :class="{active:swtchInfo.isRainfallClosed}">关到位</i>
            </p>
          </div>
          <div class="part-item">
            <h6>虹吸效果演示阀</h6>
            <p>
              <i @click="siphonOpen" class="btn-open">打开</i>
              <i @click="rainfallClose" class="btn-close">关闭</i>
            </p>
            <p>
              <i class="btn-open" :class="{active:swtchInfo.isSiphonOpened}">开到位</i>
              <i class="btn-close" :class="{active:swtchInfo.isSiphonClosed}">关到位</i>
            </p>
          </div>
          <div class="part-item">
            <h6>同层排水演示阀</h6>
            <p>
              <i @click="sameFloorDrainageOpen" class="btn-open">打开</i>
              <i @click="sameFloorDrainageClose" class="btn-close">关闭</i>
            </p>
            <p>
              <i class="btn-open" :class="{active:swtchInfo.isSameFloorDrainageOpened}">开到位</i>
              <i class="btn-close" :class="{active:swtchInfo.isSameFloorDrainageClosed}">关到位</i>
            </p>
          </div>
          <div class="part-item">
            <h6>内涝调控演示阀</h6>
            <p>
              <i @click="waterloggingControlOpen" class="btn-open">打开</i>
              <i @click="waterloggingControlClose" class="btn-close">关闭</i>
            </p>
            <p>
              <i class="btn-open" :class="{active:swtchInfo.isWaterloggingControlOpened}">开到位</i>
              <i class="btn-close" :class="{active:swtchInfo.isWaterloggingControlClosed}">关到位</i>
            </p>
          </div>
        </div>
      </div>
      <div class="part4">
        <h5>
          <i></i>地下室水箱
        </h5>
        <div class="part-item">
          <div>
            <h6>潜水泵1</h6>
            <p class="btn-box">
              <i @click="waterTank1Open" class="btn-open">启动</i>
              <i @click="waterTank1Close" class="btn-close">停止</i>
            </p>
          </div>
          <div>
            <h6>潜水泵2</h6>
            <p class="btn-box">
              <i @click="waterTank2Open" class="btn-open">启动</i>
              <i @click="waterTank2Close" class="btn-close">停止</i>
            </p>
          </div>
          <div>
            <p>
              <strong>
                频设定率:
                <i @click="config('VW1032',configInfo.waterTank1F)">{{configInfo.waterTank1F}}</i>
                <span>Hz</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                频设定率:
                <i @click="config('VW1032',configInfo.waterTank2F)">{{configInfo.waterTank2F}}</i>
                <span>Hz</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行频率:
                <i>{{swtchInfo.waterTank1F}}</i>
                <span>Hz</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行频率:
                <i>{{swtchInfo.waterTank2F}}</i>
                <span>Hz</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行电流:
                <i>{{swtchInfo.waterTank1A}}</i>
                <span>A</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行电流:
                <i>{{swtchInfo.waterTank2A}}</i>
                <span>A</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行功率:
                <i>{{swtchInfo.waterTank1P}}</i>
                <span>KW</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行功率:
                <i>{{swtchInfo.waterTank2P}}</i>
                <span>KW</span>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行状态:
                <i>{{swtchInfo.waterTank1Status}}</i>
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                运行状态:
                <i>{{swtchInfo.waterTank1Status}}</i>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <a @click="$emit('step-change',0)" class="router" href="javascript:void(0)">
      <i></i>返回目录
    </a>
    <!-- <h4>演示阀</h4>
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
    <div class="test-box">
      <div class="test-item">
        <h5>潜水泵1</h5>
        <el-button type="success" @click="waterTank1Open">启动</el-button>
        <el-button type="danger" @click="waterTank1Close">停止</el-button>
        <div class="status-box">
          <p>
            运行频率：
            <el-input v-model="swtchInfo.waterTank1F" :disabled="true"></el-input>
          </p>
          <p>
            运行电流：
            <el-input v-model="swtchInfo.waterTank1A" :disabled="true"></el-input>
          </p>
          <p>
            运行功率：
            <el-input v-model="swtchInfo.waterTank1P" :disabled="true"></el-input>
          </p>
          <p>
            运行状态：
            <el-input v-model="swtchInfo.waterTank1Status" :disabled="true"></el-input>
          </p>
        </div>
      </div>
      <div class="test-item">
        <h5>潜水泵2</h5>
        <el-button type="success" @click="waterTank2Open">启动</el-button>
        <el-button type="danger" @click="waterTank2Close">停止</el-button>
        <div class="status-box">
          <p>
            运行频率：
            <el-input v-model="swtchInfo.waterTank2F" :disabled="true"></el-input>
          </p>
          <p>
            运行电流：
            <el-input v-model="swtchInfo.waterTank2A" :disabled="true"></el-input>
          </p>
          <p>
            运行功率：
            <el-input v-model="swtchInfo.waterTank2P" :disabled="true"></el-input>
          </p>
          <p>
            运行状态：
            <el-input v-model="swtchInfo.waterTank2Status" :disabled="true"></el-input>
          </p>
        </div>
      </div>
    </div>
    <h4>管路数据</h4>
    <div class="test-box">
      <div class="test-item">
        <h5>性能试验台出水管</h5>
        <div class="status-box">
          <p>
            高位压力：
            <el-input v-model="swtchInfo.waterPipe1HighWaterPressure" :disabled="true"></el-input>
          </p>
          <p>
            低位压力：
            <el-input v-model="swtchInfo.waterPipe1LowWaterPressure" :disabled="true"></el-input>
          </p>
          <p>
            实际流量：
            <el-input v-model="swtchInfo.waterPipe1Flow" :disabled="true"></el-input>
          </p>
        </div>
      </div>
      <div class="test-item">
        <h5>地下室出水总管</h5>
        <div class="status-box">
          <p>
            实际压力：
            <el-input v-model="swtchInfo.waterPipe2Pressure" :disabled="true"></el-input>
          </p>
          <p>
            实际流量：
            <el-input v-model="swtchInfo.waterPipe2Flow" :disabled="true"></el-input>
          </p>
        </div>
      </div>
    </div>
    <h4>读取数据调试</h4>
    <div class="test-box2">
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isViewOpened"
          active-color="red"
          inactive-color="#999"
          active-text="景观演示阀开到位"
          inactive-text="景观演示阀未开到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isViewClosed"
          active-color="red"
          inactive-color="#999"
          active-text="景观演示阀关到位"
          inactive-text="景观演示阀未关到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isRainfallOpened"
          active-color="red"
          inactive-color="#999"
          active-text="拟态降雨阀开到位"
          inactive-text="拟态降雨阀未开到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isRainfallClosed"
          active-color="red"
          inactive-color="#999"
          active-text="拟态降雨阀关到位"
          inactive-text="拟态降雨阀未关到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isSiphonOpened"
          active-color="red"
          inactive-color="#999"
          active-text="虹吸效果阀开到位阀"
          inactive-text="虹吸效果阀未开到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isSiphonClosed"
          active-color="red"
          inactive-color="#999"
          active-text="虹吸效果阀关到位"
          inactive-text="虹吸效果阀未关到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isSameFloorDrainageOpened"
          active-color="red"
          inactive-color="#999"
          active-text="同层排水阀开到位阀"
          inactive-text="同层排水阀未开到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isSameFloorDrainageClosed"
          active-color="red"
          inactive-color="#999"
          active-text="同层排水阀关到位"
          inactive-text="同层排水阀未关到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isWaterloggingControlOpened"
          active-color="red"
          inactive-color="#999"
          active-text="内涝调控阀开到位阀"
          inactive-text="内涝调控阀未开到位"
          disabled
        ></el-switch>
      </div>
      <div class="test-item">
        <el-switch
          v-model="swtchInfo.isWaterloggingControlClosed"
          active-color="red"
          inactive-color="#999"
          active-text="内涝调控阀关到位"
          inactive-text="内涝调控阀未关到位"
          disabled
        ></el-switch>
      </div>
    </div>
    <h4>配置参数调试</h4>
    <div class="test-box3">
      <div class="drawer">
        <div>
          <span>潜水泵1频率设定:</span>
          <strong @click="config('VW1032',configInfo.waterTank1F)">{{configInfo.waterTank1F}}</strong>
        </div>
        <div>
          <span>潜水泵2频率设定:</span>
          <strong @click="config('VW1034',configInfo.waterTank2F)">{{configInfo.waterTank2F}}</strong>
        </div>
        <div>
          <span>性能试验台目标流量:</span>
          <strong @click="config('VW1042',configInfo.waterPipe1Flow)">{{configInfo.waterPipe1Flow}}</strong>
        </div>
        <div>
          <span>地下室出水管路目标压力:</span>
          <strong
            @click="config('VW1038',configInfo.waterPipe2Pressure)"
          >{{configInfo.waterPipe2Pressure}}</strong>
        </div>
        <div>
          <span>地下室出水管路目标流量:</span>
          <strong @click="config('VW1040',configInfo.waterPipe2Flow)">{{configInfo.waterPipe2Flow}}</strong>
        </div>
        <div>
          <span>调节阀开度:</span>
          <strong
            @click="config('VW1036',configInfo.regulatingValve)"
          >{{configInfo.regulatingValve}}</strong>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import httpService from "../api/httpService";
export default {
  name: "Demo",
  data() {
    return {
      nowTime: "",
      apiToken: "",
      loadingInfo: {
        viewOpen: false,
        viewClose: false,
      },
      swtchInfo: {
        isViewOpened: false,
        isViewClosed: false,
        isRainfallOpened: false,
        isRainfallClosed: false,
        isSiphonOpened: false,
        isSiphonClosed: false,
        isSameFloorDrainageOpened: false,
        isSameFloorDrainageClosed: false,
        isWaterloggingControlOpened: false,
        isWaterloggingControlClosed: false,
        waterTank1A: "",
        waterTank1P: "",
        waterTank1F: "",
        waterTank1Status: "",
        waterTank2A: "",
        waterTank2P: "",
        waterTank2F: "",
        waterTank2Status: "",
        waterPipe1HighWaterPressure: "",
        waterPipe1LowWaterPressure: "",
        waterPipe1Flow: "",
        waterPipe2Pressure: "",
        waterPipe2Flow: "",
      },
      configInfo: {
        waterTank1F: "",
        waterTank2F: "",
        waterPipe1Flow: "",
        waterPipe2Pressure: "",
        waterPipe2Flow: "",
        regulatingValve: "",
      },
      test: "",
    };
  },
  methods: {
    viewOpen() {
      let that = this;
      httpService.viewOpen(function (response) {});
    },
    viewClose() {
      let that = this;
      this.isLoading = true;
      httpService.viewClose(function (response) {});
    },
    checkIsVidwOpened() {
      let that = this;
      httpService.checkIsVidwOpened(function (response) {
        if (response && response.data) {
          that.swtchInfo.isViewOpened =
            response.data["V1005.1"] === "1" ? true : false;
          that.swtchInfo.isViewClosed =
            response.data["V1005.2"] === "1" ? true : false;
          that.swtchInfo.isRainfallOpened =
            response.data["V1005.3"] === "1" ? true : false;
          that.swtchInfo.isRainfallClosed =
            response.data["V1005.4"] === "1" ? true : false;
          that.swtchInfo.isSiphonOpened =
            response.data["V1005.5"] === "1" ? true : false;
          that.swtchInfo.isSiphonClosed =
            response.data["V1005.6"] === "1" ? true : false;
          that.swtchInfo.isSameFloorDrainageOpened =
            response.data["V1005.7"] === "1" ? true : false;
          that.swtchInfo.isSameFloorDrainageClosed =
            response.data["V1006.0"] === "1" ? true : false;
          that.swtchInfo.isWaterloggingControlOpened =
            response.data["V1006.1"] === "1" ? true : false;
          that.swtchInfo.isWaterloggingControlClosed =
            response.data["V1006.2"] === "1" ? true : false;

          // 水泵1
          that.swtchInfo.waterTank1A =
            Number(response.data["VW1062"]).toFixed(2) + "A";
          that.swtchInfo.waterTank1P =
            Number(response.data["VW1064"]).toFixed(2) + "KW";
          that.swtchInfo.waterTank1F =
            Number(response.data["VW1060"]).toFixed(2) + "Hz";
          that.swtchInfo.waterTank1Status =
            response.data["VW1072"] === "1" ? "运行" : "停机";
          // 水泵2
          that.swtchInfo.waterTank2A =
            Number(response.data["VW1068"]).toFixed(2) + "A";
          that.swtchInfo.waterTank2P =
            Number(response.data["VW1070"]).toFixed(2) + "KW";
          that.swtchInfo.waterTank2F =
            Number(response.data["VW1066"]).toFixed(2) + "Hz";
          that.swtchInfo.waterTank2Status =
            response.data["VW1074"] === "1" ? "运行" : "停机";

          // 水管1
          that.swtchInfo.waterPipe1HighWaterPressure =
            Number(response.data["VD1008"]).toFixed(2) + "KPa";
          that.swtchInfo.waterPipe1LowWaterPressure =
            Number(response.data["VD1012"]).toFixed(2) + "KPa";
          that.swtchInfo.waterPipe1Flow =
            Number(response.data["VD1016"]).toFixed(2) + "M3/H";
          // 水管2
          that.swtchInfo.waterPipe2Pressure =
            Number(response.data["VD1028"]).toFixed(2) + "KPa";
          that.swtchInfo.waterPipe2Flow =
            Number(response.data["VD1024"]).toFixed(2) + "M3/H";

          // 配置项
          that.configInfo.waterTank1F = Number(response.data["VW1032"]).toFixed(
            1
          );
          that.configInfo.waterTank2F = Number(response.data["VW1034"]).toFixed(
            1
          );
          that.configInfo.waterPipe1Flow = Number(
            response.data["VW1042"]
          ).toFixed(1);
          that.configInfo.waterPipe2Pressure = Number(
            response.data["VW1038"]
          ).toFixed(1);
          that.configInfo.waterPipe2Flow = Number(
            response.data["VW1040"]
          ).toFixed(1);
          that.configInfo.regulatingValve = Number(
            response.data["VW1036"]
          ).toFixed(1);

          //   waterTank1F: "",
          // waterTank2F: "",
          // waterPipe1Flow: "",
          // waterPipe2Pressure: "",
          // waterPipe2Flow: "",
        }
      });
    },
    goConfig() {},
    handleClose(done) {
      done();
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
    },
    config(tag, num) {
      let temp = tag;
      this.$prompt("请输入要设定的值", "配置面板", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          if (value) {
            let configInfo = {
              tag: temp,
              value: Number(value).toFixed(1),
            };
            httpService.configData(configInfo, function (response) {});
          } else {
            this.$message({
              type: "warn",
              message: "请输入要设定的值",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消设置",
          });
        });
    },
    configData(tag, value) {
      let configInfo = {
        tag: tag,
        value: value,
      };
      httpService.configData(configInfo, function (response) {});
    },
    waterTank1Open() {
      let that = this;
      httpService.waterTank1Open(function (response) {});
    },
    waterTank2Open() {
      let that = this;
      httpService.waterTank2Open(function (response) {});
    },
    waterTank1Close() {
      let that = this;
      httpService.waterTank1Close(function (response) {});
    },
    waterTank2Close() {
      let that = this;
      httpService.waterTank2Close(function (response) {});
    },
    rainfallOpen() {
      let that = this;
      httpService.rainfallOpen(function (response) {});
    },
    rainfallClose() {
      let that = this;
      httpService.rainfallClose(function (response) {});
    },
    siphonOpen() {
      let that = this;
      httpService.siphonOpen(function (response) {});
    },
    sameFloorDrainageOpen() {
      let that = this;
      httpService.sameFloorDrainageOpen(function (response) {});
    },
    sameFloorDrainageClose() {
      let that = this;
      httpService.sameFloorDrainageClose(function (response) {});
    },
    waterloggingControlOpen() {
      let that = this;
      httpService.waterloggingControlOpen(function (response) {});
    },
    waterloggingControlClose() {
      let that = this;
      httpService.waterloggingControlClose(function (response) {});
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      var day = new Date(timeStamp).getDay();
      var weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      var week = weeks[day];
      this.nowTime =
        year +
        "年" +
        month +
        "月" +
        date +
        "日," +
        " " +
        week +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss;
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
  },
  computed: {},
  created: function () {
    let that = this;
    this.checkIsVidwOpened();
    this.nowTimes();
    let apiToken = setInterval(() => {
      this.checkIsVidwOpened();
    }, 5000);
  },
  destroyed() {
    if (this.apiToken) {
      clearInterval(this.apiToken);
      this.apiToken = "";
    }
  },
  mounted: function () {
    let that = this;
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./demo.scss";
</style>
