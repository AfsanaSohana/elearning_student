import http from "../http-common";

class DataService {
  login(data) {
    return http.post("/student/login", data);
  }
  BatchEnroll(uid) {
    return http.get(`/batchEnroll?student_id=${uid}`);
  }
  batcheDetail(bid) {
    return http.get(`/course_details/${bid}`);
  }
  quiz(course_id) {
    return http.get(`/quiz?course_id=${course_id}`);
  }
  quizResult(data) {
    return http.post("/quizResult/create", data);
  }
  certificateApply(data) {
    return http.get("/batchEnroll/certificateApply", data);
  }
 
  // ordertrack_save(data) {
  //   return http.post("/ordertrack_save", data);
  // }
  // doctor(dept) {
  //   return http.get(`/doctor/${dept}`);
  // }
  // getAll(uid) {
  //   return http.get(`/booking/${uid}`);
  // }

  // get(id) {
  //   return http.get(`/booking_single/${id}`);
  // }
  // student_details(id) {
  //   return http.get(`/student_details/${id}`);
  // }

  // login(data) {
  //   return http.post("/student_login", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }



  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();