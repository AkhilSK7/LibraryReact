import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getbookdetail } from "../services/Apicalls";

function Detail() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const i = queryParams.get("id");

  const [book, setbook] = useState({});

  async function bookdetail() {
    let res = await getbookdetail(i);
    setbook(res.data);
  }

  useEffect(() => {
    bookdetail();
  }, []);
  return (
    <div>
      <h1 class="text-center">Book Detail</h1>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow-lg">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={book.image}
                    class="img-fluid rounded-start"
                    alt="Book Cover"
                  ></img>
                </div>

                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title fw-bold">{book.title}</h3>
                    <p class="card-text ">
                      <strong>Author:</strong>
                      {book.author}
                    </p>

                    <hr></hr>

                    <p class="card-text">
                      <strong>Language:</strong> {book.language}
                    </p>

                    <p class="card-text">
                      <strong>Pages:</strong> {book.page}
                    </p>

                    <p class="card-text">
                      <strong>Price:</strong> {book.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
