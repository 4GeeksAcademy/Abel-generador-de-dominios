import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




function hack(noun, extension) {
	let longitud_de_extension = extension.length;
	if (noun.length >= longitud_de_extension) {
		return noun.slice(-longitud_de_extension) === extension
	}
}


window.onload = function () {
	//write your code here
	let content = ''
	let pronoun = ['the', 'our'];
	let adjective = ['great', 'big'];
	let noun = ['puedes', 'jogger', 'radio'];
	let extensions = ["es", "com", "net", "us", "io"]

	pronoun.forEach( pronombre => {
		adjective.forEach( adjetivo => {
			noun.forEach( nombre => {
				extensions.forEach( extension => {
					if (hack(nombre, extension)) {
						content += `
							<li class="list-group">
								${pronombre}${adjetivo}${nombre.slice(0, nombre.length - extension.length)}.${extension}
							</li>`
					}
					else {
						content += `
							<li class="list-group">
								${pronombre}${adjetivo}${nombre}.${extension}
							</li>`
					}
				})
			})
		})
	})

	document.querySelector("#dominios").innerHTML = content
};
