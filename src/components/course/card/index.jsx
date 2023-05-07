import { Link } from "react-router-dom";

export default function Card({ course }) {
  return (
    <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <div className="flex h-full">
        <div className="flex-1 h-full next-image-wrapper">
          <img
            className="h-[20vh] w-[20rem]"
            src={course.coverImage}
            width="200"
            height="230"
            alt={course.title}
          />
        </div>
        <div className="p-8 pb-4 flex-2">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {course.type}
          </div>
          <Link
            to={`/courses/${course._id}`}
            className="h-12 block mt-1 text-sm sm:text-lg xs:text-xl leading-tight font-medium text-black hover:underline"
          >
            {course.title}
          </Link>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            {course.description.substring(0, 70)}...
          </p>
        </div>
      </div>
    </div>
  );
}
