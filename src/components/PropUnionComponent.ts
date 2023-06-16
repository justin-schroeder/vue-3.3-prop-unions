import { defineComponent, h } from "vue"
import type { RenderFunction } from "vue"

type Pizza = { type: "pizza"; toppings: "pepperoni" | "pineapple"; bar: string }
type Pie = { type: "pie"; toppings: "apple" | "cherry"; foo: string }
type PropUnion = Pizza | Pie

export default defineComponent(
  function setup<P extends PropUnion>(props: P): RenderFunction {
    return () => h("div", `${props.type} with ${props.toppings}`)
  },
  {
    props: ["type", "toppings", "foo", "bar"],
  }
)
