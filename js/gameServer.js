var ably = new Ably.Realtime('ZkFqGA.IVi64w:aaGrO9xvFbuGIplv');
var channel = ably.channels.get('game1');

function publish(title,message){
    channel.publish(title,message);
}

window.addEventListener('DOMContentLoaded', (event) => {
    swal("What game-mode/color would you like?", {
        buttons: {
            blue: "1 Player - Blue",
            red: "1 Player - Red",
            rednet: "Network - Red",
            bluenet: "Network - Blue",
        },
        closeOnClickOutside: false,
    }).then(
        (value)=>{
            if (value=='bluenet'){
                player='blue';
                channel.subscribe('data', function(message) {
                    if (message.data.from =='red'){
                        console.log("recieved message from red",message)
                        if (!gameStart && !timerStart && message.data.startTime == null){
                            console.log('sent message w/ time')
                            let time = new Date().getTime();
                            channel.publish('data',{from:'blue',startTime: time+5000,rmoe: {rd: 0, id0: 0, B0: 1.5707963267948966, a: 0.25}, t0: 0,winner: "",winTime: 0});
                        }else if (!gameStart && !timerStart && message.data.startTime != null){
                            console.log('starting Timer')
                            timerStart=true;
                            startTime=message.data.startTime;
                        }else{
                            p2.rmoe=message.data.rmoe;
                            p2.t0=message.data.t0;
                            p2PercNet = message.data.perc;
                            winTimeNet = message.data.winTime;
                        }
                    }
                });
                channel.publish('data',{from:'blue',startTime:null,rmoe:{rd: 0, id0: 0, B0: 1.5707963267948966, a: 0.25}, t0: 0,winner:"",winTime:0});
            }else if(value == 'rednet'){
                player='red';
                channel.subscribe('data', function(message) {
                    if (message.data.from =='blue'){
                        console.log("recieved message from blue",message)
                        if (!gameStart && !timerStart && message.data.startTime == null){
                            console.log('sent another blank message')
                            channel.publish('data',{from:'red',startTime:null,rmoe: {rd: 0, id0: 0, B0: -1.5707963267948966, a: 0.25}, t0: 0,winner: "",winTime: 0});
                        }else if (!gameStart && !timerStart && message.data.startTime != null){
                            console.log('repeating message w/ time and starting Timer')
                            channel.publish('data',{from:'red',startTime:message.data.startTime,rmoe:{rd: 0, id0: 0, B0: -1.5707963267948966, a: 0.25},t0: 0,winner:"",winTime:0});
                            timerStart=true;
                            startTime=message.data.startTime;
                        }else{
                            p2.rmoe=message.data.rmoe;
                            p2.t0=message.data.t0;
                            p2PercNet = message.data.perc;
                            winTimeNet = message.data.winTime;
                        }
                    }
                });
                channel.publish('data',{from:'red',startTime:null,rmoe:{rd: 0, id0: 0, B0: -1.5707963267948966, a: 0.25}, t0: 0,winner:"",winTime:0});
            }else{
                player = value;
                gameStart = false;
                timerStart = true;
                startTime = new Date().getTime();
                local = true;
            }
        }
    )
});
//examplemsg = {timer=null,rmoe={rd: 0, id0: 0, B0: 0, a: 0},winner="",winTime=0};
//On choosing a color
    //Establish subscription to other channel
    //Send empty exapmlemsg to establish presence (MSG1)

//If you're the blue player
    //Upon receiving an MSG1, send a time 5 seconds in the future (msg2b2r)
    //Upon receiving a msg2r2b, start the timer

//If you're the red player
    //Upon receiving an MSG2, start the timer and reply with the specified time (msg2r2b)


// // Publish a message to the test channel

// Subscribe to messages on channel

// channel.subscribe('greeting', function(message) {
//     console.log(message.data.msg);
// });

// channel.publish('greeting', 'hello');

