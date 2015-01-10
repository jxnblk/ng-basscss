
module.exports = function(elem, attr, transclude) {

  // Extract the children from this instance of the directive
  var children = elem.children();

  // Wrap the chidren in our template
  //var template = angular.element('<div ng-repeat="item in collection"></div>');
  var template = angular.element(template);
  template.append(children);

  // Append this new template to our compile element
  elem.html('');
  elem.append(template);

  return {
    link: function(scope, elem, attr) {
      console.log('link util');
    }
    //pre: function preLink(scope, iElement, iAttrs, crtl, transclude) {
    //    scope.collection = [1, 2, 3, 4, 5];
    //},
    //post: function postLink(scope, iElement, iAttrs, controller) {
    //  console.log(iElement[0]);
    //}
  };
}
