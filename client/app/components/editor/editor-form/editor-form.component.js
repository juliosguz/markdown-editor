// Stateless component

var editorForm = {
  bindings: {
    text: '<',
    onTransformText: '&'
  },
  templateUrl: 'app/components/editor/editor-form/editor-form.html',
  controller: function() {
    
    var lastText;

    this.transformText = function(event) {

      // Sending new value to parent component
      if( lastText !== this.text ) {
        this.onTransformText({
          $event: {
            text: this.text
          }
        });

        lastText = this.text;
      }

    }
  }
}

angular
  .module('components.editor')
  .component('editorForm', editorForm);