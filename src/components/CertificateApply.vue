<template>
    <div class="container-xxl py-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <h2 class="text-center text-primary mb-4">সার্টিফিকেটের জন্য আবেদন করুন</h2>
          <form method="post" class="border p-4 bg-light rounded">
            <div class="mb-3">
              <label htmlFor="email" class="form-label text-primary">student name</label>
              <input type="text" class="form-control" id="student_id" name="student_id"
                v-model="formData.student_id" placeholder="Enter your enrolled name"/>
            </div>
            
            <div class="mb-3">
              <label htmlFor="password" class="form-label text-primary">course Name </label>
              <input type="course_id" class="form-control" id="course_id" name="course_id"
               v-model="formData.course_id" placeholder="Enter your enrolled batch name"/>
            </div>
            <button type="button" @click="certificateApply" class="btn btn-primary w-100"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  






<script>
import DataService from "../services/DataService";
import router from '@/router';
// import Certificate from './Certificate.vue'
export default {
  name:'CertificateApply',
   data() {
        return {
          formData: {
            student_id: "",
            course_id: "",
          },
        };
      },
      methods: {
        login() {
          var data = {
            student_id: this.formData.student_id,
            course_id: this.formData.course_id
          };
          DataService.login(data)
          .then(response => {
            console.log(response.data.data.token)
            if(response.data.data.token)
              sessionStorage.setItem('uid', response.data.data.token);
            else
              alert(response.data.error)
              
              router.push({ name: 'certificateApply' });
              window.location.href='/batchEnroll';
          })
          .catch(e => {
            console.log(e);
          });
        }
      },
    };
</script>
  
 