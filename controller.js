
class Controller {
    constructor(wrapper = document.querySelector('wrapper'), tl) {
        const controls = document.createElement('div')
        controls.setAttribute('id', 'controller')
        wrapper.appendChild(controls)

        const play = document.createElement('button')
        play.innerHTML = 'play'
        play.setAttribute('id', 'play')
        controls.appendChild(play)

        const pause = document.createElement('button')
        pause.innerHTML = 'pause'
        pause.setAttribute('id', 'pause')
        controls.appendChild(pause)

        const reverse = document.createElement('button')
        reverse.innerHTML = 'reverse'
        reverse.setAttribute('id', 'reverse')
        controls.appendChild(reverse)

        const restart = document.createElement('button')
        restart.innerHTML = 'restart'
        restart.setAttribute('id', 'restart')
        controls.appendChild(restart)

        const fastSpeed = document.createElement('button')
        fastSpeed.innerHTML = 'fastSpeed'
        fastSpeed.setAttribute('id', 'fastSpeed')
        controls.appendChild(fastSpeed)

        const normalSpeed = document.createElement('button')
        normalSpeed.innerHTML = 'normalSpeed'
        normalSpeed.setAttribute('id', 'normalSpeed')
        controls.appendChild(normalSpeed)

        play.addEventListener("click", toPlay);
        pause.addEventListener("click", toPause);
        reverse.addEventListener("click", toReverse);
        restart.addEventListener("click", toRestart);
        fastSpeed.addEventListener("click", toSpeedUp);
        normalSpeed.addEventListener("click", toNormalSpeed);

        function toPlay() {
            if (tl.progress() < 1) {
                tl.play()
            } else {
                tl.restart();
            }
        }

        function toPause() {
            tl.pause();
        }

        function toReverse() {
            tl.reverse();
        }

        function toRestart() {
            tl.restart();
        }

        function toSpeedUp() {
            tl.timeScale(4);
        }

        function toNormalSpeed() {
            tl.timeScale(1);
        }


        controls.style.left =  wrapper.offsetWidth + 'px';
       
        
    }
}



// const contr = new Controller()