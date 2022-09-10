export default class RouteLink extends HTMLElement {
  static readonly tag: string = "route-link";

  constructor(public href: string = "") {
    super();
  }

  connectedCallback() {
    if (this.href === "")
      this.href = this.getAttribute("href") ? this.getAttribute("href")! : "";

    this.setAttribute("href", this.href);
  }
}
