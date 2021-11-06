function DGInjector(str){
	newStr = str;
	newStr=newStr.replace('[S9L.C1E(107),S9L.W1E(1130),S9L.C1E(1131),S9L.W1E(1132),',DEATH_GRAPPLE_MODE);
	newStr=newStr.replace('O7R[5][O7R[956]][O7R[8][288]]=O7R[72][O7R[8][264]](O7R[15]);', 'O7R[5][O7R[956]][O7R[8][288]]=O7R[72][O7R[8][264]](O7R[15]);' + THE_THING);
	newStr=newStr.replace('this[O5p[7][1570]][O5p[7][477]](2 * this[O5p[7][1511]],0xcccccc,0.5);', MODIFIED_GRAPPLE);
	newStr=newStr.replace('P1R[43][P1R[7][551]][S9L.W1E(62)]={lobbyName:S9L.C1E(2070),gameStartName:S9L.W1E(2070),lobbyDescription:S9L.W1E(2071),tutorialTitle:S9L.C1E(2072),tutorialText:S9L.C1E(2073),forceTeams:false,forceTeamCount:null,editorCanTarget:false};', MODE_INFO);
	
	newStr=newStr.replaceAll('O7R[0][4][O7R[8][118]] == "sp"', '(O7R[0][4][O7R[8][118]] == "sp" || O7R[0][4][O7R[8][118]] == "dsp")');
	newStr=newStr.replace('this[t1C[149]][t1C[118]] == "sp"', 'this[t1C[149]][t1C[118]] == "sp" || this[t1C[149]][t1C[118]] == "dsp"');
	newStr=newStr.replaceAll('B1V[0][3][B1V[3][118]] == S9L.C1E(1132)', '(B1V[0][3][B1V[3][118]] == S9L.C1E(1132) || B1V[0][3][B1V[3][118]] == "dsp")');
	newStr=newStr.replace('this[S5p[4][149]][S5p[4][118]] == S9L.C1E(1132)', '(this[S5p[4][149]][S5p[4][118]] == S9L.C1E(1132) || this[S5p[4][149]][S5p[4][118]] == "dsp")')
	
	newStr=newStr.replace('this[t1C[1588]](f0M,w0M,t0M,K2M);', 'this[t1C[1588]](f0M,w0M,t0M,K2M,this[t1C[149]][t1C[118]]);')
	newStr=newStr.replace('doGrapple(I6i,U6i,R6i,z6i)', 'doGrapple(I6i,U6i,R6i,z6i,mode)');
	if(str === newStr) throw "Injection failed!";
	console.log("Death Grapple injector run");
	return newStr;
}

const MODIFIED_GRAPPLE=`
if(mode == "sp") {
	this[O5p[7][1570]][O5p[7][477]](2 * this[O5p[7][1511]],0xcccccc,0.5);
}
else {
	let color;
	switch(O5p[0][0][O5p[7][41]][this[O5p[7][1105]]].team) {
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
	this[O5p[7][1570]][O5p[7][477]](2 * this[O5p[7][1511]],color,1);
}
`;

const THE_THING=`
if(j6V.mo == "dsp") {
	const getDistance = (p1, p2) => {
		return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
	}
	const distToSegmentSquared = (circleCenter, circleRadius, segmentStart, segmentEnd) => {
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

	for (let player of O7R[0][0].discs) {
		if(player == O7R[0][0].discs[O7R[956]] || player == undefined || (player.team > 1 && player.team == O7R[0][0].discs[O7R[956]].team )) continue;
		if(distToSegmentSquared(player, 1, O7R[0][0].discs[O7R[956]], O7R[294])) {
			O7R[5][O7R[0][0].discs.indexOf(player)].diedThisStep = 1;	
		}
}
}`;

const END_GAME=`
function w8I() {
	if(j0V[94]["hostID"] == j0V[94]["getLSID"]()) {
		j0V[94]["sendReturnToLobby"]();
	}
`;

const MODE_INFO=`
P1R[43][P1R[7][551]][S9L.W1E(62)]={
	lobbyName:S9L.C1E(2070),
	gameStartName:S9L.W1E(2070),
	lobbyDescription:S9L.W1E(2071),
	tutorialTitle:S9L.C1E(2072),
	tutorialText:S9L.C1E(2073),
	forceTeams:false,
	forceTeamCount:null,
	editorCanTarget:true
};
P1R[43][P1R[7][551]]["dsp"]={
	lobbyName:"Death Grapple",
	gameStartName:"DEATH GRAPPLE",
	lobbyDescription:"You have rockets on either side of your player.\\nUse the up key to engage both jets, or left/right to only engage one.\\nHold Z to give your rockets a temporary boost.",
	tutorialTitle:S9L.C1E(2072),
	tutorialText:S9L.C1E(2073),
	forceTeams:false,
	forceTeamCount:null,
	editorCanTarget:false
};`

const DEATH_GRAPPLE_MODE=`[S9L.C1E(107),S9L.W1E(1130),S9L.C1E(1131),S9L.W1E(1132),"dsp",` //Adds death grapple to mode selection button

if(!window.bonkCodeInjectors)
window.bonkCodeInjectors = [];
window.bonkCodeInjectors.push(bonkCode => {
	try {
		return DGInjector(bonkCode);
	} catch (error) {
		alert(
`Whoops! Death Grapple was unable to load.
This may be due to an update to Bonk.io. If so, please report this error!
This could also be because you have an extension that is incompatible with \
Death Grapple, such as the Bonk Leagues Client. You would have to disable it to use \
Death Grapple.
		`);
		throw error;
	}
});

console.log("Death Grapple injector loaded");
