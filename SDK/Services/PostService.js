import _ from 'lodash';
import {ObjectAssignWithPrototype} from '../Utils';
import {Post} from '../sdk/entities/post';
import * as RequestManager from '../utils/RequestManager.js';

const PostService = {
	recentPosts: () => {
		return RequestManager.get('posts/recent', {}, {});
	}
};

export {PostService}
