let MODIFIED_GRAPPLE=`
if(mode == "sp") {
	this[O5p[7][1570]][O5p[7][477]](2 * this[O5p[7][1511]],0xcccccc,0.5);
}
else {
	var color;
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

let THE_THING=`
if(j6V.mo == "dsp") {
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

	for (let player of O7R[0][0].discs) {
		if(player == O7R[0][0].discs[O7R[956]] || player == undefined || (player.team > 1 && player.team == O7R[0][0].discs[O7R[956]].team )) continue;
		if(distToSegmentSquared(player, 1, O7R[0][0].discs[O7R[956]], O7R[294])) {
			O7R[5][O7R[0][0].discs.indexOf(player)].diedThisStep = 1;	
		}
}
}`;

let MODE_INFO=`
P1R[43][P1R[7][551]][S9L.C1E(1131)]={lobbyName:S9L.W1E(2083),gameStartName:S9L.C1E(2084),lobbyDescription:S9L.C1E(2085),tutorialTitle:S9L.W1E(2086),tutorialText:S9L.C1E(2087),forceTeams:false,forceTeamCount:null,editorCanTarget:true};
P1R[43][P1R[7][551]]["dsp"]={
	lobbyName:"Death Grapple",
	gameStartName:"DEATH GRAPPLE",
	lobbyDescription:"You have rockets on either side of your player.\\nUse the up key to engage both jets, or left/right to only engage one.\\nHold Z to give your rockets a temporary boost.",
	tutorialTitle:S9L.C1E(2072),
	tutorialText:S9L.C1E(2073),
	forceTeams:false,
	forceTeamCount:null,
	editorCanTarget:false
};`;