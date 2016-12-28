// Stateful component

var editor = {
  templateUrl: 'app/components/editor/editor.html',
  controller: function(EditorService) {

    this.$onInit = function() {
      this.text = '';
      this.html = '';
    }    

    // Updating the local variable(parent) and generating html from markdown text
    this.transformText = function(event) {
      this.text = event.text;
      this.html = EditorService(event.text);
    }

  }
};

editor.$inject = ['EditorService'];

angular
  .module('components.editor')
  .component('editor', editor);