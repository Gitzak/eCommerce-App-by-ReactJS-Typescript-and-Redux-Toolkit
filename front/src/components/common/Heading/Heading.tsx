const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mb-3 ms-4" style={{ fontSize: "26px" }}>
      {children}
    </h2>
  );
};

export default Heading;
