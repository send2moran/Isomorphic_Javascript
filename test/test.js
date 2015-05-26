import {Post} from "../sdk/entities/post";
import * as testJson from './mocks/posts';
import * as RequestManager from '../sdk/utils/RequestManager.js';
import {Authentication} from '../sdk/Services/AuthenticationService.js';
import {SessionManager} from '../sdk/utils/';

var post = Post(testJson.posts[0]);

//http://chaijs.com/api/bdd/
var chai = require('chai'),

assert = chai.assert,
should = chai.should(),
expect = chai.expect;


describe('Test SDK', function(done) {

  describe("when given post json data", function() {

   it("post object should have id", function() {
      expect(post.id).to.equal('76h9v');
    });

    it("post object should have cover images", function() {
      expect(post.coverImage.getArray().length).to.be.above(0);
    });

    it("authentication object should have login function", function() {
      expect(Authentication.login).to.exist;
    });

    it("authentication object should return token", function() {
      this.timeout(15000);
      return Authentication.login('moderator@whipclip.com', '_password_').then(function(res){
          expect(res.sessionToken).to.exist;
      });
    });

    it("authentication session token should exsit", function() {
        expect(SessionManager().get()).to.exist;
    });


  });

});
