<template>
    <div>
      <!-- Header Section -->
      <div class="gradiant-background p-3">
        <h3>Batch Details</h3>
        <div class="right image">
          <img src="/assets/img/teacher1.png" alt="Image 2" height="200" width="400" />
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="row">
        <!-- Left Column -->
        <div class="col-md-8 p-3">
          <!-- Class Routine -->
          <div class="p-2 content-align-center" style="background-color: #f8f9fa; border-radius: 3px;">
            <h3>ক্লাস রুটিন</h3>
            <table class="table table-bordered p-3">
              <thead>
                <tr>
                  <th>সময়</th>
                  <th>দিন</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table-primary">10:00 AM</td>
                  <td class="table-secondary">Monday</td>
                </tr>
                <tr>
                  <td class="table-primary">11:00 AM</td>
                  <td class="table-secondary">Wednesday</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <!-- Course Syllabus -->
          <div class="p-2 mt-3" style="background-color: #e9ecef; border-radius: 3px;">
            <h3 class="mt-2">কোর্স সিলেবাস</h3>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <a class="text-primary" data-bs-toggle="collapse" href="#collapseSyllabus" role="button" aria-expanded="false" aria-controls="collapseSyllabus">
                      &darr; View Details
                    </a>
                    <div class="collapse" id="collapseSyllabus">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <i class="bi bi-document"></i> Physics Chapter 1
                        </li>
                        <li class="mb-2">
                          <i class="bi bi-document"></i> Chemistry Chapter 3
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <!-- Course Instructor -->
          <div class="mt-3 p-3" style="background-color: #dee2e6; border-radius: 3px;">
            <h3>কোর্স ইন্সট্রাক্টর</h3>
            <div class="table table-bordered p-3">
              <div>
                <h5>John Doe</h5>
                <p class="text-muted" style="font-size: 10px;">Physics Instructor</p>
                <img src="/assets/img/instructor.png" alt="Instructor" />
              </div>
            </div>
          </div>
  
          <!-- Course Details -->
          <div class="mt-3 p-3" style="background-color: #dee2e6; border-radius: 3px;">
            <h3>কোর্স সম্পর্কে বিস্তারিত</h3>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <p>কোর্সটিতে যা যা আছে</p>
                    <a class="text-primary" data-bs-toggle="collapse" href="#collapseDetails" role="button" aria-expanded="false" aria-controls="collapseDetails">
                      &darr; View More
                    </a>
                    <div class="collapse" id="collapseDetails">
                      <ul class="list-unstyled text-muted">
                        <li class="mb-2">- Science students preparing for HSC 2026.</li>
                        <li class="mb-2">- Weekly live classes and tests.</li>
                        <li class="mb-2">- Confidence-building exam hacks.</li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <!-- Sidebar -->
        <div class="col-md-4">
          <div class="card p-3" style="position: sticky; top: 100px;">
            <!-- Video Embed -->
            <div class="embed-responsive embed-responsive-16by9 mb-1">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/exampleVideo"
                allowfullscreen
                title="Course Video"
              ></iframe>
            </div>
            <!-- Course Info -->
            <div class="card-body overflow-x-hidden">
              <p class="card-title">Batch Name (Full Syllabus)</p>
              <p class="card-text">
                কোর্স ফি: <strong>৳1000</strong> <span><s>৳1200</s></span>
              </p>
              <a href="/paymentForm" class="btn btn-primary">কোর্সটি কিনুন</a>
              <ul class="list-unstyled">
                <li class="mb-2"><i class="bi bi-book"></i> 5 Subjects</li>
                <li class="mb-2"><i class="bi bi-box-seam"></i> Weekly live classes</li>
                <li class="mb-2"><i class="bi bi-shield-lock"></i> Daily exams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ClassInfo",
  };
  </script>
  
  <style scoped>
  .gradiant-background {
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    color: white;
  }
  .image {
    text-align: right;
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
  }
  .card-text {
    font-size: 16px;
  }
  </style>
  