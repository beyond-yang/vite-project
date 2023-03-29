import { defineComponent, PropType, useAttrs } from 'vue';
import { dataProps } from './types'
import * as Icons from '@element-plus/icons-vue'
// import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<any[]>,
      require: true,
    },
    defaultActive: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false,
    },
    // 数据别名配置
  alias: {
    type: Object as PropType<dataProps>,
    default: () => ({
      name: 'name',
      icon: 'icon',
      index: 'index',
      children: 'children'
    }),
  }
  },
  components: {
    // ElMenu, ElMenuItem, ElSubMenu
  },
  setup(props, ctx) {
    const attrs = useAttrs();
    // 封装一个渲染无限层级菜单的方法,函数会返回一段jsx的代码
    let renderMenu = (data: any[]) => {
      // 首先会去循环菜单
      return data.map((item: any) => {
        const icon = (Icons as any)[item[props.alias.icon || 'icon']]
        // jsx 中如何去处理vue的插槽
        let slots = {
          title: () => {
            return <>
              <el-icon>
                <icon />
              </el-icon>
              <span>{item[props.alias.name || 'name']}</span>
            </>
          }
        }

        if (item?.[props.alias.children || 'children']?.length) {
          return (
            <el-sub-menu index={item[props.alias.index || 'index']} v-slots={slots}>
              {renderMenu(item[props.alias.children || 'children'])}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item[props.alias.index || 'index']}>
            <el-icon>
              <icon />
            </el-icon>
            <span>{item[props.alias.name || 'name']}</span>
          </el-menu-item>
        )
      });
    }
    return () => {
      return <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}>
          {renderMenu(props.data as any[])}
        </el-menu>
    };
  }
})