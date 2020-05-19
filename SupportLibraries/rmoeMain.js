let globalChartRef1, globalChartRef2, globalChartRef3, sliders = [], sliderLabels = [], axisLimits = 20, axisCenter = 0, dtPlay = 500, playFrame, nPlay, playRR, playRV, playVR, playVV, rPlay, vPlay, aePlay, ydPlay, xdPlay, bPlay, playBool = false;

function createGraph1() {
    var config = {
        type: 'scatter',
        data: {
            datasets: [{
                // label: "Waypoints",
                data: [],
                fill: false,
				showLine: true,
				pointRadius: 0,
				borderColor: 'rgba(120,200,255,1)'
            },{
                // label: "Current Point",
                data: [{
					x: 0,
					y: 0
				}],
                fill: false,
				showLine: true,
				pointRadius: 5,
				pointBackgroundColor: 'rgba(120,255,255,1)',
				borderColor: 'rgba(120,200,255,1)'
            }]
        },
        options: {
			animation:{
				duration: 0
			},
			legend: {
				display: false
			},
            onClick: function (element, dataAtClick) {
				
            },
            title: {
                display: true,
                text: "View from Earth",
				fontColor: 'rgba(255,255,255,1)',
				fontSize: 20
            },
            scales: {
                xAxes: [{
					gridLines: {
						zeroLineColor: '#ffcc33',
						color: 'rgba(255,255,255,0.25)'
					},
                    type: "linear",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'In-Track',
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 30
                    },
					ticks: {
						min: -axisLimits,
						max: axisLimits,
						fontSize: 20,
						reverse: true,
						fontColor: 'rgba(255,255,255,1)',
					},
					afterBuildTicks: (a,ticks) => {

						if (playBool){
							ticks.pop();
							ticks.shift();
							ticks.pop();
							ticks.shift();
						}
						return ticks;
					}
                }, ],
                yAxes: [{
					gridLines: {
						zeroLineColor: '#ffcc33',
						color: 'rgba(255,255,255,0.25)'
					},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Cross-Track',
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 30
                    },
					ticks: {
						min: -3*axisLimits/4,
						max: 3*axisLimits/4,
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 20,
					}
                }]
            },
            responsive: true,
            maintainAspectRatio: true
        }
    };
    
    var ctx = document.getElementById('ChartCnvs1').getContext('2d');
    globalChartRef1 = new Chart(ctx, config);
}

function createGraph2() {
    var config = {
        type: 'scatter',
        data: {
            datasets: [{
                // label: "Waypoints",
                data: [],
                fill: false,
				showLine: true,
				pointRadius: 0,
				borderColor: 'rgba(120,200,255,1)'
            },{
                // label: "Current Point",
                data: [{
					x: 0,
					y: 0
				}],
                fill: false,
				showLine: true,
				pointRadius: 5,
				pointBackgroundColor: 'rgba(120,255,255,1)',
				borderColor: 'rgba(120,200,255,1)'
            }]
        },
        options: {
			animation:{
				duration: 0
			},
			legend: {
				display: false
			},
            onClick: function (element, dataAtClick) {
				
            },
            title: {
                display: true,
                text: "Looking Down Orbit",
				fontColor: 'rgba(255,255,255,1)',
				fontSize: 20
            },
            scales: {
                xAxes: [{
					gridLines: {
						zeroLineColor: '#ffcc33',
						color: 'rgba(255,255,255,0.25)'
					},
                    type: "linear",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Radial',
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 30
                    },
					ticks: {
						min: -20,
						max: 20,
						fontSize: 20,
						reverse: true,
						fontColor: 'rgba(255,255,255,1)',
					}
                }, ],
                yAxes: [{
					gridLines: {
						zeroLineColor: '#ffcc33',
						color: 'rgba(255,255,255,0.25)'
					},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Cross-Track',
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 30
                    },
					ticks: {
						min: -15,
						max: 15,
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 20,
					}
                }]
            },
            responsive: true,
            maintainAspectRatio: true
        }
    };
    
    var ctx = document.getElementById('ChartCnvs2').getContext('2d');
    globalChartRef2 = new Chart(ctx, config);
}

