import Axios from "axios";

const http = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://64.225.36.157/',
});

export default {
  getAllLessons: (data) => http.get(data),
  getTeacherData: (data) => http.get(data),
  getAllNews: (lang) => http.get(`api/news/?lang=${lang}`),
  getOneNews: (id,lang) => http.get(`api/news/${id}?lang=${lang}`)
};