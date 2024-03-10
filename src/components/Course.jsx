/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function Course(props) {
  const { img, title, price, description, credit } = props?.course || {};
  const { handleSelectedCourse } = props;

  return (
    <Card className="p-2">
      <img className="rounded-md" src={img} alt="" />
      <CardHeader className="p-0 mt-2">
        <CardTitle className="text-lg font-semibold text-[#1C1B1B]">
          {title}
        </CardTitle>
        <CardDescription className="text-sm font-normal text-[#1C1B1B99]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 mt-2 flex justify-between items-center text-[#1C1B1B99]">
        <div>
          <p>price: ${price}</p>
        </div>
        <div>
          <p>credit: {credit}hr</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 mt-2">
        <Button
          onClick={() => handleSelectedCourse(props?.course)}
          className="w-full text-lg font-semibold"
        >
          select
        </Button>
      </CardFooter>
    </Card>
  );
}
