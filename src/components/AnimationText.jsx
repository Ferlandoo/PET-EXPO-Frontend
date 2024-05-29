import MovingComponent from "react-moving-text";

const AnimationText = () => {
  return (
    <>
      <h1 className="font-poppins font-semibold text-4xl text-white bg-primary-deep/80 hover:bg-primary-deep transition py-2 px-4 mb-12">
        <MovingComponent
          type="typewriter"
          duration="5000"
          dataText={[
            "BIRDS",
            "DOGS",
            "CATS",
          ]}
        />
      </h1>
    </>
  );
};
export default AnimationText;
