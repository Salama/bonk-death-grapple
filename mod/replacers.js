newStr=newStr.replace('S9L.W1E(116)];','"dsp",S9L.W1E(116)];');
newStr=newStr.replace('O7R[5][O7R[956]][O7R[8][288]]=O7R[72][O7R[8][264]](O7R[15]);', 'O7R[5][O7R[956]][O7R[8][288]]=O7R[72][O7R[8][264]](O7R[15]);' + THE_THING);
newStr=newStr.replace('this[O5p[7][1570]][O5p[7][477]](2 * this[O5p[7][1511]],0xcccccc,0.5);', MODIFIED_GRAPPLE);
newStr=newStr.replace('P1R[43][P1R[7][551]][S9L.C1E(1131)]={lobbyName:S9L.W1E(2083),gameStartName:S9L.C1E(2084),lobbyDescription:S9L.C1E(2085),tutorialTitle:S9L.W1E(2086),tutorialText:S9L.C1E(2087),forceTeams:false,forceTeamCount:null,editorCanTarget:true};', MODE_INFO);

newStr=newStr.replaceAll('O7R[0][4][O7R[8][118]] == "sp"', '(O7R[0][4][O7R[8][118]] == "sp" || O7R[0][4][O7R[8][118]] == "dsp")');
newStr=newStr.replace('this[t1C[149]][t1C[118]] == "sp"', 'this[t1C[149]][t1C[118]] == "sp" || this[t1C[149]][t1C[118]] == "dsp"');
newStr=newStr.replaceAll('B1V[0][3][B1V[3][118]] == S9L.C1E(1132)', '(B1V[0][3][B1V[3][118]] == S9L.C1E(1132) || B1V[0][3][B1V[3][118]] == "dsp")');
newStr=newStr.replace('this[S5p[4][149]][S5p[4][118]] == S9L.C1E(1132)', '(this[S5p[4][149]][S5p[4][118]] == S9L.C1E(1132) || this[S5p[4][149]][S5p[4][118]] == "dsp")');

newStr=newStr.replace('this[t1C[1588]](f0M,w0M,t0M,K2M);', 'this[t1C[1588]](f0M,w0M,t0M,K2M,this[t1C[149]][t1C[118]]);');
newStr=newStr.replace('doGrapple(I6i,U6i,R6i,z6i)', 'doGrapple(I6i,U6i,R6i,z6i,mode)');