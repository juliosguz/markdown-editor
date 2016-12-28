// Service 

function EditorService() {
  return function(toTransform) {
    return marked(toTransform);
  }
}

angular
  .module('components.editor')
  .service('EditorService', EditorService);