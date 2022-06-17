function navbar() {
  return ` <div id="navbar">
  <div> <strong>home</strong></div>
      <form id="search">
<input type="text" placeholder="Search" />
<button type="submit" id="submit">Search</button>
</form>
  <div id="box3">
      <div><a href="receipe.html">get receipe of the day</a></div>
      <div><a href="random.html">Random receipes</a></div>
      <div><a href="signup.html">signup</a></div>
      <div><a href="signin.html">login</a></div>
  </div>
</div>`;
}

export default navbar;
