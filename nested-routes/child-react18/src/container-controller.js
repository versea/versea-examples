import { DeferredContainer } from '@versea/shared'

export const containerController = new DeferredContainer({
  handleValue: (value) => {
    console.log(value)
  }
})
