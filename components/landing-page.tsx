import { HomeCarousel } from "./carousel/home-carousel";
import { CategorySlider } from "./category/category-slider";
import { UserNavbar } from "./navbar/user-navbar";
import { SlidingProduct } from "./sliders/sliding-products";
import { Separator } from "./ui/separator";

export const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <UserNavbar />
      <Separator />
      <CategorySlider />
      <HomeCarousel />
      <SlidingProduct />
    </div>
  );
};
