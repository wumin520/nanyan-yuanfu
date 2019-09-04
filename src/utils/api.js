import axios from "axios";
import qs from "qs";

var instance = axios.create({
  baseURL: "",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" }
});
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log(config, "sfdsdf");
    if (config.method.toLowerCase() === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

let api = {};
api.cdkLogin = function(data) {
  return instance.post("/sh/login", data);
};
api.cdkRegister = function(data) {
  return instance.post("/sh/register", data);
};
api.cdkSendSms = function(data) {
  return instance.post("/sh/sendSms", data);
};
api.cdkPostBaseData = function(data) {
  return instance.post("/sh/base/data", data);
};

api.cdkPostExtraData = function(data) {
  return instance.post("/sh/sign_up", data);
};

api.cdkCategoryList = function() {
  return instance.get("/sh/category");
};

api.cdkMonthProfit = function() {
  return instance.get("/sh/month/profit");
};

api.getWeixinQrcode = function(params) {
  let origin = "http://wbot.test.youlianhuan.com";
  if (window.location.href.indexOf("https") > -1) {
    origin = `https://youlianhuan.com`;
  }
  return instance.post(`${origin}/v1/wechat/getQrcode`, params);
};

// 单页商品列表
api.singleProductList = function(params) {
  let origin = process.env.VUE_APP_CDK_DEQ;
  return instance.get(
    `${origin}/v1/web/ts/mobile/single?sh_id=${params.sh_id}&type=${params.type}&page=${params.page}`
  );
};

// 单页商品链接
api.singleGoodsurl = function(params) {
  let origin = process.env.VUE_APP_CDK_DEQ;
  return instance.get(
    `${origin}/v1/web/ts/mobile/goods/uri?sh_id=${params.sh_id}&type=${params.type}&task_plan_id=${params.task_plan_id}`
  );
};

export default api;
