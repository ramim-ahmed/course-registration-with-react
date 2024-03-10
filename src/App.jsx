import { useEffect, useState } from "react";
import Course from "./components/Course";
import CourseCart from "./components/CourseCart";
import Courses from "./components/Courses";
import Title from "./components/Title";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
export default function App() {
  const [courses, setCourses] = useState([]);
  const [remainig, setRemaining] = useState(35);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const handleSelectedCourse = (course) => {
    const findCourse = selectedCourse.find((c) => c?.id === course?.id);
    if (!findCourse) {
      if (remainig >= course?.credit) {
        setSelectedCourse([...selectedCourse, course]);
        setRemaining(remainig - course?.credit);
      } else {
        toast.error("course credit limited!!");
      }
    } else {
      toast.error("course already selected!!");
    }
  };
  useEffect(() => {
    const totalPrice = selectedCourse?.reduce((total, current) => {
      return total + current?.price;
    }, 0);
    const totalCredit = selectedCourse?.reduce((total, current) => {
      return total + current?.credit;
    }, 0);
    setTotalPrice(totalPrice);
    setTotalCreditHour(totalCredit);
  }, [selectedCourse]);
  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch("/db/courses.json");
      const data = await res.json();
      setCourses(data?.courses);
    };
    fetchCourse();
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <Title title={"Course Registration"} />
      <div className="grid grid-cols-12 gap-x-4">
        <div className="lg:col-span-9 col-span-12">
          <Courses>
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2"
            >
              {!courses.length && <h1>loading......</h1>}
              {courses?.map((course) => (
                <Course
                  key={course.id}
                  course={course}
                  handleSelectedCourse={handleSelectedCourse}
                />
              ))}
            </motion.div>
          </Courses>
        </div>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="lg:col-span-3 col-span-12"
        >
          <CourseCart
            remainig={remainig}
            totalCreditHour={totalCreditHour}
            totalPrice={totalPrice}
            selectedCourse={selectedCourse}
          />
        </motion.div>
      </div>
      <Toaster position="top-center" />
    </main>
  );
}
