
import { navigationContent } from "../../resources/String";
import { Title, LogoImage, AnchorTag } from "./HeaderStyle";
import { image } from "../../resources/Images";

const Header: React.FC = () => {
  return (
    <div>
      <Title>
        <LogoImage src={image.appLogo} />
        <AnchorTag>{navigationContent.profile}</AnchorTag>
        <AnchorTag>{navigationContent.home}</AnchorTag>
        <AnchorTag>{navigationContent.contact}</AnchorTag>
        <AnchorTag>{navigationContent.about}</AnchorTag>
      </Title>
    </div>
  );
};

export default Header;
