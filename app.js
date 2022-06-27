/* =============== Soal 1 ================ */
function checkInput(e,chars,field){
  if (chars.indexOf(e.key) == 0){
    alert('Masukkan angka 1-9.');
    return false;
  }
}
function generateInput() {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const value =  document.getElementById("input").value; // get value from input
  const digits = (""+value).split(""); // split value to an array

  let counter = digits.length - 1;
  for (let i = 0; i < digits.length; i++){
    let pangkat = 10 ** counter--;
  
    app.append(pangkat*digits[i], document.createElement("div"));
  }

  return false;
}
/* =============== Soal 1 ================ */

/* =============== Soal 2 ================ */
timeout = null;
startBtn = document.getElementById("startBtn");
stoptBtn = document.getElementById("stopBtn");
stoptBtn.style.display = 'none';

startBtn.onclick = function () {
  let secondInput = document.getElementById("second-input").value;

  if (secondInput == "") {
    alert("Please Fill All Required Field");
    return false;
  }

  const app = document.querySelector('#secondApp');
  app.innerHTML = '';
  this.style.display = "none";
  stopBtn.style.display = 'inline';

  const value = secondInput; // get value from input
  let i = 1;

  function startLoop() {
    timeout = setTimeout(function() {
      let element = document.createElement("div");
      let randomValue = Math.floor(Math.random() * 100) + 1;

      element.append(randomValue);
      app.append(element);
      element.style.height = randomValue + "px";

      if (randomValue <= 25) element.style.backgroundColor = "green";
      else if (randomValue <= 50) element.style.backgroundColor = "yellow";
      else if (randomValue <= 75) element.style.backgroundColor = "red";
      else element.style.backgroundColor = "blue";

      i++;
      if (i <= value) {
        startLoop();
      }
      startBtn.style.display = 'inline';
    }, 500)
  }
  
  startLoop();
  return false;
}

stoptBtn.onclick = function () {
  this.style.display = "none";
  startBtn.style.display = 'inline';
  clearTimeout(timeout);
};
/* =============== Soal 2 ================ */