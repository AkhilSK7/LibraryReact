import axios from "axios";

export async function getallbooks() {
  return await axios.get("http://127.0.0.1:8000/library/");
}

export async function getbookdetail(id) {
  return await axios.get(`http://127.0.0.1:8000/library/${id}/`);
}

export async function deletebookcall(id) {
  return await axios.delete(`http://127.0.0.1:8000/library/${id}/`);
}

export async function addbook(data) {
  let h = { "Content-Type": "multipart/form-data" };
  return await axios.post("http://127.0.0.1:8000/library/", data, {
    headers: h,
  });
}

export async function editbookcall(id, data) {
  let h = { "Content-Type": "multipart/form-data" };
  return await axios.put(`http://127.0.0.1:8000/library/${id}/`, data, {
    headers: h,
  });
}
