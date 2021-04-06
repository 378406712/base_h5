import { get, post } from "./request/api";

function fakeGet() {
  return get("");
}

function fakePost() {
  return post("");
}
export { fakeGet,fakePost };
