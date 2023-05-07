
export default function Course({ course }) {
  return (
    <BaseLayout>
      <div className="py-6">
        <CourseHero
          hasOwner={!!ownedCourse.data}
          title={course.title}
          description={course.description}
          image={course.coverImage}
          onChange={playerChange}
        />
      </div>
      <Keypoints points={course.wsl} />
      {courseState && (
        <div className="max-w-5xl mx-auto">
          {courseState === "purchased" && (
            <Message type="warning">
              Course is purchased and waiting for the activation. Process can
              take up to 24 hours.
              <i className="block font-normal">
                In case of any questions, please contact info@eincode.com
              </i>
            </Message>
          )}
          {courseState === "activated" && (
            <Message type="success">
              Eincode wishes you happy watching of the course.
            </Message>
          )}
          {courseState === "deactivated" && (
            <Message type="danger">
              Course has been deactivated, due the incorrect purchase data. The
              functionality to watch the course has been temporaly disabled.
              <i className="block font-normal">
                Please contact info@eincode.com
              </i>
            </Message>
          )}
        </div>
      )}
      <Curriculum
        isLoading={isLoading}
        locked={isLocked}
        courseState={courseState}
        onChange={playerChange}
      />
      <Modal />
    
    </BaseLayout>
  );
}



