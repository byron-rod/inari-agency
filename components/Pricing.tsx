import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <section className="overflow-hidden" id="pricing">
      <div className="container relative z-2 w-full">
        <div className="relative">
          <PricingList />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
