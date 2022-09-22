"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../routing/router");
class Navbar extends HTMLElement {
    static tag = "nav-bar";
    static html = `
    <nav>
      <route-link href="${router_1.RouteEnum.home}">Ranking Brasileiro de Go</route-link>
      <route-link href="${router_1.RouteEnum.gameRecords}">Partidas</route-link>
      <route-link href="${router_1.RouteEnum.players}">Jogadores</route-link>
      <route-link href="${router_1.RouteEnum.gameEvents}">Eventos</route-link>
      <route-link href="${router_1.RouteEnum.about}">Sobre</route-link>
    </nav>
  `;
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = Navbar.html;
    }
}
exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvbmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWlEO0FBRWpELE1BQXFCLE1BQU8sU0FBUSxXQUFXO0lBQzdDLE1BQU0sQ0FBVSxHQUFHLEdBQVcsU0FBUyxDQUFDO0lBRWhDLE1BQU0sQ0FBVSxJQUFJLEdBQW9COzswQkFFeEIsa0JBQVMsQ0FBQyxJQUFJOzBCQUNkLGtCQUFTLENBQUMsV0FBVzswQkFDckIsa0JBQVMsQ0FBQyxPQUFPOzBCQUNqQixrQkFBUyxDQUFDLFVBQVU7MEJBQ3BCLGtCQUFTLENBQUMsS0FBSzs7R0FFdEMsQ0FBQztJQUVGO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7O0FBbkJILHlCQW9CQyJ9