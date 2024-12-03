<template>
  <div class="container-fluid vh-100 d-flex p-0">
    <!-- Sidebar -->
    <nav class="sidebar bg-dark text-white p-3">
      <h2 class="text-center">Student</h2>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <button class="btn btn-link nav-link text-white w-100 text-start" @click="showApplyCertificate">Apply for Certificate</button>
        </li>
        <li class="nav-item mb-2">
          <button class="btn btn-link nav-link text-white w-100 text-start" @click="showCertificationDetails">Certification Details</button>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow-1 bg-light p-4">
      <!-- Enrolled Batches Section -->
      <div v-if="showCertificateSection" id="applyCertificate">
        <h3>Enrolled Batches</h3>
        <!-- Table of Enrolled Batches -->
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">student Name</th>
              <th scope="col">Batch Name</th>
              <th scope="col">Course Name</th>
              <th scope="col">Enroll Date</th>
              <th scope="col">Transaction Id</th>
              <th scope="col">Action</th> <!-- New column for Apply button -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="batch in enrolledBatches" :key="batch.id">
              <td>{{ batch.Student_id }}</td>
              <td>{{ batch.batch_id }}</td>
              <td>{{ batch.course_id }}</td>
              <td>{{ batch.enroll_date }}</td>
              <td>{{ batch.transaction_id }}</td>
              <td>
                <button class="btn btn-primary btn-sm" @click="applyForCertificate(batch)">Apply for Certificate</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Certification Details Section -->
      <div v-if="showDetailsSection" id="certificateDetails">
        <h3>Certification Details</h3>
        <p>Here you can find details about your certificates.</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CertificateApply',
  data() {
    return {
      showCertificateSection: false,
      showDetailsSection: false,
      batchEnroll: [], // Will hold the batches from the backend
    };
  },

  methods: {
    // Fetch batches from the backend API
    fetchBatches() {
      axios.get('http://localhost:3000/api/batches')  // Adjust the URL based on your backend
        .then(response => {
          this.enrolledBatches = response.data; // Store batches in the data object
        })
        .catch(error => {
          console.error('Error fetching batches:', error);
        });
    },

    // Show Apply Certificate section and fetch batches
    showApplyCertificate() {
      this.fetchBatches();  // Fetch the batches when the "Apply for Certificate" section is shown
      this.showCertificateSection = true;
      this.showDetailsSection = false;
    },

    // Show Certification Details section
    showCertificationDetails() {
      this.showDetailsSection = true;
      this.showCertificateSection = false;
    },

    // Handle Apply for Certificate action
    applyForCertificate(batch) {
      alert(`You have applied for a certificate in the batch ${batch.batch_id}, course: ${batch.course_id}`);
    }
  }
};
</script>

<style scoped>
.container-fluid {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a,
.sidebar ul li button {
  text-decoration: none;
  color: white;
  display: block;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sidebar ul li button:hover {
  background-color: #aefafc75;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #ecf0f1;
}

table th, table td {
  text-align: center;
}

button {
  cursor: pointer;
}
</style>