function createGraph3() {
    var config = {
        type: 'scatter',
        data: {
            datasets: [{
                // label: "Waypoints",
                data: [],
                fill: false,
				showLine: true,
				pointRadius: 0,
				borderColor: 'rgba(120,200,255,1)'
            },{
                // label: "Current Point",
                data: [{
					x: 0,
					y: 0
				}],
                fill: false,
				showLine: true,
				pointRadius: 5,
				pointBackgroundColor: 'rgba(120,255,255,1)',
				borderColor: 'rgba(120,200,255,1)'
            },{
                // label: "Ellipse",
                data: [],
                fill: false,
				showLine: true,
				pointRadius: 0,
				borderDash: [10,10],
				borderColor: 'rgba(255,255,255,0.5)'
            },{
                // label: "Beta Fill",
                data: [],
                fill: true,
				showLine: true,
				pointRadius: 0,
				borderColor: 'rgba(255,255,255,0)',
				backgroundColor: 'rgba(255,255,250,0.15)'
            }]
        },
        options: {
            onResize: function (element,a) {
				// console.log(globalChartRef.config.options.scales.xAxes[0].scaleLabel)
				setLabelSize(a.width);
            },
			animation:{
				duration: 0
			},
			legend: {
				display: false
			},
            onClick: function (element, dataAtClick) {
				
            },
            title: {
                display: true,
                text: "In-Plane View",
				fontColor: 'rgba(255,255,255,1)',
				fontSize: 40
            },
            scales: {
                xAxes: [{
					gridLines: {
						zeroLineColor: '#ffcc33',
						color: 'rgba(255,255,255,0.25)'
					},
                    type: "linear",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'In-Track',
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 30
                    },
					ticks: {
						min: -40,
						max: 40,
						fontSize: 20,
						reverse: true,
						fontColor: 'rgba(255,255,255,1)',
					},
					afterBuildTicks: (a,ticks) => {

						if (playBool){
							ticks.pop();
							ticks.shift();
							ticks.pop();
							ticks.shift();
						}
						return ticks;
					}
                }, ],
                yAxes: [{
					gridLines: {
						zeroLineColor: '#ffcc33',
						color: 'rgba(255,255,255,0.25)'
					},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Radial',
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 30
                    },
					ticks: {
						min: -20,
						max: 20,
						fontColor: 'rgba(255,255,255,1)',
						fontSize: 20,
					}
                }]
            },
            responsive: true,
            maintainAspectRatio: true
        }
    };
    
    var ctx = document.getElementById('ChartCnvs3').getContext('2d');
    globalChartRef3 = new Chart(ctx, config);
}

