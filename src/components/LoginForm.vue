<template>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="text-center text-primary mb-4">Student Login Form</h2>
          <form onSubmit={handleSubmit} className="border p-4 bg-light rounded">


            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary">Contact Number</label>
              <input type="text" className="form-control" id="contact_number" name="contact_number"
                defaultValue={inputs.contact_number} onChange={handleChange} placeholder="Enter student's contact number"/>
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-primary">Password </label>
              <input type="password" className="form-control" id="password" name="password"
               defaultValue={inputs.password} onChange={handleChange} placeholder="Enter a password"/>
            </div>
            <button type="submit"href="/batchEnroll" className="btn btn-primary w-100"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginForm",
    data() {
      return {
        formData: {
          contact_number: "",
          password: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        // Replace this with your submission logic
        console.log("Form submitted with data:", this.formData);
        alert("Login Done");
      },
    },
  };
  </script>
  
 <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  </style>