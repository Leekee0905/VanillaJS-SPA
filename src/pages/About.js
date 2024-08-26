import Page from "./Page.js";

class About extends Page {
  constructor() {
    super();
    this.htmlString = `
        <div class="page-container align-center">
            <h1>About</h1>
            <h2>구현 사항</h2>
            
            <ul>
                <li>Hashed Routing 적용</li>
                <li>Class를 통한 Components 구현</li>
                <li>이벤트리스너의 추가와 제거</li>
            </ul>
        </div>
        `;
  }
}
export default About;
