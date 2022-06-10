// USING A FUNCTION WE CAN RETURN ANYTHING
// RETURNING NAVBAR
// WHENEVER RETURN HTML TAG RETURN WITH BACKTICK
function navbar() {
  return `<h3><a href="/">Home</a></h3>
    <div id="options">
        <h3><a href="electronics.html">Electronics</a></h3>
        <h3><a href="jewelery.html ">Jewelery</a></h3>
        <h3><a href="/">Login</a></h3>
        <h3><a href="/">Signup</a></h3>
    </div>`;
};

// 
export default navbar;