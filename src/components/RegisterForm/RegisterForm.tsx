export default function RegisterForm() {
  return (
    <form action="submit" className="form">
      <input className="form-email" type="text" placeholder="Your email" />
      <input
        className="form-password"
        type="password"
        placeholder="Your password"
      />
      <input
        className="form-check-password"
        type="password"
        placeholder="Type your password again"
      />
      <button className="form-button" type="submit">
        Register
      </button>
    </form>
  );
}
