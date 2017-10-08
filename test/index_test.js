import { expect } from 'chai';
import http from '../src/index';

describe('http test', function() {
    it('run it', function(done) {
	http({ method: "GET", url: "https://www.google.com" }).then(
	    _ => {
		done()
	    },
	    err => {
		// rejection message is find here
		done();
	    });
    })
})