window.addEventListener('DOMContentLoaded', function () {
    
    createGraph1();
	createGraph2();
    createGraph3();
    setLabelSize($('#ChartCnvs3').width());
    globalChartRef1.update();
    globalChartRef2.update();
    globalChartRef3.update();
    sliders = document.getElementById("sliderDiv").querySelectorAll("input");
    sliderLabels = document.getElementById("sliderDiv").querySelectorAll("span");
	for (var ii = 0; ii < sliders.length; ii++) {
		sliders[ii].addEventListener('input',calculateTrajecories);	
	}
	document.addEventListener('keypress', function(key){
		let k = key.key;
		if (k === '-' || k === '_'){
			// Zoom out
			console.log('zoom');
			axisLimits += 1;
			globalChartRef.config.options.scales.xAxes[0].ticks.min = -axisLimits;
			globalChartRef.config.options.scales.xAxes[0].ticks.max = axisLimits;
			globalChartRef.config.options.scales.yAxes[0].ticks.min = -axisLimits/2;
			globalChartRef.config.options.scales.yAxes[0].ticks.max = axisLimits/2;
		}
		else if (k === '=' || k === '+'){
			//Zooom in
			axisLimits -= 1;
			globalChartRef.config.options.scales.xAxes[0].ticks.min = -axisLimits;
			globalChartRef.config.options.scales.xAxes[0].ticks.max = axisLimits;
			globalChartRef.config.options.scales.yAxes[0].ticks.min = -axisLimits/2;
			globalChartRef.config.options.scales.yAxes[0].ticks.max = axisLimits/2;
		}
		else if (k === 'p' || k === 'P'){
			if (!playBool){
				playBool = true;
			}
			else{
				playBool = false;
				return;
			}
			nPlay = 2*Math.PI/86164;
			aePlay = Number(sliders[0].value);
			xdPlay = Number(sliders[1].value);
			ydPlay = Number(sliders[2].value);
			bPlay = Number(sliders[3].value)*Math.PI/180;
			let zmax = Number(sliders[4].value);
			let m = Number(sliders[5].value)*Math.PI/180;
			let rPlay = [[-aePlay/2*Math.cos(bPlay)+xdPlay],[aePlay*Math.sin(bPlay)+ydPlay],[zmax*Math.sin(m)]];
			let vPlay = [[aePlay*nPlay/2*Math.sin(bPlay)],[aePlay*nPlay*Math.cos(bPlay)-1.5*xdPlay*nPlay],[zmax*nPlay*Math.cos(m)]];
			playRR = PhiRR(dtPlay,nPlay); playRV = PhiRV(dtPlay,nPlay); 
			playVR = PhiVR(dtPlay,nPlay); playVV = PhiVV(dtPlay,nPlay); 
			globalChartRef3.config.data.datasets[0].data = [];
			globalChartRef1.config.data.datasets[0].data = [];
			globalChartRef3.config.data.datasets[0].data.push({
				x: rPlay[1][0],
				y: rPlay[0][0]
			})
			globalChartRef1.config.data.datasets[0].data.push({
				x: rPlay[1][0],
				y: rPlay[2][0]
			})
			idInterval = setInterval(() => {
				//console.log(globalChartRef1.config.data.datasets[0].data)
				let rPlayT = math.add(math.multiply(playRR,rPlay),math.multiply(playRV,vPlay));
				vPlay = math.add(math.multiply(playVR,rPlay),math.multiply(playVV,vPlay));
				ydPlay -= 3/2*xdPlay*nPlay*dtPlay; bPlay += nPlay*dtPlay;
				createEllipse(ydPlay,xdPlay,aePlay,bPlay);
				rPlay = rPlayT;
				globalChartRef3.config.data.datasets[0].data.push({
					x: rPlay[1][0],
					y: rPlay[0][0]
				})
				globalChartRef1.config.data.datasets[0].data.push({
					x: rPlay[1][0],
					y: rPlay[2][0]
				})
				if ((aePlay+Math.abs(ydPlay)) > axisLimits) {
					axisCenter += -3/2*xdPlay*nPlay*dtPlay;
				}
				resetAxisSize();
				globalChartRef3.config.data.datasets[1].data[0].x = rPlay[1][0];
				globalChartRef3.config.data.datasets[1].data[0].y = rPlay[0][0];
				globalChartRef2.config.data.datasets[1].data[0].x = rPlay[0][0];
				globalChartRef2.config.data.datasets[1].data[0].y = rPlay[2][0];
				globalChartRef1.config.data.datasets[1].data[0].x = rPlay[1][0];
				globalChartRef1.config.data.datasets[1].data[0].y = rPlay[2][0];
				//globalChartRef1.config.data.datasets[1].data[0].x = rPlay[1][0];
				//globalChartRef1.config.data.datasets[1].data[0].y = rPlay[2][0];
				globalChartRef3.update();
				globalChartRef2.update();
				globalChartRef1.update();
				if (!playBool) {
					axisCenter = 0;
					resetAxisSize();
					clearInterval(idInterval);
					calculateTrajecories();
				}
			}, 25);
		}
		else if (k === 'e' || k === 'E'){
		}
	});
}, false);

 // HCW equations
