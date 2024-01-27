import { useForm } from "react-hook-form";

export type Input = {
  email: string;
};

interface Props {
  onClose: () => void;
  onSubmit: (data: Input) => void;
}

export default function FormCard({ onClose, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const submitted = (data: Input) => {
    onSubmit(data);
    onClose();
  };

  return (
    <>
      {/* <!-- Sign-up form start --> */}
      <main className="form-newsletter">
        <section className="form-newsletter__illustration"></section>
        <section className="form-newsletter__contents">
          <h1>Stay updated!</h1>
          <p className="form-newsletter__contents__description">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="form-newsletter__contents__list">
            <p>Product discovery and building what matters</p>
            <p>Measuring to ensure updates are a success</p>
            <p>And much more!</p>
          </div>
          <form onSubmit={handleSubmit(submitted)}>
            <div>
              <span>
                <p>Email address</p>
                {errors.email && <p className="danger">Valid email required</p>}
              </span>
              <input
                placeholder="email@company.com"
                type="text"
                id="email"
                className={errors.email ? "danger input-danger" : " "}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <label htmlFor="email"></label>
            </div>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </section>
      </main>

      {/* <!-- Sign-up form end --> */}
    </>
  );
}
