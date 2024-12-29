import DummyText from './components/Pricing/DummyText';
import PricingComponent from './components/Pricing/Pricing';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <DummyText />
      </div>
      <PricingComponent />
      <div className="container mx-auto">
        <DummyText />
      </div>
    </div>
  );
}
