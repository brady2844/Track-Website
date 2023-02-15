let Heats = [
    '4x100m',
    '4x200m',
    '4x400m',
    '4x800m',
    'Shot Put',
    'Discus',
    'Javlin',
    'High Jump',
    'Long Jump',
    'Triple Jump',
    'Pole Vault',
    '100m',
    '200m',
    '400m',
    '110m Hurdles',
    '300m Hurdles',
    '800m',
    '1600m',
    '3200m',
]


const select = document.getElementById('selectE')


for (let i = 0; i < Heats.length; i++ ) {
    let opt = Heats[i];
    let el = document.createElement('option')
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}