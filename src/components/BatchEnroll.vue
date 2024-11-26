<template>
    <div>
      <!-- Header Section -->
      <div class="container-fluid custom-div justify-content-align-items-center">
        <div class="content-justify-center align-items-center">
          <span>
            <h1 class="text-white mt-3">অনলাইন ব্যাচ</h1>
          </span>
        </div>
        <p class="text-white">
          লেখাপড়ায় এক ভিন্ন মাত্রা যোগ করতে থাকছে রেকর্ডেড/লাইভ প্রোগ্রামসহ আরো অনেক কিছু
        </p>
      </div>
  
      <!-- List Part -->
      <div class="container mt-5">
        <h3><strong>অনলাইন ব্যাচ</strong></h3>
        <p class="text-muted">
          দেশের যেকোনো প্রান্ত থেকে ঘরে বসেই দেশ সেরা শিক্ষকদের সাথে নাও সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!
        </p>
  
        <!-- First Row -->
        <div class="row">
          <!-- Static Card 1 -->
          <div v-for="p in allbatch" :key="p.id" class="col-md-6 d-flex justify-content-center">
            <div class="box borderRedius-3">
              <div class="box-content">
                <h5>{{p.batch?.batch_name}}</h5>
                <p><i class="bi bi-star-fill icon"></i> 10 বিষয়</p>
                <p>প্রতি সপ্তাহে 5 লাইভ ক্লাস</p>
                <router-link :to="'/courseInterface/'+p.batch_id" class="btn btn-outline-success">ক্লাসে প্রবেশ করুন</router-link>
                
              </div>
              <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="HSC Batch Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import DataService from "../services/DataService";
    
    export default {
      name: 'BatchEnroll',
      data() {
        return {
          allbatch:[]
        };
      },
      methods: {
        batches() {
          let uid=sessionStorage.getItem('uid');
          DataService.BatchEnroll(uid)
            .then(response => {
              if(response.data.data)
                this.allbatch= response.data.data;
              else
                alert(response.data.error)
            })
            .catch(e => {
              console.log(e);
          });
        }
      }, mounted() {
        this.batches();
      }
    }
</script>
  