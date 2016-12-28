// Stateless component

var editorHtml = {
  bindings: {
    html: '<'
  },
  templateUrl: 'app/components/editor/editor-html/editor-html.html'
}

angular
  .module('components.editor')
  .component('editorHtml', editorHtml);