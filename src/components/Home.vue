<template>
  <div class="home">
    <div class="step" v-if="pageStep === -1">
      <div class="left-side"></div>
      <div class="right-side">
        <div class="log">
          <img src="../assets/images/screen-saver/logo.png" alt />
        </div>
        <div @click="goIndexPage" class="img-box">
          <img src="../assets/images/screen-saver/system-name.png" alt />
        </div>
        <div @click="goIndexPage" class="active-box">
          <i></i>欢迎使用,点击进入
        </div>
        <p class="compony-name">北京泰宁科创雨水利用技术股份有限公司</p>
      </div>
    </div>
    <div class="step0" v-if="pageStep === 0">
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
            <span @click="goIndexPage">调试界面</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="step1" v-if="pageStep === 1">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:1</div>
          <div class="p2">景观演示</div>
          <div class="p3">Landscape presentation</div>
        </div>
        <div class="acction-box" v-if="swtchInfo">
          <div class="pop">
            <h6>潜水泵1</h6>
            <p>运行频率:</p>
            <div>
              <i>
                {{swtchInfo.waterTank1F}}
                <span>Hz</span>
              </i>
            </div>
          </div>
          <div class="show-box">
            <h6>景观演示阀</h6>
            <p>
              <i class="full-opened" :class="{active:swtchInfo.isViewOpened}">开到位</i>
              <i class="full-closed" :class="{active:swtchInfo.isViewClosed}">关到位</i>
            </p>
          </div>
          <a
            @click="showerOpen"
            class="open"
            :class="{active:pageInfo.page1Btn ===1}"
            href="javascript:void(0)"
          >启动</a>
          <a @click="stopAll" class="close" href="javascript:void(0)">停止</a>
        </div>
        <a @click="pageStep=0;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li>
            <a @click="pageStep=1.4;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/1.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.1;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/2.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.1;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/3.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.5;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/4.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.2;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/5.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.2;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/6.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.3;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/7.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.3;addTimeoutTken()" href="javascript:void(0)">
              <img src="../assets/images/step1/8.png" alt />
            </a>
          </li>
          <li @click="pageStep=1.4;addTimeoutTken()">
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/9.png" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="step1_1" v-if="pageStep === 1.1">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:1.1</div>
          <div class="p2">
            核心产品
            <span>|</span>渗
          </div>
          <div class="p3">Core product - Penetration</div>
        </div>
        <a @click="pageStep=1;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回景观
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li class="special">
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_1_1.png" alt />
              <h5>结构缝式透水铺装</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>结构性透水砖</strong>
            </div>
            <div class="info">
              <span>产品规格:</span>
              <strong>150*300*65 250*500*60等</strong>
            </div>
            <div class="info">
              <span>材&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;质:</span>
              <strong>仿石材</strong>
            </div>
            <div class="info">
              <span>抗压轻度:</span>
              <strong>C10 ~C30</strong>
            </div>
            <div class="info">
              <span>适用场合及优势:</span>
              <strong>适用于停车场、人行道；结构稳定，透水性能好、衰减率低</strong>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_1_2.png" alt />
              <h5>透水混凝土整体路面</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>透水混凝土铺装</strong>
            </div>
            <div class="info">
              <span>透水系数:</span>
              <strong>≥0.5mm/s</strong>
            </div>
            <div class="info">
              <span>强度等级:</span>
              <strong>抗压强度（28d） ≥20Mpa</strong>
            </div>
            <div class="info">
              <span>保 水 性:</span>
              <strong>≥0.6g/cm²</strong>
            </div>
            <div class="info">
              <span>保 水 性:</span>
              <strong>适用于人行广场、人行道路，停车场，大型铺装广场等区域</strong>
            </div>
          </li>
        </ul>
        <div class="router">
          <a @click="pageStep=1.5;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=1.2;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step1_2" v-if="pageStep === 1.2">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:1.2</div>
          <div class="p2">
            核心产品
            <span>|</span>渗
          </div>
          <div class="p3">Core product - Penetration</div>
        </div>
        <a @click="pageStep=1;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回景观
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_2_1.png" alt />
              <h5>生态高承载植草地坪</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>生态高承载植草地坪</strong>
            </div>
            <div class="info">
              <span>产品规格:</span>
              <strong>A×B×H=600×600×1000mm</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>PS 聚苯乙烯</strong>
            </div>
            <div class="info">
              <span>连接管径:</span>
              <strong>De160、De200 承插连接</strong>
            </div>
            <div class="info">
              <span>应用场景:</span>
              <strong>停车场、广场、人行道路</strong>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_2_2.png" alt />
              <h5>雨养型屋顶蓄水系统</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>雨养型屋顶绿化储水系统</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>沟体：PE 篦子：PE、不锈钢</strong>
            </div>
            <div class="info">
              <span>规格尺寸:</span>
              <strong>700X350 X85</strong>
            </div>
            <div class="info">
              <span>细柱密度:</span>
              <strong>5根毛细柱/平方米</strong>
            </div>
            <div class="info">
              <span>应用场景:</span>
              <strong>屋顶绿化、地库顶板，市政道路绿化带下蓄水空间</strong>
            </div>
          </li>
        </ul>
        <div class="router">
          <a @click="pageStep=1.1;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=1.3;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step1_3" v-if="pageStep === 1.3">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:1.3</div>
          <div class="p2">
            核心产品
            <span>|</span>蓄
          </div>
          <div class="p3">Core product - storage</div>
        </div>
        <a @click="pageStep=1;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回景观
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_3_1.png" alt />
              <h5>拱形渗透渠</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>圆形储存、传输、渗透渠</strong>
            </div>
            <div class="info">
              <span>产品规格:</span>
              <strong>A×B×H=600×600×1000mm</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>PE</strong>
            </div>
            <div class="info">
              <span>连接方式:</span>
              <strong>承插连接</strong>
            </div>
            <div class="info">
              <span>应用场景:</span>
              <strong>
                适用于源头雨水传输，可与透水铺装结合，
                布置灵活，安装简便，容积率高
              </strong>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_3_2.png" alt />
              <h5>塑料模块矩形渗透渠</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>雨水模块调蓄、渗透池</strong>
            </div>
            <div class="info">
              <span>产品规格:</span>
              <strong>A×B×H=1000×500×400mm</strong>
            </div>
            <div class="info">
              <span>抗压轻度:</span>
              <strong>≯0.45N/mm²</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>PP</strong>
            </div>
            <div class="info">
              <span>应用场景:</span>
              <strong>
                适用于区域末端调蓄，或绿地、广场下方
                设施渗透排水沟渠
              </strong>
            </div>
          </li>
        </ul>
        <div class="router">
          <a @click="pageStep=1.2;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=1.4;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step1_4" v-if="pageStep === 1.4">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:1.4</div>
          <div class="p2">
            核心产品
            <span>|</span>蓄
          </div>
          <div class="p3">Core product - storage</div>
        </div>
        <a @click="pageStep=1;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回景观
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li class="special">
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_4_1.png" alt />
              <h5>小型雨水蓄水设施</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>集雨樽系统</strong>
            </div>
            <div class="info">
              <span>产品规格:</span>
              <strong>0.5T、1T、1.5T、2T、5T</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>HDPE</strong>
            </div>
            <div class="info">
              <span>连接管径:</span>
              <strong>De160、De110 立管过滤器</strong>
            </div>
            <div class="info">
              <span>适用场合及优势:</span>
              <strong>适用于屋面立管雨水截留、回用</strong>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_4_2.png" alt />
              <h5>集水渗透检查井</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>成品集水渗透检查井</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>沟体：PE 篦子：PE、不锈钢</strong>
            </div>
            <div class="info">
              <span>规格尺寸:</span>
              <strong>Ф600 H1000，Ф600/Ф900H</strong>
            </div>
            <div class="info">
              <span>篦子形式:</span>
              <strong>包含井底、井身、井座、井盖、截污框。</strong>
            </div>
            <div class="info">
              <span>应用场景:</span>
              <strong>渗透井、渗排一体化管道</strong>
            </div>
          </li>
        </ul>
        <div class="router">
          <a @click="pageStep=1.3;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=1.5;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step1_5" v-if="pageStep === 1.5">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:1.5</div>
          <div class="p2">
            核心产品
            <span>|</span>排
          </div>
          <div class="p3">Core product - row</div>
        </div>
        <a @click="pageStep= 1;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回景观
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li class="special">
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_5_1.png" alt />
              <h5>环保型雨水口</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>环保型截污雨水口</strong>
            </div>
            <div class="info">
              <span>产品规格:</span>
              <strong>A×B×H=400×400×460mm</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>井身：PE 井盖：模压复合</strong>
            </div>
            <div class="info">
              <span>连接管径:</span>
              <strong>De160、De200 承插连接</strong>
            </div>
            <div class="info">
              <span>适用场合及优势:</span>
              <strong>可多层叠加，用于绿化内、小市政系统雨水收集，截污、沉淀</strong>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="../assets/images/step1/1_5_2.png" alt />
              <h5>线性排水地沟</h5>
            </a>
            <div class="info">
              <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
              <strong>线性地沟（PE）</strong>
            </div>
            <div class="info">
              <span>产品材质:</span>
              <strong>沟体：PE 篦子：PE、不锈钢</strong>
            </div>
            <div class="info">
              <span>规格尺寸:</span>
              <strong>100X160 200X250</strong>
            </div>
            <div class="info">
              <span>篦子形式:</span>
              <strong>屏蔽式 缝隙式</strong>
            </div>
            <div class="info">
              <span>应用场景:</span>
              <strong>
                适用于大型广场、道路等下垫面雨水的
                排放，排水效果佳、效果美观
              </strong>
            </div>
          </li>
        </ul>
        <div class="router">
          <a @click="pageStep =1.4;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep =1.1;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step2" v-if="pageStep === 2">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:2.0</div>
          <div class="p2">拟态降雨</div>
          <div class="p3">Mimicry rainfall</div>
        </div>
        <a @click="pageStep=0;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <div class="pop">
              <h6>潜水泵1</h6>
              <p>运行频率:</p>
              <div>
                <i>
                  {{swtchInfo.waterTank1F}}
                  <span>Hz</span>
                </i>
              </div>
            </div>
            <div class="show-box">
              <h6>拟态降雨演示阀</h6>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isRainfallOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isRainfallClosed}">关到位</i>
              </p>
            </div>
            <p>
              <i @click="stopAll" class="close-button">停雨</i>
            </p>
          </div>
          <div class="show-rain">
            <div class="show-rain-item">
              <div>
                <img src="../assets/images/step2/rain01.png" alt />
                <i
                  @click="configData('VW1142',1);pageInfo.page2Btn=1"
                  class="start-button"
                  :class="{active:pageInfo.page2Btn===1}"
                >降雨</i>
                <p>小雨：24h降雨量小于10mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain03.png" alt />
                <i
                  @click="configData('VW1142',2);pageInfo.page2Btn=2"
                  class="start-button"
                  :class="{active:pageInfo.page2Btn===2}"
                >降雨</i>
                <p>中雨：24h降雨量10～25mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain05.png" alt />
                <i
                  @click="configData('VW1142',4);pageInfo.page2Btn=3"
                  class="start-button"
                  :class="{active:pageInfo.page2Btn===3}"
                >降雨</i>
                <p>大雨：24h降雨量25～50mm</p>
              </div>
            </div>
            <div class="show-rain-item">
              <div>
                <img src="../assets/images/step2/rain02.png" alt />
                <i
                  @click="configData('VW1142',8);pageInfo.page2Btn=4"
                  class="start-button"
                  :class="{active:pageInfo.page2Btn===4}"
                >降雨</i>
                <p>暴雨：24h降雨量50～100mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain04.png" alt />
                <i
                  @click="configData('VW1142',16);pageInfo.page2Btn=5"
                  class="start-button"
                  :class="{active:pageInfo.page2Btn===5}"
                >降雨</i>
                <p>大暴雨：24h降雨量100～250mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain06.png" alt />
                <i
                  @click="configData('VW1142',32);pageInfo.page2Btn=6"
                  class="start-button"
                  :class="{active:pageInfo.page2Btn===6}"
                >降雨</i>
                <p>特大暴雨：24h降雨量250mm以上</p>
              </div>
            </div>
          </div>
        </div>
        <div class="router">
          <a @click="pageStep=1;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=3;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step3" v-if="pageStep === 3">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:3.0</div>
          <div class="p2">虹吸排水</div>
          <div class="p3">The siphon drainage</div>
        </div>
        <a @click="pageStep=0;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <div class="action1">
              <div class="pop">
                <h6>潜水泵1</h6>
                <p>运行频率:</p>
                <div>
                  <i>
                    {{swtchInfo.waterTank1F}}
                    <span>Hz</span>
                  </i>
                </div>
              </div>
              <div class="pop">
                <h6>潜水泵2</h6>
                <p>运行频率:</p>
                <div>
                  <i>
                    {{swtchInfo.waterTank2F}}
                    <span>Hz</span>
                  </i>
                </div>
              </div>
              <div class="show-box">
                <h6>虹吸效果演示阀</h6>
                <p>
                  <i class="full-opened" :class="{active:swtchInfo.isSiphonOpened}">开到位</i>
                  <i class="full-closed" :class="{active:swtchInfo.isSiphonClosed}">关到位</i>
                </p>
              </div>
              <div class="pop">
                <p>高位压力</p>
                <div>
                  <i>
                    {{swtchInfo.waterPipe1HighWaterPressure}}
                    <span>KPa</span>
                  </i>
                </div>
                <p>低位压力</p>
                <div>
                  <i>
                    {{swtchInfo.waterPipe1LowWaterPressure}}
                    <span>KPa</span>
                  </i>
                </div>
              </div>
            </div>
            <div class="action2">
              <p>
                <span>频率1</span>
                <a
                  @click="configData('VW1144',1);pageInfo.page3Btn=1"
                  class="open"
                  :class="{active:pageInfo.page3Btn===1}"
                  href="javascript:void(0)"
                >启动</a>
              </p>
              <p>
                <span>频率2</span>
                <a
                  @click="configData('VW1144',2);pageInfo.page3Btn=2"
                  class="open"
                  :class="{active:pageInfo.page3Btn===2}"
                  href="javascript:void(0)"
                >启动</a>
              </p>
              <p>
                <span>频率3</span>
                <a
                  @click="configData('VW1144',4);pageInfo.page3Btn=3"
                  class="open"
                  :class="{active:pageInfo.page3Btn===3}"
                  href="javascript:void(0)"
                >启动</a>
              </p>
              <p>
                <span>频率4</span>
                <a
                  @click="configData('VW1144',8);pageInfo.page3Btn=4"
                  class="open"
                  :class="{active:pageInfo.page3Btn===4}"
                  href="javascript:void(0)"
                >启动</a>
              </p>
              <p>
                <span>频率5</span>
                <a
                  @click="configData('VW1144',16);pageInfo.page3Btn=5"
                  class="open"
                  :class="{active:pageInfo.page3Btn===5}"
                  href="javascript:void(0)"
                >启动</a>
              </p>
              <p>
                <span class="special">频率0</span>
                <a @click="stopAll" class="close" href="javascript:void(0)">停止</a>
              </p>
            </div>
          </div>
          <div class="info-box">
            <h5>
              <i></i>虹吸排水介绍
            </h5>
            <p>
              虹吸雨水斗是虹吸系统的关键部件，独特设计的虹吸雨水斗带有反涡流装一置，进水漩涡被破坏，进入系统的雨水在设计条件下呈现水满流状态。
              泰宁虹吸雨水由进水导流罩、整流器、斗体及出水短管组成，雨水斗斗体选用特制不锈钢材料（针对沿海地区项目，雨水斗斗体采用316L不锈钢材料），采用冷冲压工艺加工并和出水管通过焊接紧密结合，导流罩、整流器采用航空级硅锰铝合金材料精密铸造而成，具有较高的机械强度。导流罩，格栅可阻止屋面较大垃圾进入管路系统，虹吸雨水系统具有一定的自净流速，进入雨水斗的小杂物会被水流带走。具有一定高度的导流罩可确保一旦有杂物淤积在导流罩周围，还能保证雨水进入雨水斗。
            </p>
          </div>
        </div>
        <div class="router">
          <a @click="pageStep=2;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=4;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step4" v-if="pageStep === 4">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:4.0</div>
          <div class="p2">同层排水</div>
          <div class="p3">Drainage</div>
        </div>
        <a @click="pageStep=0;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <div class="pop">
              <h6>潜水泵1</h6>
              <p>运行频率:</p>
              <div>
                <i>
                  {{swtchInfo.waterTank1F}}
                  <span>Hz</span>
                </i>
              </div>
            </div>
            <div class="show-box">
              <h6>同层排水演示阀</h6>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isSameFloorDrainageOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isSameFloorDrainageClosed}">关到位</i>
              </p>
            </div>
            <p class="btn-box">
              <span>频率1</span>
              <a
                @click="configData('VW1146',1);pageInfo.page4Btn=1"
                class="open"
                :class="{active:pageInfo.page4Btn===1}"
                href="javascript:void(0)"
              >启动</a>
            </p>
            <p class="btn-box">
              <span>频率2</span>
              <a
                @click="configData('VW1146',2);pageInfo.page4Btn=2"
                class="open"
                :class="{active:pageInfo.page4Btn===2}"
                href="javascript:void(0)"
              >启动</a>
            </p>
            <p class="btn-box">
              <span>频率3</span>
              <a
                @click="configData('VW1146',4);pageInfo.page4Btn=3"
                class="open"
                :class="{active:pageInfo.page4Btn===3}"
                href="javascript:void(0)"
              >启动</a>
            </p>
            <p class="btn-box">
              <span class="special">频率0</span>
              <a @click="stopAll" class="close" href="javascript:void(0)">停止</a>
            </p>
          </div>
          <div class="info-box">
            <h5>
              <i></i>同层排水介绍
            </h5>
            <p>泰宁同层地漏排水流量试验装置，泰宁同层排水地漏设计合理、功能齐全、结构新颖，在高水封具有防臭功能的前提下，具有可调节端面。当杂物堵塞存水腔造成下水流量变慢时，用户可随时转出存水腔进行清洗，无需专业维修人员疏通，省工省料，方便施工，解决了老式地漏存在的种种问题</p>
          </div>
        </div>
        <div class="router">
          <a @click="pageStep=3;addTimeoutTken()" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep=5;addTimeoutTken()" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="step5" v-if="pageStep === 5">
      <div class="left-side">
        <div class="title-box">
          <div class="p1">NO:5.0</div>
          <div class="p2">内涝排水</div>
          <div class="p3">Waterlogging drainage</div>
        </div>
        <a @click="pageStep=0;addTimeoutTken()" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <div class="pop">
              <h6>潜水泵1</h6>
              <p>运行频率:</p>
              <div>
                <i>
                  {{swtchInfo.waterTank1F}}
                  <span>Hz</span>
                </i>
              </div>
            </div>
            <div class="show-box">
              <h6>内涝排水演示阀</h6>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isWaterloggingControlOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isWaterloggingControlClosed}">关到位</i>
              </p>
            </div>
            <p class="btn-box">
              <span>频率1</span>
              <a
                @click="configData('VW1148',1);pageInfo.page5Btn=1"
                class="open"
                :class="{active:pageInfo.page5Btn===1}"
                href="javascript:void(0)"
              >启动</a>
            </p>
            <p class="btn-box">
              <span>频率2</span>
              <a
                @click="configData('VW1148',2);pageInfo.page5Btn=2"
                class="open"
                :class="{active:pageInfo.page5Btn===2}"
                href="javascript:void(0)"
              >启动</a>
            </p>
            <p class="btn-box">
              <span>频率3</span>
              <a
                @click="configData('VW1148',4);pageInfo.page5Btn=3"
                class="open"
                :class="{active:pageInfo.page5Btn===3}"
                href="javascript:void(0)"
              >启动</a>
            </p>
            <p class="btn-box">
              <span class="special">频率0</span>
              <a @click="stopAll" class="close" href="javascript:void(0)">停止</a>
            </p>
          </div>
          <div class="info-box">
            <h5>
              <i></i>内涝排水介绍
            </h5>
            <p>
              （1）内涝调蓄装置需要配合雨水调蓄池一同使用。主要是根据城市排水管网模型，对高重现期降雨条件下管 道的排水能力进行模拟分析。得出积水节点，根据积水节点的位置初步确定调蓄池位置，根据模型软件进行城市排水防涝工程设施的模拟，用来确定用于调控内涝雨水峰值流量的调蓄池容积计算及内涝调蓄装置的关键参数。
              <br />（2）内涝调蓄装置可以对洪峰流量进行削减，减轻下游排水管网的排水压力，并且可以提高整个管网的运行 能力，降低内涝灾害。
              <br />（3）内涝调蓄系统主要包括市政管网入口、内涝调蓄装置、雨水调蓄池、市政管网出口四部分。
              <br />（4）中小雨及初期雨水市政管网经内涝调蓄装置直接排走。
              <br />（5）大雨及暴雨，当降雨量超过市政管网排水能力时，闸门开启，将超出市政管网排水能力的雨水存入雨水调蓄池。当降雨量降低，市政管网能够满足排量时关闭闸门；雨水调蓄池只存储超过管网排水能力的部分雨水。这样可以起到防涝作用。
              <br />（6）降雨预警取消时，及时排空雨水调蓄池内的雨水，为下一次暴雨做好准备。
              <br />（7）用户也可以利用调蓄池内的雨水。
            </p>
          </div>
        </div>
        <div class="router">
          <a @click="pageStep = 4" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 1" href="javascript:void(0)">
            下一页
            <i class="router-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="demo" v-if="pageStep === 6">
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
                <span>M3/H</span>
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
                @click="config('VW1036',configInfo.regulatingValve)"
              >{{configInfo.regulatingValve}}</i>
              <span>%</span>
            </strong>
          </h5>
        </div>
        <div class="part3">
          <h5>
            选择开关:
            <i v-show="swtchInfo.device === 1">远程</i>
            <i v-show="swtchInfo.device === 0">就地</i>
          </h5>
          <div>
            <div class="part-item">
              <h6>景观演示阀</h6>
              <p>
                <i @click="viewOpen" class="btn-open">打开</i>
                <i @click="viewClose" class="btn-close">关闭</i>
              </p>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isViewOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isViewClosed}">关到位</i>
              </p>
            </div>
            <div class="part-item">
              <h6>拟态降雨演示阀</h6>
              <p>
                <i @click="rainfallOpen" class="btn-open">打开</i>
                <i @click="rainfallClose" class="btn-close">关闭</i>
              </p>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isRainfallOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isRainfallClosed}">关到位</i>
              </p>
            </div>
            <div class="part-item">
              <h6>虹吸效果演示阀</h6>
              <p>
                <i @click="siphonOpen" class="btn-open">打开</i>
                <i @click="siphonClose" class="btn-close">关闭</i>
              </p>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isSiphonOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isSiphonClosed}">关到位</i>
              </p>
            </div>
            <div class="part-item">
              <h6>同层排水演示阀</h6>
              <p>
                <i @click="sameFloorDrainageOpen" class="btn-open">打开</i>
                <i @click="sameFloorDrainageClose" class="btn-close">关闭</i>
              </p>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isSameFloorDrainageOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isSameFloorDrainageClosed}">关到位</i>
              </p>
            </div>
            <div class="part-item">
              <h6>内涝调控演示阀</h6>
              <p>
                <i @click="waterloggingControlOpen" class="btn-open">打开</i>
                <i @click="waterloggingControlClose" class="btn-close">关闭</i>
              </p>
              <p>
                <i class="full-opened" :class="{active:swtchInfo.isWaterloggingControlOpened}">开到位</i>
                <i class="full-closed" :class="{active:swtchInfo.isWaterloggingControlClosed}">关到位</i>
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
                  <i
                    @click="config('VW1032',configInfo.waterTank1F)"
                  >{{configInfo.waterTank1F}}</i>
                  <span>Hz</span>
                </strong>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  频设定率:
                  <i
                    @click="config('VW1032',configInfo.waterTank2F)"
                  >{{configInfo.waterTank2F}}</i>
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
      <a @click="pageStep=0;addTimeoutTken()" class="router" href="javascript:void(0)">
        <i></i>返回目录
      </a>
    </div>
    <el-dialog width="600px" title="权限验证" :visible.sync="dialogTableVisible">
      <div class="password-box" v-if="pageStep===-1">
        <el-input width="300px" placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div class="password-box" v-if="pageStep=== 0">
        <el-input width="300px" placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmPassword">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import httpService from "../api/httpService";
