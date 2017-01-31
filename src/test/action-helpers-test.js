import { parseArticleResponse } from '../actions/action-helpers';
import assert from 'assert';

describe('parseArticleResponse', function() {
  const response = {};
  it('return 0', function() {
    assert.equal(0, parseArticleResponse(response));
  });
});
