<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <!-- <a-menu theme="light" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu> -->
      <a-menu
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['2']"
        mode="inline"
        theme="light"
        :inlineCollapsed="collapsed"
      >
        <template v-for="item in list">
          <a-menu-item v-if="!item.children" :key="item.key">
            <router-link :to="item.url">
              <a-icon type="pie-chart" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :menu-info="item" :key="item.key" />
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-breadcrumb style="margin: 16px;" :routes="routes">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
          <span v-if="routes.indexOf(route) === routes.length - 1">
            {{route.breadcrumbName}}
          </span>
          <router-link v-else :to="paths.join('/')">
            {{route.breadcrumbName}}
          </router-link>
        </template>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          margin: '0 16px 24px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SubMenu from "./SubMenu";

export default {
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: "1",
          title: "权限管理",
          url: '/dashboard/list'
        },
        {
          key: "2",
          title: "理赔管理",
          children: [
            {
              key: "2.1",
              title: "理赔查询",
              url: '/dashboard'
            },
            {
              key: "2.2",
              title: "理赔报案",
              url: '/dashboard'
            },
            {
              key: "2.3",
              title: "理赔照会",
              url: '/dashboard'
            },
            {
              key: "2.4",
              title: "保证金查询",
              url: '/dashboard'
            }
          ]
        }
      ],
      routes: [],
    };
  },
  watch: {
    '$route': function () {
      console.log('route change -> ', this.$route)
      const arr = this.$route.matched.map((item, index) => {
        return {
          path: item.path,
          breadcrumbName: item.meta.breadcrumbName || '首页'
        }
      })
      this.routes = arr
    }
  },
  components: {
    "sub-menu": SubMenu
  },
  mounted () {
    console.log(this.$router, this.$route, this)
  }
};
</script>
<style lang="scss">
#components-layout-demo-custom-trigger {
  height: 100%;
  .ant-layout-sider {
    background: #fff;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: #eee;
  margin: 16px;
}
</style>
