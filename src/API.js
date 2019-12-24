import Axios from "axios";

const http = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://digiskills.kg/',
});

export default {
  getAllLessons: (data) => http.get(data),
  getTeacherData: id => http.get(`api/course/teachers/${id}/?lang=${localStorage.getItem("language")}`),
  getAllNews: (lang) => http.get(`api/news/?lang=${lang}`),
  getOneNews: (id,lang) => http.get(`api/news/${id}?lang=${lang}`),
  getLesson: id => http.get(`api/course/programs/?course_id=${id}`),
};