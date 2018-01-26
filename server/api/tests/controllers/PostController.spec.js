const express = require("express");
const HTTP = require("http-status-codes");
let sinon = require("sinon");
let postController = require("../../../api/controllers/PostController");
let postRepo = require("../../../data/repositories/PostRepository");



describe("it should get all posts", function () {

  beforeEach(function () {

  });
  it("should return an array of posts", function (done){

    let postRepoStub = sinon.stub(postRepo.GetAllPosts).returns([]);
    let req = {};
    let res = {};
    postController.getAllPosts(req, res)
  })

});