function PhiRR(t,n){
	if (n === undefined){
		n = 2*Math.PI/86164;
	}
	let nt = n*t;
	return [[4-3*Math.cos(nt),0,0],[6*(Math.sin(nt)-nt), 1,0],[0,0,Math.cos(nt)]];
}
function PhiRV(t,n){
	if (n === undefined){
		n = 2*Math.PI/86164;
	}
	let nt = n*t;
	return [[Math.sin(nt)/n, 2*(1-Math.cos(nt))/n, 0],[(Math.cos(nt)-1)*2/n, (4*Math.sin(nt)-3*nt)/n, 0],[0,0,Math.sin(nt)/n]];
}
function PhiVR(t,n){
	if (n === undefined){
		n = 2*Math.PI/86164;
	}
	let nt = n*t;
	return [[3*n*Math.sin(nt),0,0],[6*n*(Math.cos(nt)-1), 0,0],[0,0,-n*Math.sin(nt)]];
}
function PhiVV(t,n){
	if (n === undefined){
		n = 2*Math.PI/86164;
	}
	let nt = n*t;
	return [[Math.cos(nt),2*Math.sin(nt),0],[-2*Math.sin(nt), 4*Math.cos(nt)-3,0],[0,0,Math.cos(nt)]];
}
// Calculate trajectories based off of waypoints and trajectory if burned
// missed at selected waypoint
function calculateTrajecories(){
	let dt = 1000;
	let n = 2*Math.PI/86164;
	let ae = Number(sliders[0].value);
	let xd = Number(sliders[1].value);
	let yd = Number(sliders[2].value);
	let beta = Number(sliders[3].value)*Math.PI/180;
	let zmax = Number(sliders[4].value);
	let m = Number(sliders[5].value)*Math.PI/180;
	for (slide in sliders) {
		sliderLabels[slide].textContent = sliders[slide].value;
	}
	let r = [[-ae/2*Math.cos(beta)+xd],[ae*Math.sin(beta)+yd],[zmax*Math.sin(m)]];
	let v = [[ae*n/2*Math.sin(beta)],[ae*n*Math.cos(beta)-1.5*xd*n],[zmax*n*Math.cos(m)]];
	rr = PhiRR(dt,n); rv = PhiRV(dt,n); vr = PhiVR(dt,n); vv = PhiVV(dt,n); 
	globalChartRef3.config.data.datasets[0].data = [];
	globalChartRef2.config.data.datasets[0].data = [];
	globalChartRef1.config.data.datasets[0].data = [];
	globalChartRef3.config.data.datasets[1].data[0].x = r[1][0];
	globalChartRef3.config.data.datasets[1].data[0].y = r[0][0];
	globalChartRef2.config.data.datasets[1].data[0].x = r[0][0];
	globalChartRef2.config.data.datasets[1].data[0].y = r[2][0];
	globalChartRef1.config.data.datasets[1].data[0].x = r[1][0];
	globalChartRef1.config.data.datasets[1].data[0].y = r[2][0];
	createEllipse(yd,xd,ae,beta);
	for (ii = 0; ii < 186164; ii += dt){
		globalChartRef3.config.data.datasets[0].data.push({
			x: r[1][0],
			y: r[0][0]
        })
        globalChartRef1.config.data.datasets[0].data.push({
			x: r[1][0],
			y: r[2][0]
		})
		if (ii < 90000){
			globalChartRef2.config.data.datasets[0].data.push({
				x: r[0][0],
				y: r[2][0]
			})
		}
		let rTemp= math.add(math.multiply(rr,r),math.multiply(rv,v));
		v = math.add(math.multiply(vr,r),math.multiply(vv,v));
		r = rTemp;
	}
	// console.log(globalChartRef1.config.data.datasets[0].data)
	globalChartRef3.update();
	globalChartRef2.update();
	globalChartRef1.update();
}
function createEllipse(xC,yC,a,B) {
	globalChartRef3.config.data.datasets[2].data = [];
	globalChartRef3.config.data.datasets[3].data = [];
	B = B % (2*Math.PI);
	for (ii = 0; ii <= 2*Math.PI; ii += 0.05) {
		globalChartRef3.config.data.datasets[2].data.push({
			x: a*Math.cos(ii)+xC,
			y: a/2*Math.sin(ii)+yC
		})
	}
	globalChartRef3.config.data.datasets[3].data.push({
		x: xC,
		y: yC
	})
	for (ii = 0; ii <= B; ii += 0.05) {
		globalChartRef3.config.data.datasets[3].data.push({
			x: a*Math.sin(ii)+xC,
			y: -a/2*Math.cos(ii)+yC
		})
	}
    globalChartRef3.config.data.datasets[3].data.push({
        x: a*Math.sin(B)+xC,
        y: -a/2*Math.cos(B)+yC
    })
	globalChartRef3.config.data.datasets[3].data.push({
		x: xC,
		y: yC
	})
}
function resetAxisSize() {
	globalChartRef3.config.options.scales.xAxes[0].ticks.min = -40 + axisCenter;
	globalChartRef3.config.options.scales.xAxes[0].ticks.max = 40 + axisCenter;
	globalChartRef1.config.options.scales.xAxes[0].ticks.min = -20 + axisCenter;
	globalChartRef1.config.options.scales.xAxes[0].ticks.max = 20 + axisCenter;
	//globalChartRef3.config.options.scales.yAxes[0].ticks.min = -3*axisLimits/4;
	//globalChartRef3.config.options.scales.yAxes[0].ticks.max = 3*axisLimits/4;
}
function setLabelSize(canvasWidth) {
    let labelSize = 60, fontSize = 90;;
    // console.log(canvasWidth);
    // console.log(globalChartRef1.config.options.title.fontSize);
    globalChartRef1.config.options.title.fontSize = canvasWidth/labelSize*1.2;
	globalChartRef1.config.options.scales.xAxes[0].scaleLabel.fontSize = canvasWidth/labelSize;
	globalChartRef1.config.options.scales.yAxes[0].scaleLabel.fontSize = canvasWidth/labelSize;
	globalChartRef1.config.options.scales.xAxes[0].ticks.fontSize = canvasWidth/fontSize;
	globalChartRef1.config.options.scales.yAxes[0].ticks.fontSize = canvasWidth/fontSize
    globalChartRef2.config.options.title.fontSize = canvasWidth/labelSize*1.2;
	globalChartRef2.config.options.scales.xAxes[0].scaleLabel.fontSize = canvasWidth/labelSize;
	globalChartRef2.config.options.scales.yAxes[0].scaleLabel.fontSize = canvasWidth/labelSize;
	globalChartRef2.config.options.scales.xAxes[0].ticks.fontSize = canvasWidth/fontSize;
	globalChartRef2.config.options.scales.yAxes[0].ticks.fontSize = canvasWidth/fontSize;
    globalChartRef3.config.options.title.fontSize = canvasWidth/labelSize*1.2;
	globalChartRef3.config.options.scales.xAxes[0].scaleLabel.fontSize = canvasWidth/labelSize;
	globalChartRef3.config.options.scales.yAxes[0].scaleLabel.fontSize = canvasWidth/labelSize;
	globalChartRef3.config.options.scales.xAxes[0].ticks.fontSize = canvasWidth/fontSize;
    globalChartRef3.config.options.scales.yAxes[0].ticks.fontSize = canvasWidth/fontSize;
    
    
}