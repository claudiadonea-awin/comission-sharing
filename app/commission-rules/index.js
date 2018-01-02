import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './routes.js'
import commissionRulesList from './commission-rules-list/commission-rules-list.component'
import commissionRulesService from './commission-rules.service'

export default angular.module('nwrlPoc.commissionRules', [uirouter])
  .config(routes)
  .component('commissionRulesList', commissionRulesList)
  .service('commissionRulesService', commissionRulesService)
  .name
