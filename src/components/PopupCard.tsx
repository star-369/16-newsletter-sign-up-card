import CheckMark from "../assets/images/icon-success.svg";

interface Props {
  onClose: () => void;
  email: string;
}

export default function PopupCard({ email, onClose }: Props) {
  return (
    <>
      {/* <!-- Success message start --> */}
      <section className="popup-card">
        <img src={CheckMark} alt="" />
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <span>{email}</span> Please open
          it and click the button inside to confirm your subscription.
        </p>
        <button onClick={onClose} type="submit">
          Dismiss message
        </button>
      </section>

      {/* <!-- Success message end --> */}
    </>
  );
}
