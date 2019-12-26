import Axios from "axios";

const http = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://digiskills.kg/',
});

export default {
  getAllLessons: () => http.get(`api/course/courses/?lang=${localStorage.getItem("language")}`),
  getTeacherData: id => http.get(`api/course/teachers/${id}/?lang=${localStorage.getItem("language")}`),
  getAllNews: () => http.get(`api/news/?lang=${localStorage.getItem("language")}`),
  getOneNews: (id) => http.get(`api/news/${id}?lang=${localStorage.getItem("language")}`),
  getLesson: id => http.get(`api/course/courses/${id}`),
  allTeachers: () => http.get(`https://digiskills.kg/api/course/teachers/?lang=${localStorage.getItem("language")}`)
};