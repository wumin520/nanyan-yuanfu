<template>
<div class="login_bg_">
  <div class="top_header_">
    <img class="logo_" src="../assets/logo.png"/>
  </div>
  <div class="login_container_">
    <div class="login_title_">
      登录
      <a-divider class="line_" orientation="center"></a-divider>
    </div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [
                { required: true, message: '请输入用户名/手机号!' }
              ]
            }
          ]"
          placeholder="请输入用户名/手机号"
          size="large"
        >
          <a-icon slot="suffix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: '请输入密码' }
              ]
            }
          ]"
          type="password"
          placeholder="请输入密码"
          size="large"
        >
          <a-icon slot="suffix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'veri_code',
            {
              rules: [
                { required: true, message: '请输入验证码' }
              ]
            }
          ]"
          type="password"
          placeholder="请输入验证码"
          size="large"
        >
          <!-- <a-icon slot="suffix" type="lock" style="color: rgba(0,0,0,.25)" /> -->
        </a-input>
        <img class="veri_code_" src=""/>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true
            }
          ]"
        >
          记住用户名
        </a-checkbox>
        <a class="login-form-forgot" href="">
          记住密码
        </a>
        <a-divider orientation="center"></a-divider>
        <a-button size="large" type="primary" html-type="submit" class="login-form-button">
          立即登录
        </a-button>
        或者
        <a href="">
          立即注册!
        </a>
      </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$router.push("/dashboard");
        }
      });
    }
  }
};
</script>
<style lang="scss">
.login_bg_ {
  height: 100%;
  overflow: hidden;
  background: url('../assets/home_bg.png') no-repeat;
  background-size: 100% 100%;
  background-position: top left;
  .top_header_ {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background:rgba(255,255,255,0.8);
    padding: 12px 0 0 43px;
    height: 60px;
    // margin-bottom: 60px;

    .logo_ {
      width: 102px;
      height: auto;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_container_ {
  width: 438px;
  padding: 31px 58px 0;
  box-sizing: border-box;
  background: #fff;
  box-shadow:0px 5px 20px 0px rgba(121,118,118,0.3);
  * {
    box-sizing: border-box;
  }
  .login_title_ {
    text-align: center;
    font-size:29px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(138,165,253,1);
    margin-bottom: 32px;
    .line_ {
      width:29px !important;
      min-width: 29px;
      height:9px;
      background:rgba(138,165,253,1);
      margin: 0 auto;
    }
  }
  .veri_code_ {
    width:70px;
    height:31px;
    background:rgba(239,242,255,1);
    position: absolute;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
    line-height: 0;
    right: 12px;
  }
}
// #components-form-demo-normal-login .login-form {
//   max-width: 300px;
// }
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  // display: block;
  width: 100%;
  // width:240px;
  // height:60px;
  background:rgba(138,165,253,1);
  border: 1px solid #8AA5FD;
  // border-radius:6px;
  margin: 0 auto;
  // font-size:30px;
  // font-family:Source Han Sans CN;
  // font-weight:400;
  // color:rgba(255,255,255,1);
}
</style>
