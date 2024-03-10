import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
export default function CourseCart({
  remainig,
  selectedCourse,
  totalCreditHour,
  totalPrice,
}) {
  return (
    <div className="bg-white p-2 rounded-md space-y-3">
      <div>
        <p className="text-lg font-medium text-blue-500">
          Credit Hour Remaining {remainig} hr
        </p>
      </div>
      <div className="border-b"></div>
      <div>
        <p className="font-bold text-xl">Course Name</p>
        <div className="mt-2">
          {!selectedCourse.length && <h1>empty!!</h1>}
          {selectedCourse?.map((courseName, index) => (
            <motion.p
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              key={courseName?.id}
            >
              {" "}
              {index + 1} {courseName?.title}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="border-b"></div>
      <div>
        <p className="text-base text-[#1C1B1BCC]font-medium">
          Total Credit Hour : {totalCreditHour}
        </p>
      </div>
      <div className="border-b"></div>
      <div>
        <p className="text-base text-[#1C1B1BCC]font-medium">
          Total Price : {totalPrice} USD
        </p>
      </div>
    </div>
  );
}
