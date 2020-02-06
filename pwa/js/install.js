'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstallPrompt.prompt();
    console.log("DDDDDDD");
    evt.srcElement.setAttribute('hidden', true);
    
    deferredInstallPrompt.userChoice.then((choice) => {
        if (choice.outcome === 'accepted'){
            console.log('accepted', choice);
        }
        else {
            console.log('dismiss', choice);
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log("app installedddd", evt);
}