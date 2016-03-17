import jibo from 'jibo';
let {Status, factory} = jibo.bt;


function start() {
    //let root = factory.create('../behaviors/lovehate');
    let root = factory.create('../behaviors/21-rock-paper-scissors');
    //let root = factory.create('../behaviors/rps-test');
    root.start();
    let intervalId = setInterval(() => {
        if (root.status !== Status.IN_PROGRESS) {
            clearInterval(intervalId);
        }
        else {
            root.update();
        }
    }, 33);
}

jibo.init().then(() => {
    // require('./behaviors/debug-behavior');
    let eyeElement = document.getElementById('eye');
    jibo.visualize.createRobotRenderer(eyeElement, jibo.visualize.DisplayType.EYE);
    start();
}).catch(e => {
    console.error(e);
});
