import TrueFocus from "./reactbits/TrueFocus";

const FocusSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-background overflow-hidden border-y border-border">
      <div className="section-container">
        <TrueFocus 
          sentence="KPI DRIVEN PERFORMANCE ACCOUNTABILITY"
          mainColor="#0EA5E9"
          borderColor="#0EA5E9"
          glowColor="rgba(14, 165, 233, 0.4)"
          pauseBetweenAnimations={1.5}
        />
      </div>
    </section>
  );
};

export default FocusSection;
