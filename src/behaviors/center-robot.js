"use strict";

let jibo = require('jibo');
let Status = jibo.bt.Status;
let createBehavior = jibo.bt.createBehavior;
let factory = jibo.bt.factory;

module.exports = createBehavior({
    constructor: function(isGlobal) {
        this.isGlobal = isGlobal;
        this.status = Status.INVALID;
    },
    start: function() {
        this.status = Status.IN_PROGRESS;
        let dofs = jibo.animate.dofs;
        jibo.animate.centerRobot(dofs.ALL, this.isGlobal, () => {
            this.status = Status.SUCCEEDED;
        });
        return true;
    },
    stop: function() {

    },
    update: function() {
        return this.status;
    }
});

factory.addBehavior(module, "project");
