let assert = require("assert");
let superTest = require("supertest");

describe("app", function () {

  let app;
  beforeEach(function () {
    process.env.NODE_ENV = 'test';
    app = require('./index');
  });

  it("should be callable", function () {
    assert.equal(typeof app, 'function')
  });

  it("should set its port to 3001 when env.PORT not defined", function () {
    assert.equal(app.get("port"), 3001);
  });
});