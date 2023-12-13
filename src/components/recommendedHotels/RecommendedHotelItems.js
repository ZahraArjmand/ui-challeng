import rateOne from "../../assets/images/Path 17364.png";

const RecommendedHotelItems = (props) => {
  return (
    <div
      className="bg-white inline-block flex-none mx-2 md:mx-0"
      style={{ width: "280px" }}
    >
      <img src={props.item.src} alt={props.item.hotelName} />
      <div className="p-4">
        <p className="text-base  mb-4">{props.item.hotelName}</p>
        <div className="flex gap-x-1">
          {new Array(4).fill("dummy").map(() => (
            <img src={rateOne} alt="star"></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedHotelItems;
