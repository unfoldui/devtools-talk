function itsADeadCode(){
    let first = 'Ravi';
    let second = 'Sharma';
    console.info('this function is useless.');
}

function callMe(){
    let a = 1,
        b = 2;
    console.log(`I got called! and ${a} + ${b} = ${a+b}`);
}

// SNIPPETS JS //
document.getElementById('form1').addEventListener('submit', form1Submitted)
document.getElementById('form2').addEventListener('submit', form2Submitted)
document.getElementById('form3').addEventListener('submit', form3Submitted)


function switchToForm(from, to) {
    const nextForm = document.getElementById(to);
    nextForm.classList.add('active');
    nextForm.querySelector('input').focus();

    document.getElementById(from).classList.remove('active');
}

function form1Submitted(e){
  e.preventDefault();
  switchToForm('form1', 'form2');
}
function form2Submitted(e){
  e.preventDefault();
  switchToForm('form2', 'form3');
}
function form3Submitted(e){
  e.preventDefault();
  document.getElementById('form3').classList.remove('active');
  document.getElementById('success').classList.remove('hidden');
}

function resetForm(){
  document.getElementById('form1').classList.add('active')
  document.getElementById('form2').classList.remove('active')
  document.getElementById('form3').classList.remove('active')
  document.getElementById('success').classList.add('hidden');
}
