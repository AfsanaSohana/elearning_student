<template>
    <div class="container card col-md-4 p-3 ps-4 pe-3 mt-4" style="background-color: #cce6ff; border-radius: 3px;">
      <strong>
        <h5 class="text-center text-primary">পেমেন্ট করুন</h5>
      </strong>
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-12">
            <!-- Transaction Number -->
            <label for="trans_number" class="form-label text-primary">ট্রানজেকশন নাম্বার</label>
            <div class="row card border-primary">
              <input
                type="text"
                class="form-control"
                id="trans_number"
                v-model="formData.trans_number"
                placeholder="02135678434"
              />
            </div>
  
            <!-- Transaction ID -->
            <label for="trans_id" class="form-label mt-2 text-primary">ট্রানজেকশন আইডি</label>
            <div class="row card border-primary">
              <div class="col-12 p-0">
                <input
                  type="text"
                  class="form-control"
                  id="trans_id"
                  v-model="formData.trans_id"
                  placeholder="032656"
                />
              </div>
            </div>
  
            <!-- Payment Method -->
            <label for="payment_method" class="form-label mt-2 text-primary">পেমেন্ট মেথড</label>
            <div class="row card border-primary">
              <select
                id="payment_method"
                class="form-control"
                v-model="formData.payment_method"
              >
                <option value="">পেমেন্ট মেথড পছন্দ করুন</option>
                <option value="বিকাশ">বিকাশ</option>
                <option value="নগদ">নগদ</option>
                <option value="রকেট">রকেট</option>
                <option value="ডাচ-বাংলা">ডাচ-বাংলা</option>
              </select>
            </div>
          </div>
  
          <!-- Submit Button -->
          <div class="col-10 mt-3">
            <button type="submit" class="btn btn-primary col-12">প্রবেশ করুন</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaymentForm",
    data() {
      return {
        formData: {
          trans_number: "",
          trans_id: "",
          payment_method: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        // Replace this with your submission logic
        console.log("Form submitted with data:", this.formData);
        alert("পেমেন্ট সফল হয়েছে!");
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
  