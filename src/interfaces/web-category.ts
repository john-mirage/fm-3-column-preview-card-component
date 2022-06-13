import Category from "@interfaces/category";

export default interface WebCategoryInterface extends HTMLDivElement {
  _category: Category | false;
  initialCall: Boolean;
  category: Category;
  fragment: DocumentFragment;
  useElement: SVGUseElement;
  titleElement: HTMLHeadingElement;
  descriptionElement: HTMLParagraphElement;
}