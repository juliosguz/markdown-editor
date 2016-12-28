// Stateful component

var editor = {
  templateUrl: 'app/components/editor/editor.html',
  controller: function(EditorService) {

    this.$onInit = function() {
      this.text = '# Firebase \n\n## Alcanza el éxito fácilmente con tu app\n\nLas herramientas y la infraestructura que necesitas para crear mejores apps y para lograr el crecimiento de empresas exitosas.';
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