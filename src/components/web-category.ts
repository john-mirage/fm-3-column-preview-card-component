import Category from "@interfaces/category";

class WebCategory extends HTMLDivElement {
  _category: Category | false;
  initialCall: boolean;
  fragment: DocumentFragment;
  useElement: SVGUseElement;
  titleElement: HTMLHeadingElement;
  descriptionElement: HTMLParagraphElement;
  buttonElement: HTMLButtonElement;

  constructor() {
    super();
    this._category = false;
    this.initialCall = true;
    const template = <HTMLTemplateElement>document.getElementById("template-category");
    this.fragment = <DocumentFragment>template.content.cloneNode(true);
    this.useElement = <SVGUseElement>this.fragment.querySelector('[data-name="shape"]');
    this.titleElement = <HTMLHeadingElement>this.fragment.querySelector('[data-name="title"]');
    this.descriptionElement = <HTMLParagraphElement>this.fragment.querySelector('[data-name="description"]');
    this.buttonElement = <HTMLButtonElement>this.fragment.querySelector('[data-name="button"]');
  }

  get category() {
    if (this._category) {
      return this._category;
    } else {
      throw new Error("The category is not defined");
    }
  }

  set category(category: Category) {
    this._category = category;
  }

  connectedCallback() {
    if (this.initialCall) {
      this.classList.add("p-32", "sm:p-48", "md:p-32", "md:flex-1", "lg:p-48", this.category.class.bg);
      this.useElement.setAttribute("href", this.category.shape);
      this.titleElement.textContent = this.category.title;
      this.descriptionElement.textContent = this.category.description;
      this.buttonElement.classList.add(this.category.class.text);
      this.append(this.fragment);
    }
  }
}

export default WebCategory;