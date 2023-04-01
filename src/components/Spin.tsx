
export const Spin = (Loader: any) => {
  return (
    <div
      style={{ position: "absolute", left: "50%", top: "50%" }}
    >
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={false}
      />
    </div>
  );
};

