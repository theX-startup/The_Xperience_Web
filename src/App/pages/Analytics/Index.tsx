import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { getAnalytics } from "./_request";

type analyticsProps = {
  analytics: {
    impression: number;
    clicks: number;
    bookmarks: number;
    orders: number;
    highestSellingPrice: number;
    lowestSellingPrice: number;
    mostPopularInternship: {
      title: string;
      id: string;
    };
    positiveReviews: number;
    totalEarnings: number;
    negativeReviews: number;
  };
  allRating: [
    {
      rating: number;
      review: string;
      createdAt: string;
      studentName: string;
    }
  ];
};

export const MiniLoader = () => {
  return (
    <div className="min-h-[80px] w-full flex items-center justify-center">
      <TailSpin visible={true} color="#0000ff" height={30} width={30} />
    </div>
  );
};

const Analytics = () => {
  const dispatch = useDispatch<any>();
  const loading = useSelector(
    (state: any) => state.professional.analyticsLoading
  );
  const error = useSelector((state: any) => state.professional.analyticsError);
  const Analytics: analyticsProps = useSelector(
    (state: any) => state.professional.Analytics
  );

  useEffect(() => {
    dispatch(getAnalytics());
  }, []);
  return (
    <div>
      <h1 className="text-primary">Analytics</h1>
      <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-2 min-h-[100px]">
        {loading ? (
          <MiniLoader />
        ) : error ? (
          <div className="flex items-center justify-center text_sm">
            {error}
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-5 grid-cols-2 text-center text_sm">
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Impression</span>
              <span>{Analytics?.analytics?.impression}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Clicks</span>
              <span>{Analytics?.analytics?.clicks}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Bookmark</span>
              <span>{Analytics?.analytics?.bookmarks}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Earnings</span>
              <span>
                {Analytics?.analytics?.totalEarnings?.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Orders</span>
              <span>{Analytics?.analytics?.orders}</span>
            </div>
          </div>
        )}
      </div>
      <div className="dark:bg-gray-800 bg-gray-300 w-full rounded p-4 mt-2 min-h-[100px]">
        {loading ? (
          <MiniLoader />
        ) : error ? (
          <div className="flex items-center justify-center text_sm">
            {error}
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-5 grid-cols-2 text-center text_sm">
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Highest selling price</span>
              <span>
                {Analytics?.analytics?.highestSellingPrice ? Analytics?.analytics?.highestSellingPrice?.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )
                  : (0).toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Lowest selling price</span>
              <span>
                {Analytics?.analytics?.lowestSellingPrice
                  ? Analytics?.analytics?.lowestSellingPrice.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )
                  : (0).toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Most popular</span>
              <span className="overflow-hidden max-w-[100%] text-nowrap">
                {
                  Analytics?.analytics?.mostPopularInternship.title.split(
                    ":"
                  )[0]
                }
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Positive Reviews</span>
              <span>{Analytics?.analytics?.positiveReviews}</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="text-primary">Negative Reviews</span>
              <span>{Analytics?.analytics?.negativeReviews}</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 text_sm">
        <div className="flex justify-between ">
          <h1>Reviews</h1>
          <Link to={""} className="text-primary">
            View all
          </Link>
        </div>
        {loading ? (
          <MiniLoader />
        ) : error ? (
          <div className="flex items-center justify-center text_sm min-h-[100px]">
            <h1> {error}</h1>
          </div>
        ) : (
          <div className="flex flex-col gap-5 mt-5 ">
            {Analytics.allRating ? (
              Analytics.allRating.map((review) => (
                <div className="flex flex-col gap-5">
                  <h4>"{review.review}"</h4>
                  <span className="font-extrabold">{review.studentName}</span>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center w-full">
                <h1>No reviews</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
