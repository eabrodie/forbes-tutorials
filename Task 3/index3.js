var github = require('github-basic');
var client = github({version: 3});

var currentRes;
var loadMoreButton = document.getElementById('loadMoreButton');
loadMoreButton.style.display = 'none';
loadMoreButton.addEventListener("click", function () {loadNextPage(currentRes);}, false);

var submit = document.getElementById("submit");
submit.addEventListener("click", showRepos, false);

function addProjectName(element, index, array) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(element.name));
  result.appendChild(li);  
};

function loadNextPage(res){
  res.getNext().done(function (res) {
    res.forEach(addProjectName); 
    nextPage(res)
  });
};


function nextPage(res) {
  if (res.urlNext) {
    currentRes = res;
    loadMoreButton.style.display = 'block';    
  } else {
    loadMoreButton.style.display = 'none';
  };
};
  

function showRepos() {
  var username = document.getElementById('username').value;
  var result = document.getElementById('result');
  result.textContent = '';
  
  client.get('/users/:user/repos', {user: username}).done(function (res) {
    res.forEach(addProjectName);
    nextPage(res);    
  });
};