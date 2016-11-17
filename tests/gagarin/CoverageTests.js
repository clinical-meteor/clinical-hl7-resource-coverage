describe('clinical:hl7-resources-coverages', function () {
  var server = meteor();
  var client = browser(server);

  it('Coverages should exist on the client', function () {
    return client.execute(function () {
      expect(Coverages).to.exist;
    });
  });

  it('Coverages should exist on the server', function () {
    return server.execute(function () {
      expect(Coverages).to.exist;
    });
  });

});
