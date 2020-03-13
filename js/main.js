$(document).ready(function() {

    const controller = new ScrollMagic.Controller()

    const introScene = new ScrollMagic.Scene({
            triggerElement: 'h1',
            triggerHook: 1
        })
        .setClassToggle('h1', 'fade-in') // add class to project01
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'white',
            colorStart: '#75C695',
            colorEnd: 'pink'
        }) // this requires a plugin
        .addTo(controller);

    //pin intro
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#intro',
            triggerHook: 0,
            // duration: '100%'
        })
        .setPin('#intro', { pushFollowers: false })
        .addTo(controller);
    //pin first
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#first',
            triggerHook: 0,
            duration: '100%'
                // duration: '100%'
        })
        .setPin('#first', { pushFollowers: false })
        .addTo(controller);

    //second
    var secondScene = new ScrollMagic.Scene({
            triggerElement: '#second-content',
            triggerHook: 1
        })
        .setClassToggle('#second-content', 'fade-in')
        .addTo(controller)

    //bar one
    var barOne = new ScrollMagic.Scene({
            triggerElement: ".bar",
            triggerHook: 1
        })
        .setClassToggle('.bar>.bar-1', 'html')
        .addTo(controller)

    //bar two
    var barTwo = new ScrollMagic.Scene({
            triggerElement: ".bar",
            triggerHook: 1
        })
        .setClassToggle('.bar>.bar-2', 'css')
        .addTo(controller)

    //bar three
    var barThree = new ScrollMagic.Scene({
            triggerElement: ".bar",
            triggerHook: 1
        })
        .setClassToggle('.bar>.bar-3', 'jquery')
        .addTo(controller)

    //bar four
    var barTwo = new ScrollMagic.Scene({
            triggerElement: ".bar",
            triggerHook: 1
        })
        .setClassToggle('.bar>.bar-4', 'javascript')
        .addTo(controller)




})