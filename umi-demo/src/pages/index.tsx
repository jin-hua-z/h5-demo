import yayJpg from "../assets/yay.jpg";
import idx from "../utils/main.js.js";
export default function HomePage() {
  console.log("idx", idx);

  idx.ddGetPhoneInfo();
  return (
    <div>
      <h2
        onClick={() => {
          idx.ddAlert("Welcome to umi");
        }}
      >
        Yay! Welcome to umi!
      </h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
