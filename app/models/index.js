import appModel from './login/index';
import router from './router';

export function registerModels(app) {
  app.model(appModel);
  app.model(router);
}
