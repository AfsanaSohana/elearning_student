<template>
    <div class="certificate-container">
      <!-- Certificate Header -->
      <div class="certificate-header">
        <h1>Certificate of Completion</h1>
        <p>This certifies that</p>
      </div>
  
      <!-- Certificate Body -->
      <div class="certificate-body">
        <div class="recipient-name">Jannatul Hurmat</div>
        <p>has successfully completed the</p>
        <h2>Web Development</h2>
        <p>on 02/06/2024</p>
      </div>
  
      <!-- Certificate Footer -->
      <div class="certificate-footer">
        <div class="signature">
          <div>
            <p class="signature-name">[Sohana Afsana]</p>
            <p>Instructor</p>
          </div>
          <div>
            <p class="signature-name">[Sohana Afsana]</p>
            <p>Director</p>
          </div>
        </div>
        <p class="issuer">Issued by eLearning</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Certificate",
  };
  </script>
  
  <style scoped>
  .certificate-container {
    width: 800px;
    margin: 20px auto;
    padding: 30px;
    border: 10px solid #333;
    background: #f9f9f9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    font-family: "Georgia", serif;
    text-align: center;
    position: relative;
    overflow: hidden; /* Ensures background doesn't spill out */
  }
  
  .certificate-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/public/assets/img/pngtree-book-icon-vector-image-png-image_6552370.png'); /* Your logo URL */
    background-repeat: no-repeat;
    background-position: center;
    background-size: 500px 500px;
    opacity: 0.1; /* Reduced opacity for the watermark */
    z-index: 0;
    pointer-events: none; /* Ensures it doesn't block text interactions */
  }
  
  .certificate-header, .certificate-body, .certificate-footer {
    position: relative;
    z-index: 1; /* Ensures text appears above the watermark */
  }
  
  .certificate-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #4b6587;
    text-transform: uppercase;
  }
  
  .certificate-header p {
    font-size: 1.2rem;
    color: #6c757d;
  }
  
  .certificate-body {
    margin: 30px 0;
  }
  
  .recipient-name {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #222f3e;
    text-decoration: underline;
  }
  
  .certificate-body h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #34495e;
  }
  
  .certificate-body p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }
  
  .certificate-footer {
    margin-top: 20px;
  }
  
  .signature {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  
  .signature div {
    text-align: center;
  }
  
  .signature-name {
    font-family: "Cursive", serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .issuer {
    font-size: 1rem;
    margin-top: 10px;
    color: #34495e;
  }
  </style>
  