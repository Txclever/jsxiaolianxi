// // 返回ID为'test'的节点：
// var test = document.getElementById('test');

// // 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
// var trs = document.getElementById('test-table').getElementsByTagName('tr');

// // 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
// var reds = document.getElementById('test-div').getElementsByClassName('red');

// // 获取节点test下的所有直属子节点:
// var cs = test.children;

// // 获取节点test下第一个、最后一个子节点：
// var first = test.firstElementChild;
// var last = test.lastElementChild;

// // 通过querySelector获取ID为q1的节点：
// var q1 = document.querySelector('#q1');

// // 通过querySelectorAll获取q1节点内的符合条件的所有节点：
// var ps = q1.querySelectorAll('div.highlighted > p');
// // 获取<p id="p-id">...</p>
// var p = document.getElementById('p-id');
// // 设置文本为abc:
// p.innerHTML = 'ABC'; // <p id="p-id">ABC</p>
// // 设置HTML:
// p.innerHTML = 'ABC <span style="color:red">222</span> XYZ';
// // <p>...</p>的内部结构已修改

// // 获取<p id="p-id">...</p>
// var p = document.getElementById('p-id');
// // 设置CSS:
// p.style.color = '#ff0000';
// p.style.fontSize = '20px';
// p.style.paddingTop = '2em';
// p.style.paddingLeft = '2em';

// var js = document.getElementById('js');
// var list = document.getElementById('list');
// list.appendChild(js);


// var
//   list = document.getElementById('list'),
//   haskell = document.createElement('p');
// haskell.id = 'haskell';
// haskell.innerHTML = 'Haskell';
// list.appendChild(haskell);
// console.log(haskell);

// var d = document.createElement('style');
// console.log(d);
// d.setAttribute('type', 'text/css');
// d.innerHTML = 'p { color: red }';
// document.getElementsByTagName('head')[0].appendChild(d)

var a = document.getElementById('list');
console.log(a);
var b = document.getElementById('python');
var c = document.createElement('abc');
c.id = "ABC";
c.innerHTML = "Haskell";
a.insertBefore(c, b);



var d = document.createElement('style');
console.log(d);
d.setAttribute('type','text/css');
d.innerHTML = 'p{color : red}';
document.getElementsByTagName('head')[0].appendChild(d);
