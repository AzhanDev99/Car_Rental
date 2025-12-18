import React, { forwardRef } from "react";
import type { ElementType } from "react";

type TypographyProps = {
  variant?:
    | "Navbar-Attributes"
    | "Hero-heading"
    | "Hero-paragraph"
    | "Hero_bottom_heading"
    | "Hero_bottom_paragraph"
    | "section-3-card-heading"
    | "section-3-card-paragraph"
    | "Hero_section3-heading"
    | "Hero_section3-paragraph"
    | "Hero_section4-mainheading"
    | "cardetail_card_noramltext"
    | "cardetail_card_smalltext"
    | "text13"
    | "text14"
    | "text15"
    | "text16"
    | "text17"
    | "text18"
    | "text19";
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "hero-title", as, className = "", children, ...props }, ref) => {
    let styles = "";

    switch (variant) {
      case "Navbar-Attributes":
        styles =
          "text-[18px] px-5 py-2 font-antonio transition-all rounded-[10px] bg-gradient-to-r from-indigo-900 to-purple-900 text-white font-bold hover:border-1 border-white scale-95 hover:scale-100 cursor-pointer";
        break;
      case "Hero-heading":
        styles = "text-[50px] font-bold font-work text-white leading-tight";
        break;
      case "Hero-paragraph":
        styles = "text-[16px] font-work text-white leading-tight";
        break;
      case "Hero_bottom_heading":
        styles = "text-[24px] font-semibold font-Inter";
        break;
      case "Hero_bottom_paragraph":
        styles = "text-[16px] font-Inter w-[75%] text-black  text-center";
        break;
      case "Hero_section3-heading":
        styles = "text-[20px] font-semibold font-work text-black";
        break;
      case "Hero_section3-paragraph":
        styles = "text-[16px] font-Inter text-black/60";
        break;
      case "Hero_section4-mainheading":
        styles = "text-2xl sm:text-[50px] font-work font-semibold sm:font-bold text-black uppercase sm:capitalize";
        break;
      case "cardetail_card_noramltext":
        styles = "text-[24px] font-work text-black font-semibold";
        break;
      case "cardetail_card_smalltext":
        styles = "text-[16px] font-work text-black/60 whitespace-nowrap";
        break;
      case "text13":
        styles = "text-[12px] text-white";
        break;
      case "text14":
        styles = "text-xl font-work font-semibold";
        break;
      case "text15":
        styles = "text-sm font-work font-semibold text-black/50";
        break;
      case "text16":
        styles = "text-[16px] font-work text-black font-medium";
        break;
      case "text17":
        styles = "text-4xl font-work text-(--bluemagenta) font-semibold";
        break;
      case "text18":
        styles = "text-[16px] font-Inter font-semibold";
        break;
      case "text19":
        styles = "text-3xl sm:text-6xl font-Work text-(--bluemagenta) font-bold";
        break;
    }

    const Tag: ElementType = as || "p";

    return (
      <Tag ref={ref} className={`${styles} ${className}`.trim()} {...props}>
        {children}
      </Tag>
    );
  }
);

export default Typography;
