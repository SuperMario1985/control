import axios from "axios";
let host = 'http://127.0.0.1:8080';
let httpServe = axios.create();
function nowWeather(returnFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: "https://devapi.heweather.net/v7/weather/now?location=101010100&key=506c8ed1fba74434b70d2f45d7476470"
    }).then(function (response) {
        resultInfo.success = true
        if (response && response.status === 200) {
            resultInfo.data = response.data.now;
        } else {
            resultInfo.data = {
                text: "多云",
                temp: "25"
            }
        }
        if (returnFun) {
            returnFun(resultInfo);
        }
    });
}
function fultherWeather(returnFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: "https://devapi.heweather.net/v7/weather/24h?location=101010100&key=506c8ed1fba74434b70d2f45d7476470"
    }).then(function (response) {
        resultInfo.success = true
        if (response && response.status === 200) {
            resultInfo.data = response.data.hourly;
        }
        if (returnFun) {
            returnFun(resultInfo);
        }
    });
}
function threeDaysWeather(returnFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: "https://devapi.heweather.net/v7/weather/3d?location=101010100&key=506c8ed1fba74434b70d2f45d7476470"
    }).then(function (response) {
        resultInfo.success = true
        if (response && response.status === 200) {
            resultInfo.data = response.data.daily;
        }
        if (returnFun) {
            returnFun(resultInfo);
        }
    });
}

function test1() {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: "/dataProcess/GetRealTimeData"
    }).then(function (response) {
        let msg = JSON.stringify(msg);

    });
}
function test2() {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=M0.0&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);

    });
}
function test3() {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: "/dataProcess/GetHistoryData?startDate=2020-07-14&endDate=2020-07-15&interval=2"
    }).then(function (response) {
        let msg = JSON.stringify(msg);

    });
}
function viewOpen(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.0&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);

        if (retureFun) {
            retureFun(response);
        }
    }).catch(function (res) {
        let msg = JSON.stringify(res);

        if (retureFun) {
            retureFun(res);
        }
    })
}
function viewClose(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.0&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);

        if (retureFun) {
            retureFun(response);
        }
    }).catch(function (res) {
        let msg = JSON.stringify(res);

        if (retureFun) {
            retureFun(res);
        }
    })
}
function rainfallOpen(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.1&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function rainfallClose(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.1&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function siphonOpen(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.2&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function siphonClose(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.2&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function sameFloorDrainageOpen(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.3&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function sameFloorDrainageClose(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.3&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function waterloggingControlOpen(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.4&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function waterloggingControlClose(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1001.4&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function waterTank1Open(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1000.0&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function waterTank1Close(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1000.0&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function waterTank2Open(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1000.1&value=1"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
function waterTank2Close(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData?tag=V1000.1&value=0"
    }).then(function (response) {
        let msg = JSON.stringify(msg);
        if (retureFun) {
            retureFun(response);
        }

    }).catch(function (res) {
        let msg = JSON.stringify(res);
        if (retureFun) {
            retureFun(res);
        }

    })
}
// 读取数据
function checkIsVidwOpened(retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/GetRealTimeData"
    }).then(function (response) {
        if (retureFun) {
            retureFun(response);
        }
    }).catch(function (res) {
        if (retureFun) {
            retureFun(res);
        }
    })
}
// 配置
function configData(configInfo, retureFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: host + "/dataProcess/WriteData",
        params: {
            tag: configInfo.tag,
            value: configInfo.value
        }
    }).then(function (response) {
        let msg = JSON.stringify(msg);

        if (retureFun) {
            retureFun(response);
        }
    }).catch(function (res) {
        let msg = JSON.stringify(res);

        if (retureFun) {
            retureFun(res);
        }
    })
}

let test = { "VW1066": "0", "VW1068": "0", "VD1008": "-150", "VD1028": "-3.71", "V1000.0": "0", "V1000.1": "0", "V1001.0": "0", "V1001.1": "0", "V1001.2": "0", "V1004.0": "0", "V1001.3": "0", "V1004.1": "0", "V1001.4": "0", "V1005.1": "1", "V1006.0": "0", "V1005.2": "0", "V1006.1": "0", "V1005.3": "0", "V1006.2": "0", "VW1070": "0", "VD1024": "-150", "VW1072": "0", "VW1074": "0", "VW1032": "35", "VW1034": "0", "VW1036": "80", "VD1016": "-6.25", "VW1038": "12", "V1005.4": "0", "V1005.5": "0", "V1005.6": "0", "V1005.7": "0", "VD1012": "-150", "VW1060": "0", "VW1062": "0", "VW1040": "0", "VW1064": "0", "VW1042": "23" }

export default {
    test1,
    test2,
    test3,
    nowWeather,
    fultherWeather,
    threeDaysWeather,
    viewOpen,
    viewClose,
    rainfallOpen,
    rainfallClose,
    siphonOpen,
    siphonClose,
    sameFloorDrainageOpen,
    sameFloorDrainageClose,
    waterloggingControlOpen,
    waterloggingControlClose,
    waterTank1Open,
    waterTank1Close,
    waterTank2Open,
    waterTank2Close,
    checkIsVidwOpened,
    configData
}