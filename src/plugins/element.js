import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import zhCn from "element-plus"



export default (app) => {
  app.use(ElementPlus, {
    locale: zhCn,
  })
}
