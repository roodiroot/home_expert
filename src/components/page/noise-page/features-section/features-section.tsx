import { NoiseItemNode } from "@/data/type-noise-api";
import { FeaturesNoisePageBlock } from "./testimonials-kuiper-belt";

interface FeaturesSectionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  noiseContent?: NoiseItemNode[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ noiseContent }) => {
  return (
    <FeaturesNoisePageBlock
      noiseContent={noiseContent}
      title="С какими типами шума мы справляемся"
    />
  );
};

export default FeaturesSection;
