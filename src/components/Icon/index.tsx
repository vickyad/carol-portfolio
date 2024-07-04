import { SizeType } from "../../types/types";
import GraphicDesignIcon from "./GraphicDesignIcon";
import IllustrationIcon from "./IllustrationIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import Star from "./Star";
import UIDesignIcon from "./UIDesignIcon";
import UXDesignIcon from "./UXDesignIcon";

interface IconProps {
  type:
    | "graphic-design"
    | "illustration"
    | "ui-design"
    | "ux-design"
    | "instagram"
    | "linkedin"
    | "star"
    | string;
  size?: SizeType;
  color?: string;
}

const Icon = ({ type, size, color }: IconProps) => {
  const getIcon = () => {
    switch (type) {
      case "graphic-design":
        return <GraphicDesignIcon />;
      case "illustration":
        return <IllustrationIcon />;
      case "ui-design":
        return <UIDesignIcon />;
      case "ux-design":
        return <UXDesignIcon />;
      case "linkedin":
        return <LinkedinIcon size={size} color={color} />;
      case "instagram":
        return <InstagramIcon size={size} color={color} />;
      case "star":
        return <Star />;
      default:
        <></>;
    }
  };
  return <>{getIcon()}</>;
};
export default Icon;
