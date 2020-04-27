import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import Antd from 'ant-design-vue'
<%_ if (options.customTheme) { _%>
import '../antd-variables.less'
<%_ } else { _%>
import 'ant-design-vue/dist/antd.css'
<%_ } _%>
Vue.use(Antd)
<%_ } else { _%>
import { Pagination, Button } from 'ant-design-vue'
<%_ if (options.lang !== 'en_US') { _%>
import { LocaleProvider } from 'ant-design-vue'
Vue.component(LocaleProvider.name, LocaleProvider)
<%_ } _%>
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
<%_ } _%>
