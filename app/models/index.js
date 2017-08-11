import router from './router'
import shot from './shots/index'

export function registerModels(app) {
  app.model(router)
  app.model(shot)
}
