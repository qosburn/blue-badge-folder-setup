function Footer() {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  function myFunction() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById('demo').innerHTML = n;
  }
  return (
    <di>
      <p className="m-0 text-center text-white">
        Copyright &copy;
        <span> {getYear()} YourName </span>
        <br /> Made with ❤️ by YourName 🔥
      </p>
      <button onclick="myFunction()">Try it</button>
      <p id="demo"></p>
    </di>
  );
}
export default Footer;
