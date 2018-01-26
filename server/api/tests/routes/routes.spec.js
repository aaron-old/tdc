const express = require("express");
let app = express();
let supertest = require("supertest");
let sinon = require("sinon");
let proxyRequire = require("proxyquire");

describe("routes functioning correctly", function () {

  describe("no endpoint given", function () {
    let request, route;
    beforeEach(function () {
      route = proxyRequire("../../routes/routes", {'': sinon.stub});
      route(app);
      request = supertest(app);
    });

    it("should return 404 when no endpoint is given", function (done) {
      request
          .get("/api/")
          .expect(404)
          .end(done);
    });
  });
});