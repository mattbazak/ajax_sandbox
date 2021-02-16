document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // Optional - for spinners and loaders 
  xhr.onprogress = function(){
     console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
     console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  xhr.onerror = function() {
    console.log('request error');
  }

  xhr.send();
}