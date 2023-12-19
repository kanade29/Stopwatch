let startTime = 0;
 let running = false;

 function startStop() {
     if (!running) {
         running = true;
         increment();
    } else {
         running = false;
     }
 }

function reset() {
    running = false;
    startTime = 0;
    document.getElementById('display').innerText = '00:00:00';
}

function increment() {
    if (running) {
        setTimeout(function() {
            startTime++;
            let hours = Math.floor(startTime / 3600).toString().padStart(2, '0');
            let minutes = Math.floor((startTime % 3600) / 60).toString().padStart(2, '0');
            let seconds = (startTime % 60).toString().padStart(2, '0');

            document.getElementById('display').innerText = hours + ':' + minutes + ':' + seconds;
            increment();
        }, 1000); // Update every second (1000 milliseconds)
    }
}
