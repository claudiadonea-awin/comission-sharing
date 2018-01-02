import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import commissionRules from './commission-rules';

angular.module('nwrlPoc', [uirouter, commissionRules])
  .config(routes)
