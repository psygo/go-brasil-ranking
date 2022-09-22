"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteLink extends HTMLElement {
    href;
    static tag = "route-link";
    constructor(href = "") {
        super();
        this.href = href;
    }
    connectedCallback() {
        if (this.href === "")
            this.href = this.getAttribute("href") ? this.getAttribute("href") : "";
        this.setAttribute("href", this.href);
    }
}
exports.default = RouteLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtbGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3JvdXRlLWxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFxQixTQUFVLFNBQVEsV0FBVztJQUc3QjtJQUZuQixNQUFNLENBQVUsR0FBRyxHQUFXLFlBQVksQ0FBQztJQUUzQyxZQUFtQixPQUFlLEVBQUU7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFEUyxTQUFJLEdBQUosSUFBSSxDQUFhO0lBRXBDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUUxRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7QUFaSCw0QkFhQyJ9