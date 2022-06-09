let MODIFIED_GRAPPLE=`
if(this.gameSettings.mo == "sp") {
	this[m1k[9][1571]][m1k[9][477]](2 * this[m1k[9][1512]],0xcccccc,0.5);
}
else {
	var color;
	//var cooldown = 0xcccccc * (m1k[0][0].discs[this.playerID].a1a == Math.floor(m1k[0][0].discs[this.playerID].a1a) ? 0 : 1);
	var cooldown = 0xcccccc * (m1k[0][0].discs[this.playerID].a1a == Math.floor(m1k[0][0].discs[this.playerID].a1a) ? 0 : 1);
	switch(m1k[0][0].discs[this.playerID].team) {
		case 2:
			color = 0xff0000;
			break;
			case 3:
			color = 0x0000ff;
			break;
			case 4:
			color = 0x00ff00;
			break;
			case 5:
			color = 0xffff00;
			break;
		default:
			color = 0x000000;
			break;
	}
	this.specialGraphic.lineStyle(2 * this.scaleRatio,color|cooldown,1);
}
`;

let THE_THING=`
if(T7k[0][4].mo == "dsp") {
	let getDistance = (p1, p2) => {
		return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
	}
	let distToSegmentSquared = (circleCenter, circleRadius, segmentStart, segmentEnd) => {
		/*https://web.archive.org/web/20211104230620/https://www.emanueleferonato.com/2018/08/06/pure-mathematics-line-segment-vs-circle-collision-detection-along-with-html5-example/*/
		let l2 = getDistance(segmentStart, segmentEnd);
		let t = ((circleCenter.x - segmentStart.x) * (segmentEnd.x - segmentStart.x) + (circleCenter.y - segmentStart.y) * (segmentEnd.y - segmentStart.y)) / l2;
		t = Math.max(0, Math.min(1, t));
		let tX = segmentStart.x + t * (segmentEnd.x - segmentStart.x);
		let tY = segmentStart.y + t * (segmentEnd.y - segmentStart.y);
		let tPoint = {
			x: tX,
			y: tY
		}
		let distancePoint = {}
		distancePoint.x = Math.round(tX);
		distancePoint.y =  Math.round(tY);
		return getDistance(circleCenter, tPoint) < circleRadius * circleRadius;
	}

	for (let player of T7k[0][0].discs) {
		if(player == T7k[0][0].discs[T7k[653]] || player == undefined || (player.team > 1 && player.team == T7k[0][0].discs[T7k[653]].team) || T7k[0][0].discs[T7k[653]].a1a != Math.floor(T7k[0][0].discs[T7k[653]].a1a)) continue;
		if(distToSegmentSquared(player, 1, T7k[0][0].discs[T7k[653]], T7k[775])) {
			E.globalStepVars.discs[T7k[0][0].discs.indexOf(player)].diedThisStep = 1;	
		}
}
}`;

let MODE_INFO=`
editorCanTarget:true};
v2k[10][v2k[7][551]]["dsp"]={
	lobbyName:"Death Grapple",
	gameStartName:"DEATH GRAPPLE",
	lobbyDescription:"Grapple mode, but grapples kill\\nenemy players on impact.",
	tutorialTitle:"",
	tutorialText:"",
	forceTeams:false,
	forceTeamCount:null,
	editorCanTarget:false
};`;

let DEATH_GRAPPLE_A1A=`
if(T7k[0][4].mo == "dsp" && T7k[0][0].ftu == -1) {
	if(T7k[4][T7k[653]].a1a - Math.floor(T7k[4][T7k[653]].a1a) > 1 - 0.10) T7k[4][T7k[653]].a1a -= 0.001;
	else T7k[4][T7k[653]].a1a = Math.floor(T7k[4][T7k[653]].a1a);
	if(T7k[4][T7k[653]].swing) {
		T7k[4][T7k[653]].a1a -= 4;
		if(T7k[4][T7k[653]].a1a < 0) {
			T7k[4][T7k[653]].a1a=0;
		}
		if(T7k[4][T7k[653]].a1a < 500) {
			T7k[4][T7k[653]].a1a=0;
			T7k[4][T7k[653]].swing=false;
		}
	}
	else {
		T7k[4][T7k[653]].a1a += 3;
		if(T7k[4][T7k[653]].a1a > 1000) {
			T7k[4][T7k[653]].a1a=1000 + (T7k[4][T7k[653]].a1a - Math.floor(T7k[4][T7k[653]].a1a));
		}
	}
} else if(T7k[0][4].mo == "dsp") {T7k[4][T7k[653]].a1a = 1000.999;}
`;