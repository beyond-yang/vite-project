import { defineComponent, PropType, useAttrs } from 'vue';
import { menuItem } from './types'
// import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<menuItem[]>,
      require: true,
    },
    defaultActive: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    // ElMenu, ElMenuItem, ElSubMenu
  },
  setup(props, ctx) {
    const attrs = useAttrs();
    // 封装一个渲染无限层级菜单的方法,函数会返回一段jsx的代码
    let renderMenu = (data: menuItem[]) => {
      // 首先会去循环菜单
      return data.map((item: menuItem) => {
        // jsx 中如何去处理vue的插槽
        let slots = {
          title: () => {
            return <>
              <el-icon>
                <item.icon />
              </el-icon>
              <span>{item.name}</span>
            </>
          }
        }

        if (item?.children?.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            <el-icon>
              <item.icon />
            </el-icon>
            <span>{item.name}</span>
          </el-menu-item>
        )
      });
    }
    return () => {
      return <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}>
          {renderMenu(props.data as menuItem[])}
        </el-menu>
    };
  }
})