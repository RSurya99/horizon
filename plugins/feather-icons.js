import Vue from 'vue'
import { PlayCircleIcon, XIcon } from 'vue-feather-icons'

const components = {
  PlayCircleIcon,
  XIcon,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
