#!/usr/bin/env node


const note = process.argv[2];
const newNote = {
	id: Date.now(),
	note,
}
console.log('Welcome to CLI Notes!');
console.log('your new note', newNote);
