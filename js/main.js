if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/pwa/sw.js').then(function(){console.log("registered");})
  });
}

Notification.requestPermission(function(status){
    console.log(status);
})

function displayNotification(){
    if (Notification.permission == 'granted'){
        navigator.serviceWorker.getRegistration().then(function(reg){
            reg.showNotification("Hello PUBG!!");
        })
    }
}

const notiButton = document.getElementById('notify');

notiButton.addEventListener('click', displayNotification);