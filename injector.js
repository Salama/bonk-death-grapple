function DGInjector(str){
	let newStr = str;
	/***CONSTANTS***/
	/***REPLACERS***/

	console.log("Death Grapple injector run");
	return newStr;
}

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