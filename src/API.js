import Axios from "axios";

const http = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://digiskills.kg/',
});

export default {
  getAllLessons: (data) => http.get(data),
  getTeacherData: (data) => http.get(data),
  getAllNews: (lang) => http.get(`api/news/?lang=${lang}`),
  getOneNews: (id,lang) => http.get(`api/news/${id}?lang=${lang}`)
};