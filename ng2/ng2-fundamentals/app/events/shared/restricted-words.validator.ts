import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
	return (control: FormControl): {[key: string]: any} => { //weird syntax to say this function will return an object, doesn't matter what shape think (control) =>
		if(!words) { return null; }

		var invalidWords = words.map(w => control.value.includes(w) ? w : null)
														.filter(w => w != null);

		return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
	}
}
