<template>
    <div class="course-dashboard">
      <div class="overlay"></div>
      <div class="container">
        <!-- Header -->
        <div class="row mb-4">
          <div class="col-12">
            <h1 class="display-4 text-white">{{ batch_data.course?.name }}</h1>
            <h4 class="lead text-white">
              আমাদের ক্লাসে স্বাগতম
              <span>
                <p class="mt-2">
                  <small>এখানে শিক্ষার্থী তার কোর্স সম্পর্কিত সকল কার্যক্রম দেখতে পারবে</small>
                </p>
              </span>
            </h4>
          </div>
        </div>
  
        <!-- Main content area -->
        <div class="wrapper">
          <div class="row">
            <!-- Announcements -->
            <div class="card mb-3">
              <div class="card-header">
                <h5>Announcement</h5>
              </div>
              <div class="card-body text-dark">
                <p><strong>New Lecture Added:</strong> {{ batch_data.l_sheet_name }}</p>
                <p><strong>Exam Date:</strong> The {{ batch_data.exam?.exam_name }} exam will be held on {{ batch_data.exam?.date }}.</p>
              </div>
            </div>
  
            <div class="row">
              <!-- Course Modules -->
              <div class="col-lg-6 mb-2">
                <div class="row p-2">
                  <div class="card">
                    <div class="card-header">
                      <h5>Course Modules</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group">
                        <li class="list-group-item" v-for="(module, index) in batch_data?.batch?.module" :key="index" @click="playVideo(module.video_id)">
                          {{ module.module_name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <!-- Upcoming Tasks & Deadlines -->
                <div class="row mt-2 p-2">
                  <div class="card">
                    <div class="card-header">
                      <h5>Upcoming Tasks & Deadlines</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Assignment 1 - Due: {{ batch_data.assignment?.assignment_name }}
                          <form class="d-inline">
                            <input type="file" class="form-control d-inline w-50" id="assignment1" name="assignment1" />
                            <button type="submit" class="btn btn-primary btn-sm me-1">
                              Submit
                            </button>
                          </form>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Quiz 1 - Due: Nov 2
                          <a :href='"/quizTest/"+batch_data.course?.id' class="btn btn-success btn-sm">
                            Take Quiz
                          </a>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Final Project Submission - Due: Dec 15
                          <form class="d-inline">
                            <input type="file" class="form-control d-inline w-50" id="finalproject" name="finalproject" />
                            <button type="submit" class="btn btn-primary btn-sm">
                              Submit
                            </button>
                          </form>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Video Section -->
              <div class="col-lg-6 mb-2">
                <div class="card mt-2 h-100">
                  <div class="card-header">
                    <h5>Course Video</h5>
                  </div>
                  <div class="card-body">
                    <p>Watch the video below to learn more:</p>
                    <!-- YouTube Video Embed -->
                    <div v-if="currentVideoId">
                      <iframe
                        :src="'https://www.youtube.com/embed/' + currentVideoId"
                        width="100%"
                        height="315"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <p v-else>Select a module to watch the video</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Discussion Forum -->
            <div class="row">
              <div class="card">
                <div class="card-header">
                  <h5>Discussion Forum </h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="mb-3">
                      <label for="discussion" class="form-label">Post a Question</label>
                      <textarea class="form-control" id="discussion" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import DataService from "../services/DataService";

  export default {
    name: "CourseInterface",
    data() {
      return {
        batch_data:[],
        courseName: "Physics for Beginners",
        lectureName: "Introduction to Physics",
        examName: "Midterm",
        examDate: "2024-11-30",
        assignmentName: "Solve 10 Physics Problems",
        // List of modules and their corresponding YouTube video IDs
        modules: [
          { name: "Module 1: Basics of Physics", videoId: "https://youtu.be/T8gh8aq3dr0" }, //  YouTube video ID
          { name: "Module 2: Advanced Mechanics", videoId: "https://youtu.be/3VcmZ3anN1I?list=PLNMnAEqLBwmqKGMJOtVcvGE-QrAte_95q" },
          { name: "Module 3: Thermodynamics", videoId: "https://youtu.be/qhXFb15zoE0" },
        ],
        currentVideoId: null
      };
    },
    methods: {
      playVideo(videoId) {
        this.currentVideoId = videoId;
      },
      batcheDetails() {
          let batch_id=this.$route.params.batch_id;
          DataService.batcheDetail(batch_id)
            .then(response => {
              console.log(response.data.data)
              if(response.data.data)
                this.batch_data= response.data.data;
              else
                alert(response.data.error)
              
            })
            .catch(e => {
              console.log(e);
          });
        }
    },
    mounted() {
      this.batcheDetails();
    }
  };
  </script>
  
  <style scoped>
  .course-dashboard {
    background-color: #1a1a2e;
    color: #fff;
    padding: 20px;
  }
  .wrapper {
    padding: 20px;
    background: #f4f4f4;
    border-radius: 8px;
  }
  .text-white {
    color: #fff;
  }
  </style>
  