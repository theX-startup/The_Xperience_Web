import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review:
      "I had an amazing experience with this company! The internship was top-notch, and the task exceeded my expectations. I highly recommend them to anyone looking for quality products design internship.",
  },
  {
    id: 2,
    name: "Jane Doe",
    rating: 4,
    review:
      "I had an amazing experience with this company! The internship was top-notch, and the task exceeded my expectations. I highly recommend them to anyone looking for quality products design internship.",
  },
  {
    id: 3,
    name: "John Doe",
    rating: 3,
    review:
      "I had an amazing experience with this company! The internship was top-notch, and the task exceeded my expectations. I highly recommend them to anyone looking for quality products design internship.",
  },
  {
    id: 4,
    name: "John Doe",
    rating: 2,
    review:
      "I had an amazing experience with this company! The internship was top-notch, and the task exceeded my expectations. I highly recommend them to anyone looking for quality products design internship.",
  },
  {
    id: 5,
    name: "John Doe",
    rating: 1,
    review:
      "I had an amazing experience with this company! The internship was top-notch, and the task exceeded my expectations. I highly recommend them to anyone looking for quality products design internship.",
  },
];

const Analytics = () => {
  return (
    <div>
      <h1 className="text-primary">Analytics</h1>
      <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-2 grid lg:grid-cols-5 md:grid-cols-4 gap-5 grid-cols-2 text-center text_sm">
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Impression</span>
          <span>800,000</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Clicks</span>
          <span>200,000</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Bookmark</span>
          <span>60</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Earnings</span>
          <span>1,600,000</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Orders</span>
          <span>100</span>
        </div>
      </div>
      <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-3 grid lg:grid-cols-5 md:grid-cols-4 gap-5 grid-cols-2 text-center text_sm">
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Highest selling price</span>
          <span>10,000</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Lowest selling price</span>
          <span>3500</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Most popular</span>
          <span>Product Design</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Positive Reviews</span>
          <span>500</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-primary">Negative Reviews</span>
          <span>234</span>
        </div>
      </div>
      <div className="mt-5 text_sm">
        <div className="flex justify-between ">
          <h1>Reviews</h1>
          <Link to={""} className="text-primary">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5 grid-cols-1">
          {reviews.map((review) => (
            <div className="flex flex-col gap-5">
              <h4>"{review.review}"</h4>
              <span className="font-extrabold">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
