document.addEventListener('DOMContentLoaded', function(){

  document.getElementById('post-content').addEventListener('keyup' , addPostContent);

  function addPostContent(event) {
    var text = this.value;
    document.getElementById('content').innerHTML = marked(text);
  }
});
