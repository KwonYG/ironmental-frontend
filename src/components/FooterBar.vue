<template>
  <!-- Footer -->
  <mdb-footer class="font-small pt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Iron Mental</h5>
          <p>본 서비스는 다양한 면접 관련 오픈소스 프로젝트를 기반으로 콘텐츠를 제작합니다.</p>
          <p>개인적인 사정으로 인해 서비스가 중단될수도 있음을 알려드립니다.</p>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title">Devrother</h5>
          <ul>
            <li class="list-unstyled">
              <a href="#!">버그 신고</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">이메일</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">공헌하기</a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright:
        <a href="https://github.com/Devrother">Devrother</a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
.page-footer {
  background-color: #0059d3;
  margin-top: 0 !important;
}
</style>
