<template>
  <div id="zhEn">
    <h4>{{ $t('title') }}</h4>
    <ul class="tab-ul">
      <li>{{ $t('navbar.home') }}</li>
      <li>{{ $t('navbar.introduction') }}</li>
      <li>{{ $t('navbar.contact') }}</li>
    </ul>
    <el-button class="zhEn" type="primary" size="small" @click="changeLocale">中文/EN</el-button>
  </div>
</template>

<script>
  import LangStorage from '../common/cookie/lang'

  export default {
    name: "zhEn",
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      changeLocale() {
        console.log(this.$i18n.locale);
        let locale = this.$i18n.locale;
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        LangStorage.setLang(this.$i18n.locale) //后面会用做切换和将用户习惯存储到本地浏览器
      },
    },
  }
</script>

<style scoped>
  #zhEn {
    margin: 10px;
    padding: 10px;
    overflow: hidden;
    border: 1px solid #42B983;
  }

  .tab-ul {
    float: left;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
  }

  .tab-ul li {
    float: left;
    margin: 0 10px;
  }

  .zhEn {
    float: left;
    margin: 5px 10px 0 20px;
  }
</style>
