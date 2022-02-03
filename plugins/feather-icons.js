import Vue from 'vue'
import { PlayCircleIcon } from 'vue-feather-icons'

const components = {
  PlayCircleIcon,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
