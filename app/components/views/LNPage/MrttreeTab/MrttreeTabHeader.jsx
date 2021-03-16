import { DescriptionHeader } from "layout";
import { FormattedMessage as T } from "react-intl";

const MrttreeTabHeader = () => (
  <DescriptionHeader
    description={
      <T
        id="ln.description.mrttree"
        m="MRTTREE construction."
      />
    }
  />
);

export default MrttreeTabHeader;
