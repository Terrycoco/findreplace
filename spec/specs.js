
describe('findReplace', function(sentence,find,replace) {
  this.timeout(30000);
  sentence = "The cat jumped over the moon.";
  
  it('returns null if any argument is invalid', function() {
    expect(findReplace(sentence,null,null)).to.equal(null);
  });

  it('returns 0 if no instances found', function() {
    expect(findReplace(sentence, "cow", "cat")[0]).to.equal(0);
  });

  it('returns 1 if 1 instance found', function() {
    expect(findReplace(sentence, "cat", "cow")[0]).to.equal(1);
  });

  it('replaces all instances found', function() {
    expect(findReplace(sentence, "o","i")[0]).to.equal(3);
    expect(findReplace(sentence, "o","i")[1]).to.equal("The cat jumped iver the miin.");
  });

});
