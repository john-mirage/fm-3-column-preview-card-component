import "./main.css";
import WebCategory from "@components/web-category";
import Category from "@interfaces/category";
import WebCategoryInterface from "@interfaces/web-category";

const categories: Category[] = [
  {
    shape: "#icon-sedans",
    title: "sedans",
    description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    class: {
      bg: "bg-bright-orange",
      text: "text-bright-orange",
    },
  },
  {
    shape: "#icon-suvs",
    title: "suvs",
    description: "Take and SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",
    class: {
      bg: "bg-dark-cyan",
      text: "text-dark-cyan",
    },
  },
  {
    shape: "#icon-luxury",
    title: "luxury",
    description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    class: {
      bg: "bg-very-dark-cyan",
      text: "text-very-dark-cyan",
    },
  },
];

customElements.define("web-category", WebCategory, { extends: "div" });

const main = <HTMLElement>document.getElementById("main");

categories.forEach((category) => {
  const webCategory = <WebCategoryInterface>document.createElement("div", { is: "web-category" });
  webCategory.category = category;
  main.append(webCategory);
});
