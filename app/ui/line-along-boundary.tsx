const LineAlongBoundary = () => {
  const properties = {
    size: 200,
    duration: 15,
    anchor: 90,
    borderWidth: 1.5,
    colorFrom: "#ffaa40",
    colorTo: "#9c40ff",
  };
  return (
    <div
      className={`absolute inset-[0] rounded-[inherit] 
      [border:calc(${properties.borderWidth}*2px)_solid_transparent] 
      ![mask-clip:padding-box,border-box] ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
      after:absolute after:aspect-square after:w-[calc(${properties.size}*1px)] 
      after:animate-border-beam
      after:[background:linear-gradient(to_left,${properties.colorFrom},${properties.colorTo},transparent)] 
      after:[offset-anchor:calc(${properties.anchor}*1%)_50%] 
      after:[offset-path:rect(0_auto_auto_0_round_calc(${properties.size}*1px))]`}
    />
  );
};

export default LineAlongBoundary;
