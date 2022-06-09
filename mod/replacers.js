let lobbyModes=newStr.match(/...\....\((\d){1,4}\)\];...\[(\d){1,3}\](.){0,20}\[\];/)[0];
newStr=newStr.replace(lobbyModes,"'dsp'," + lobbyModes);

newStr=newStr.replace('T7k[4][T7k[653]][T7k[2][288]]=T7k[62][T7k[2][264]](T7k[34]);', 'T7k[4][T7k[653]][T7k[2][288]]=T7k[62][T7k[2][264]](T7k[34]);' + THE_THING);
newStr=newStr.replace('editorCanTarget:true};', MODE_INFO);

newStr=newStr.replace('doGrapple(A9Q,x9Q,y9Q,b9Q);', 'doGrapple(A9Q,x9Q,y9Q,b9Q,mode);');


newStr=newStr.replace('this[m1k[9][1571]][m1k[9][477]](2 * this[m1k[9][1512]],0xcccccc,0.5);', MODIFIED_GRAPPLE);
newStr=newStr.replaceAll('T7k[0][4][T7k[2][118]] == "sp"', '(T7k[0][4][T7k[2][118]] == "sp" || T7k[0][4][T7k[2][118]] == "dsp")');
newStr=newStr.replace('if(T7k[0][4][T7k[2][118]] == "sp"', 'if((T7k[0][4][T7k[2][118]] == "sp" || T7k[0][4][T7k[2][118]] == "dsp")');
newStr=newStr.replace('this[G0M[149]][G0M[118]] == "sp"', '(this[G0M[149]][G0M[118]] == "sp" || this[G0M[149]][G0M[118]] == "dsp")');
newStr=newStr.replace('r6H[0][3][r6H[2][118]] != G9b.z43(1188)', '(r6H[0][3][r6H[2][118]] != G9b.z43(1188) || r6H[0][3][r6H[2][118]] == "dsp")');
newStr=newStr.replace('this[G0M[149]][G0M[118]] == "sp"', '(this[G0M[149]][G0M[118]] == "sp" || this[G0M[149]][G0M[118]] == "dsp")');
newStr=newStr.replace('this[o1k[7][149]][o1k[7][118]] == G9b.A43(1133)', 'this[o1k[7][149]][o1k[7][118]] == G9b.A43(1133) || this[o1k[7][149]][o1k[7][118]] == "dsp"');

newStr=newStr.replace('this[G0M[1589]](A9Q,x9Q,y9Q,b9Q);', 'this[G0M[1589]](A9Q,x9Q,y9Q,b9Q,this[G0M[149]][G0M[118]]);');

//Cooldown. REMEMBER TO KEEP BELOW if(T7k[0][4][T7k[2][118]] == "sp"){ REPLACEMENT
newStr=newStr.replace('if((T7k[0][4][T7k[2][118]] == "sp" || T7k[0][4][T7k[2][118]] == "dsp"))', 'if(T7k[0][4][T7k[2][118]] == "sp")');
newStr=newStr.replace('T7k[13]=T7k[59];', DEATH_GRAPPLE_A1A+'T7k[13]=T7k[59];');
//newStr=newStr.replace('=500;;}', '=500;;}if(k7k[0][5][k7k[4][118]] == "dsp"){k7k[1].discs[k7k[35][k7k[47]].id].a1a=1000.999;;}');
