import axios from "axios";

export async function getallbooks() {
  return await axios.get("http://127.0.0.1:8000/library/");
}

export async function getbookdetail(id) {
  return await axios.get(`http://127.0.0.1:8000/library/${id}/`);
}
