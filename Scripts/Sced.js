let meetType = [
    'Varisty',
    'Jv/Ms',
    'State Meets',
    'Only Events',
]

const select = document.getElementById('selectE')
const varisty = document.getElementById('varsity')
const jvms = document.getElementById('Jv/ms')
const state = document.getElementById('stateMeets')
const only = document.getElementById('onlyEvents')


for (let i = 0; i < meetType.length; i++ ) {
    let opt = meetType[i];
    let el = document.createElement('option')
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function hideThings() {
 varisty.style.display = 'none'
}


select.addEventListener('change', function(){getVal(select.value)})
function getVal() {
    const val = document.querySelector('select').value;
    if(val === 'All Meets'){
        jvms.style.display = "contens"
        varisty.style.display = 'contents'
        state.style.display = "contents"
        only.style.display = 'contents'
    }
    if(val === 'Jv/Ms'){
        varisty.style.display = "none"
        state.style.display = "none"
        only.style.display = 'none'
        jvms.style.display = 'contents'
    }
    if(val === 'State Meets'){
        varisty.style.display = "none"
        jvms.style.display = "none"
        only.style.display = 'none'
        state.style.display = 'contents'
    }
    if(val === 'Varisty'){
        jvms.style.display = "none"
        state.style.display = "none"
        only.style.display = 'none'
        varisty.style.display = 'contents'
    }
    if(val === 'Only events'){
        jvms.style.display = "none"
        varisty.style.display = 'none'
        state.style.display = "none"
        only.style.display = 'contents'
    }
  }