import Demo from "./demo";
export default {
  name: "Home",
  data() {
    return {
      pageStep: -1,
      password: "",
      nowTime: "",
      apiToken: "",
      timeoutToken: "",
      dialogTableVisible: false,
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
        device: "",
      },
      configInfo: {
        waterTank1F: "",
        waterTank2F: "",
        waterPipe1Flow: "",
        waterPipe2Pressure: "",
        waterPipe2Flow: "",
        regulatingValve: "",
      },
      pageInfo: {
        page1Btn: 0,
        page2Btn: 0,
        page3Btn: 0,
        page4Btn: 0,
        page5Btn: 0,
      },
    };
  },
  methods: {
    stopAll() {
      this.showerClose();
      this.configData("VW1142", 0);
      this.configData("VW1144", 0);
      this.configData("VW1146", 0);
      this.configData("VW1148", 0);
      this.pageInfo = {
        page1Btn: 0,
        page2Btn: 0,
        page3Btn: 0,
        page4Btn: 0,
        page5Btn: 0,
      };
    },
    goIndexPage() {
      this.dialogTableVisible = true;
    },
    confirmPassword() {
      if (this.pageStep === -1) {
        if (this.password === "1234") {
          this.password = "";
          this.dialogTableVisible = false;
          this.pageStep = 0;
          this.addTimeoutTken();
          if (!this.apiToken) {
            this.checkIsVidwOpened();
            this.apiToken = setInterval(() => {
              this.checkIsVidwOpened();
            }, 5000);
          }
        } else {
          this.$message({
            message: "密码错误，请重新输入！",
            type: "warning",
          });
        }
      } else if (this.pageStep === 0) {
        if (this.password === "1234") {
          this.password = "";
          this.dialogTableVisible = false;
          this.pageStep = 6;
          this.addTimeoutTken();
        } else {
          this.$message({
            message: "密码错误，请重新输入！",
            type: "warning",
          });
        }
      }
    },
    goStep(step) {
      this.pageStep = step;
      this.addTimeoutTken();
    },
    // 清除锁屏定时器
    clearTimeoutToken() {
      window.clearTimeout(this.timeoutToken);
      console.log("清除定时器");
      this.timeoutToken = null;
    },
    addTimeoutTken() {
      if (this.timeoutToken) {
        console.log("清除之前的定时器");
        window.clearTimeout(this.timeoutToken);
      }
      this.timeoutToken = setTimeout(() => {
        console.log("回到屏保");
        this.pageStep = -1;
        if (this.apiToken) {
          window.clearInterval(this.apiToken);
          this.apiToken = "";
        }
      }, 300000);
      console.log("开启新的定时器");
    },
    viewOpen() {
      let that = this;
      httpService.viewOpen(function (response) {});
      this.addTimeoutTken();
    },
    viewClose() {
      let that = this;
      this.isLoading = true;
      httpService.viewClose(function (response) {});
      this.addTimeoutTken();
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
            Number(response.data["VW1062"]).toFixed(2) + "";
          that.swtchInfo.waterTank1P =
            Number(response.data["VW1064"]).toFixed(2) + "";
          that.swtchInfo.waterTank1F =
            Number(response.data["VW1060"]).toFixed(2) + "";
          that.swtchInfo.waterTank1Status =
            response.data["VW1072"] === "1" ? "运行" : "停机";
          // 水泵2
          that.swtchInfo.waterTank2A =
            Number(response.data["VW1068"]).toFixed(2) + "";
          that.swtchInfo.waterTank2P =
            Number(response.data["VW1070"]).toFixed(2) + "";
          that.swtchInfo.waterTank2F =
            Number(response.data["VW1066"]).toFixed(2) + "";
          that.swtchInfo.waterTank2Status =
            response.data["VW1074"] === "1" ? "运行" : "停机";

          // 水管1
          that.swtchInfo.waterPipe1HighWaterPressure =
            Number(response.data["VD1008"]).toFixed(2) + "";
          that.swtchInfo.waterPipe1LowWaterPressure =
            Number(response.data["VD1012"]).toFixed(2) + "";
          that.swtchInfo.waterPipe1Flow =
            Number(response.data["VD1016"]).toFixed(2) + "";
          // 水管2
          that.swtchInfo.waterPipe2Pressure =
            Number(response.data["VD1028"]).toFixed(2) + "";
          that.swtchInfo.waterPipe2Flow =
            Number(response.data["VD1024"]).toFixed(2) + "";

          // 选择开关
          that.swtchInfo.device = Number(response.data["V1004.1"]);

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
      this.addTimeoutTken();
    },
    waterTank1Open() {
      let that = this;
      httpService.waterTank1Open(function (response) {});
      this.addTimeoutTken();
    },
    waterTank2Open() {
      let that = this;
      httpService.waterTank2Open(function (response) {});
      this.addTimeoutTken();
    },
    waterTank1Close() {
      let that = this;
      httpService.waterTank1Close(function (response) {});
      this.addTimeoutTken();
    },
    waterTank2Close() {
      let that = this;
      httpService.waterTank2Close(function (response) {});
      this.addTimeoutTken();
    },
    rainfallOpen() {
      let that = this;
      httpService.rainfallOpen(function (response) {});
      this.addTimeoutTken();
    },
    rainfallClose() {
      let that = this;
      httpService.rainfallClose(function (response) {});
      this.addTimeoutTken();
    },
    siphonOpen() {
      let that = this;
      httpService.siphonOpen(function (response) {});
      this.addTimeoutTken();
    },
    siphonClose() {
      let that = this;
      httpService.siphonClose(function (response) {});
      this.addTimeoutTken();
    },
    sameFloorDrainageOpen() {
      let that = this;
      httpService.sameFloorDrainageOpen(function (response) {});
      this.addTimeoutTken();
    },
    sameFloorDrainageClose() {
      let that = this;
      httpService.sameFloorDrainageClose(function (response) {});
      this.addTimeoutTken();
    },
    waterloggingControlOpen() {
      let that = this;
      httpService.waterloggingControlOpen(function (response) {});
      this.addTimeoutTken();
    },
    waterloggingControlClose() {
      let that = this;
      httpService.waterloggingControlClose(function (response) {});
      this.addTimeoutTken();
    },
    showerOpen() {
      let that = this;
      this.showerOpen;
      httpService.showerOpen(function (response) {});
      this.addTimeoutTken();
      this.pageInfo.page1Btn = 1;
    },
    showerClose() {
      httpService.showerClose(function (response) {});
      this.addTimeoutTken();
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
    this.nowTimes();
    // this.checkIsVidwOpened();
    // let apiToken = setInterval(() => {
    //   this.checkIsVidwOpened();
    // }, 5000);
  },
  mounted: function () {
    let that = this;
    // 屏蔽右键
    document.oncontextmenu = () => false;
  },
  components: {
    Demo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./home.scss";
</style>
