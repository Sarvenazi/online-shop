import * as Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "12%", marginBottom: "16%" }}>
      <Loader.RotatingLines color="#42a5f5" height={100} width={70} />
    </div>
  );
}
