import assert from 'assert';

import { parseArticleResponse } from '../actions/action-helpers';
import {  articleNoAssociated,
          articleWithCategories,
          articleWithComments,
          articleWithCommentsAndCategories
       } from './fixtures.js'

describe('parseArticleResponse', function() {
  it('with an article with no associated', function() {
    const articleModel = {
      id: 1,
      title: 'Hey there',
      text: "how are you?",
      categories: [],
      comments: []
    }
    assert.deepEqual(articleModel, parseArticleResponse(articleNoAssociated));
  });

  it('with an article with categories', function() {
    const articleModel = {
      id: 1,
      title: 'Hey there',
      text: "how are you?",
      categories: ["js", "dumplings"],
      comments: []
    }
    assert.deepEqual(articleModel, parseArticleResponse(articleWithCategories));
  });

  it('with an article with comments', function() {
    const articleModel = {
      id: 1,
      title: 'Hey there',
      text: "how are you?",
      categories: [],
      comments: [
        {
          commenter: "jose",
          body: "small comment"
        },
        {
          commenter: "juan",
          body: "big comment"
        }
      ]
    }
    assert.deepEqual(articleModel, parseArticleResponse(articleWithComments));
  });

  it('with an article with comments and categories', function() {
    const articleModel = {
      id: 1,
      title: 'Hey there',
      text: "how are you?",
      categories: ["js", "dumplings"],
      comments: [
        {
          commenter: "jose",
          body: "small comment"
        },
        {
          commenter: "juan",
          body: "big comment"
        }
      ]
    }
    assert.deepEqual(articleModel, parseArticleResponse(articleWithCommentsAndCategories));
  });
});
