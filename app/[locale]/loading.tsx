export default function Loading() {
  return (
    <div className="text-center text-xl text-white  p-20 mt-60 top-0 bottom-0 left-0 right-0 w-full fixed">
      <div className={"flex mx-auto mr-5 items-center justify-center"}>
        <lottie-player
          autoplay="true"
          loop="true"
          mode="normal"
          src={
            "https://lottie.host/374a3788-53fe-437c-a806-968d1201084c/WMcy67dPfZ.json"
          }
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      Loading ...
    </div>
  );
}
