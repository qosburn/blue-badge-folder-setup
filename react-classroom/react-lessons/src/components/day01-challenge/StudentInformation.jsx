function StudentInformation(props) {
  const { studentName, grade, subject } = props;

  return (
    <di>
      <p>Student's Name: {studentName}</p>
      <p>Current Grade: {grade}</p>
      <p> Subject: {subject}</p>
    </di>
  );
}
export default StudentInformation;
