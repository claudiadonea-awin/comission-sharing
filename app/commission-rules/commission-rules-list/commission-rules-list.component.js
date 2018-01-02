function commissionRulesListCtrl() {
  console.log(this);
}

module.exports = {
  template: require('./commission-rules-list.html'),
  controller: commissionRulesListCtrl,
  bindings: {
    rules: '='
  }
}
