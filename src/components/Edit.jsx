import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editbookcall, getbookdetail } from "../services/Apicalls";

function Edit() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const i = query.get("id");

  const [book, setbook] = useState({
    title: "",
    author: "",
    language: "",
    price: "",
    page: "",
    image: "",
  });
  const navigate = useNavigate();
  async function bookdetail() {
    console.log(i);
    let res = await getbookdetail(i);
    setbook(res.data);
  }
  async function editbook(event) {
    event.preventDefault();
    let ubook = { ...book };
    if (typeof ubook.image == "string") {
      delete ubook.image;
    }
    let res = await editbookcall(i, ubook);
    if (res.status == "200") {
      navigate("/view");
    } else {
      alert("Can't edit book");
    }
  }
  useEffect(() => {
    bookdetail();
  }, []);

  return (
    <div>
      <h1 class="text-center">Edit</h1>
      <div class="d-flex justify-content-center align-items-center w-100 h-100 mt-5 mb-5 ">
        <form class="w-50  border border-2 p-3 bg-light" onSubmit={editbook}>
          <div class="form-group ">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              value={book.title}
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
              value={book.author}
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
              value={book.language}
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
              value={book.price}
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
              value={book.page}
              onChange={(event) => {
                setbook({ ...book, page: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="image" class="mb-2">
              image
            </label>
            <br></br>
            <img
              src={book.image}
              height="100px"
              width="100px"
              class="mt-2 mb-2 "
            ></img>
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

export default Edit;
