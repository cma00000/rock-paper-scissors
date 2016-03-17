import jibo from 'jibo';
let {Status, createBehavior, factory} = jibo.bt;

module.exports = createBehavior({
    constructor(text) {
        this.text = text;
        this.status = Status.INVALID;
    },
    start() {
        this.status = Status.SUCCEEDED;
        console.log(this.text);
        return true;
    },
    stop() {

    },
    update() {
        return this.status;
    }
});

factory.addBehavior(module, "project");
