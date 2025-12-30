import React, { useState } from "react";
import { addbook } from "../services/Apicalls";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [book, setbook] = useState({
    title: "",
    author: "",
    language: "",
    price: "",
    page: "",
    image: "",
  });

  async function postbook(event) {
    event.preventDefault();
    let res = await addbook(book);
    if (res.status == 201) {
      navigate("/view");
    } else {
      alert("can't enter data");
    }
  }

  return (
    <div>
      <h1 class="text-center fs-3 fw-bold mt-2">ADD BOOK DETAILS</h1>
      <div class="d-flex justify-content-center align-items-center w-100 h-100 mt-5 mb-5 ">
        <form class="w-50  border border-2 p-3 bg-light" onSubmit={postbook}>
          <div class="form-group ">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              onChange={(event) => {
                setbook({ ...book, title: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="author">Author</label>
            <input
              type="text"
              class="form-control"
              id="author"
              placeholder="author"
              onChange={(event) => {
                setbook({ ...book, author: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="language">Language</label>
            <input
              type="text"
              class="form-control"
              id="language"
              placeholder="language"
              onChange={(event) => {
                setbook({ ...book, language: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="text"
              class="form-control"
              id="price"
              placeholder="price"
              onChange={(event) => {
                setbook({ ...book, price: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="pages">Pages</label>
            <input
              type="text"
              class="form-control"
              id="pages"
              placeholder="pages"
              onChange={(event) => {
                setbook({ ...book, page: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="image">image</label>
            <input
              type="file"
              class="form-control"
              id="image"
              placeholder="image"
              onChange={(event) => {
                setbook({ ...book, image: event.target.files[0] });
              }}
            ></input>
          </div>
          <button type="submit" class="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
