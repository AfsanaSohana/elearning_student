<template>
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <a href="http://127.0.0.1:3000" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h2 className="m-0 text-primary">
      <i className="fa fa-book me-3"></i>eLEARNING
    </h2>
  </a>

  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      
      <!-- Dropdown: ক্লাস ৬-১২ -->
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle position-relative has-icon-left" data-bs-toggle="dropdown">
          <i className="fa-duotone fa-solid fa-backpack"></i>ক্লাস ৬-১২</a>
            <div className="dropdown-menu fade-down m-0">
            <a href="#" className="dropdown-item">Class one</a>
            <a href="#" className="dropdown-item">Class two</a>
            <a href="#" className="dropdown-item">Class three</a>
            <a href="#" className="dropdown-item">Class four</a>
            <a href="#" className="dropdown-item">Class five</a>
            <a href="#" className="dropdown-item">Class six</a>
            </div>
      </div>

      <!-- Dropdown: স্কিলস -->
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">স্কিলস</a>
            <div className="dropdown-menu fade-down m-0">
            <a href="#" className="dropdown-item">All course</a>
            <a href="#" className="dropdown-item">Language Learning</a>
            <a href="#" className="dropdown-item">Freelancing</a>
            <a href="#" className="dropdown-item">Skills & IT</a>
            <a href="#" className="dropdown-item">Kids (Age 7-14)</a>
            <a href="#" className="dropdown-item">Professional</a>
            </div>
      </div>

      <!-- Dropdown: অনলাইন ব্যাচ -->
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">অনলাইন ব্যাচ</a>
        <div className="dropdown-menu fade-down m-0">
          <a href="#" className="dropdown-item">Online batch (6-10)</a>
          <a href="#" className="dropdown-item">SSC</a>
          <a href="#" className="dropdown-item">HSC</a>
        </div>
      </div>

      <!-- Dropdown: সার্টিফিকেট -->
      <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">সার্টিফিকেট</a>
                <div className="dropdown-menu fade-down m-0">
                    <a href="/CertificateApply" className="dropdown-item">আবেদন করুন</a>
                </div>
      </div>

      <!-- Link: ভর্তি পরীক্ষা -->
      <a href="#" className="nav-item nav-link">ভর্তি পরীক্ষা</a>
    </div>

    <!-- Button: Join Now -->
    <button v-if="uid" className='btn-primary' @click="logout">  Logout</button> 
    <router-link v-if="uid" :to="'/batchEnroll/'" class="nav-item nav-link">Go to class </router-link>
    <a v-if="!uid" href="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"> <i className="fa fa-arrow-right ms-3"></i>Join Now</a>
  </div>
</nav>


</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.uid="";
      sessionStorage.setItem('uid', '');
      window.location.reload();
    }
  }
}
</script>
