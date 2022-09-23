"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnknownView extends HTMLElement {
    static tag = "unknown-view";
    connectedCallback() {
        this.innerHTML = `
      <h2>Infelizmente, esta página aparentemente não existe.</h2>
    `;
    }
}
exports.default = UnknownView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL3Vua25vd24tdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLFdBQVksU0FBUSxXQUFXO0lBQ2xELE1BQU0sQ0FBVSxHQUFHLEdBQVcsY0FBYyxDQUFDO0lBRTdDLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQVk7O0tBRXpCLENBQUM7SUFDSixDQUFDOztBQVBILDhCQVFDIn0=