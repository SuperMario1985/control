<template>
  <div class="home">
    <div class="step" v-if="pageStep === -1">
      <div class="left-side"></div>
      <div class="right-side">
        <div class="log">
          <img src="../assets/images/screen-saver/logo.png" alt />
        </div>
        <div @click="pageStep = 0" class="img-box">
          <img src="../assets/images/screen-saver/system-name.png" alt />
        </div>
        <div @click="pageStep = 0" class="active-box">
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
            <span @click="goStep(6)">调试界面</span>
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
        <div class="acction-box">
          <div class="flur">
            <i>10m/h</i>
            <img src="../assets/images/step1/watch.png" alt />
            <br />
            <span>供水流量</span>
          </div>
          <a class="open active" href="javascript:void(0)">供水开</a>
          <a class="close" href="javascript:void(0)">供水开</a>
        </div>
        <a @click="pageStep = 0" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <ul>
          <li>
            <a @click="pageStep=1.4" href="javascript:void(0)">
              <img src="../assets/images/step1/1.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.1" href="javascript:void(0)">
              <img src="../assets/images/step1/2.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.1" href="javascript:void(0)">
              <img src="../assets/images/step1/3.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.5" href="javascript:void(0)">
              <img src="../assets/images/step1/4.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.2" href="javascript:void(0)">
              <img src="../assets/images/step1/5.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.2" href="javascript:void(0)">
              <img src="../assets/images/step1/6.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.3" href="javascript:void(0)">
              <img src="../assets/images/step1/7.png" alt />
            </a>
          </li>
          <li>
            <a @click="pageStep=1.3" href="javascript:void(0)">
              <img src="../assets/images/step1/8.png" alt />
            </a>
          </li>
          <li @click="pageStep=1.4">
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
        <a @click="pageStep = 1" class="router" href="javascript:void(0)">
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
          <a @click="pageStep = 1.5" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 1.2" href="javascript:void(0)">
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
        <a @click="pageStep = 1" class="router" href="javascript:void(0)">
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
          <a @click="pageStep = 1.1" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 1.3" href="javascript:void(0)">
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
        <a @click="pageStep = 1" class="router" href="javascript:void(0)">
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
          <a @click="pageStep = 1.2" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 1.4" href="javascript:void(0)">
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
        <a @click="pageStep = 1" class="router" href="javascript:void(0)">
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
          <a @click="pageStep = 1.3" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 1.5" href="javascript:void(0)">
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
        <a @click="pageStep = 1" class="router" href="javascript:void(0)">
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
          <a @click="pageStep = 1.4" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 1.1" href="javascript:void(0)">
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
        <a @click="pageStep = 0" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <p>
              <i class="start-button">降雨</i>
            </p>
            <p>
              <i class="close-button">停雨</i>
            </p>
          </div>
          <div class="show-rain">
            <div class="show-rain-item">
              <div>
                <img src="../assets/images/step2/rain01.png" alt />
                <p>小雨：24h降雨量小于10mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain03.png" alt />
                <p>中雨：24h降雨量10～25mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain05.png" alt />
                <p>大雨：24h降雨量25～50mm</p>
              </div>
            </div>
            <div class="show-rain-item">
              <div>
                <img src="../assets/images/step2/rain02.png" alt />
                <p>暴雨：24h降雨量50～100mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain04.png" alt />
                <p>大暴雨：24h降雨量100～250mm</p>
              </div>
              <div>
                <img src="../assets/images/step2/rain06.png" alt />
                <p>特大暴雨：24h降雨量250mm以上</p>
              </div>
            </div>
          </div>
        </div>
        <div class="router">
          <a @click="pageStep = 1" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 3" href="javascript:void(0)">
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
        <a @click="pageStep = 0" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <p>
              <i class="start-button">启动</i>
              <i class="close-button">停止</i>
            </p>
            <div class="show-data">
              水泵频率1:
              <span>50</span> Hz
            </div>
            <div class="show-data">
              排水流量:
              <span>700</span> m/h
            </div>
            <div class="show-data">
              排水流量:
              <span>50</span> L/s
            </div>
            <div class="show-data">
              上部压力:
              <span>50</span>Pa
            </div>
            <div class="show-data">
              下部压力:
              <span>50</span> Pa
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
          <a @click="pageStep = 2" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 4" href="javascript:void(0)">
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
        <a @click="pageStep = 0" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <p>
              <i class="start-button">启动</i>
              <i class="close-button">停止</i>
            </p>
            <div class="show-data">
              供水流量:
              <span>50</span> m/h
            </div>
            <div class="show-data">
              供水流量:
              <span>50</span> L/s
            </div>
          </div>
          <div class="info-box">
            <h5>
              <i></i>同层排水介绍
            </h5>
            <p>泰宁同层地漏排水流量试验装置，泰宁同层排水地漏设计合理、功能齐全、结构新颖，在高水封具有防臭功能的前提下，具有可调节端面。当杂物堵塞存水腔造成下水流量变慢时，用户可随时转出存水腔进行清洗，无需专业维修人员疏通，省工省料，方便施工，解决了老式地漏存在的种种问题</p>
          </div>
        </div>
        <div class="router">
          <a @click="pageStep = 3" href="javascript:void(0)">
            <i class="router-up"></i>上一页
          </a>
          <a @click="pageStep = 5" href="javascript:void(0)">
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
        <a @click="pageStep = 0" class="router" href="javascript:void(0)">
          <i></i>返回目录
        </a>
      </div>
      <div class="right-side">
        <div class="right-content">
          <div class="action-box">
            <p>
              <i class="start-button">启动</i>
              <i class="close-button">停止</i>
            </p>
            <div class="show-data">
              供水流量:
              <span>50</span> m/h
            </div>
            <div class="show-data">
              供水流量:
              <span>50</span> L/s
            </div>
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
    <demo v-on:step-change="pageStep = $event" v-if="pageStep === 6"></demo>
  </div>
</template>

<script>
import httpService from "../api/httpService";
import Demo from "./demo"
export default {
  name: "Home",
  data() {
    return {
      pageStep: -1,
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
  components: {
    Demo
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./home.scss";
</style>
