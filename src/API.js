import Axios from "axios";

const baseURL = "https://digiskills.kg/";
const http = Axios.create({ baseURL });
const lang = localStorage.getItem("language");

export default {
  getAllLessons: () => http.get(`api/course/courses/?lang=${lang}`),
  getCategory: () => http.get(`api/course/categories/?lang=${lang}`),
  getCategoryLessons: id =>
    http.get(`api/course/courses/?category_id=${id}&lang=${lang}`),
  getTeacherData: id => http.get(`api/course/teachers/${id}/?lang=${lang}`),
  getLessonsOfTeacher: id => http.get(`api/course/courses/?teacher_id=${id}`),
  getAllNews: () => http.get(`api/news/?lang=${lang}`),
  getOneNews: id => http.get(`api/news/${id}?lang=${lang}`),
  getCourse: id => http.get(`api/course/courses/${id}`),
  allTeachers: () =>
    http.get(`https://digiskills.kg/api/course/teachers/?lang=${lang}`),
  getLesson: id => http.get(`api/course/programs/?course_id=${id}`),
  getDataAboutUs: () =>
    http.get(`https://digiskills.kg/api/aboutus/?lang=${lang}`),
  postData: (url, data) => http.post(url, data)
};
