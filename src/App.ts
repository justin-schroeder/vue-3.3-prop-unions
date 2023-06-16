import { h, defineComponent } from "vue"
import type { RenderFunction } from "vue"
import PropUnionComponent from "./components/PropUnionComponent.ts"

export default defineComponent(
  (): RenderFunction => () =>
    h(PropUnionComponent, { type: "pizza", toppings: "apple", bar: "foo" })
)
