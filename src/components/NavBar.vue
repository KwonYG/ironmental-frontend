<template>
  <!--Navbar-->
  <mdb-navbar class="nav_container" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand to="/home">
      <h1>Iron Mental</h1>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="/home">구독</mdb-nav-item>
        <mdb-nav-item href="/home#intro_section_pos">소개</mdb-nav-item>
        <mdb-nav-item to="/interviews">인터뷰</mdb-nav-item>
      </mdb-navbar-nav>

      <mdb-navbar-nav right>
        <mdb-nav-item href="https://github.com/Devrother/ironmental" anchorClass="white-text" waves-fixed>
          <mdb-icon fab icon="github" size="lg" />
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbIcon
} from "mdbvue";
export default {
  name: "NavbarPage",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbIcon
  }
};
</script>
<style scoped>
.nav_container h1 {
  font-size: 24px;
}
.nav_container {
  background-color: #0059d3;
}
</style>
