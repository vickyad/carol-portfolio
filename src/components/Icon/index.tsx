import { SizeType } from "../../types/types";
import DribbleIcon from "./DribbleIcon";
import GraphicDesignIcon from "./GraphicDesignIcon";
import IllustrationIcon from "./IllustrationIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import LogoIcon from "./LogoIcon";
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
    | "dribble"
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
      case "dribble":
        return <DribbleIcon size={size} color={color} />;
      case "star":
        return <Star />;
      case "logo":
        return <LogoIcon size={size} />;
      default:
        <></>;
    }
  };
  return <>{getIcon()}</>;
};
export default Icon;
