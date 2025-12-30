import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletebookcall, getallbooks } from "../services/Apicalls";

function View() {
  const [books, setbooks] = useState([]);
  const navigate = useNavigate();
  async function fetchbooks() {
    let res = await getallbooks();
    // console.log(res.data);
    setbooks(res.data);
  }

  function bookdetail(i) {
    console.log(i);
    navigate(`/detail?id=${i}`);
  }

  async function deletebook(id) {
    let res = await deletebookcall(id);
    navigate("/view");
  }

  useEffect(() => {
    fetchbooks();
  }, []);
  return (
    <div>
      <h1 class="text-center fs-3 fw-bold mt-2 ">BOOK LIST</h1>
      <div class="d-flex justify-content-center align-items-center w-100 h-100 mt-5 mb-5 ">
        <div class="container">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Cover</th>
                <th scope="col">Author</th>
                <th scope="col">Pages</th>
                <th scope="col">Price</th>
                <th scope="col">Language</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((i) => (
                <tr>
                  <td>{i.title}</td>
                  <td>
                    <img
                      src={i.image}
                      style={{ height: "250px", width: "200px" }}
                    ></img>
                  </td>
                  <td>{i.author}</td>

                  <td>{i.page}</td>
                  <td>{i.price}</td>
                  <td>{i.language}</td>
                  <td class="ps-5 pt-5">
                    <a
                      class="btn btn-primary me-2"
                      onClick={() => bookdetail(i.id)}
                    >
                      Details
                    </a>
                    <a class="btn btn-primary me-2">Edit</a>
                    <a
                      class="btn btn-danger me-2"
                      onClick={() => deletebook(i.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default View;
