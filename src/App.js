import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

export function MyApp() {
  return (
    <>
      <h1>welcome to my react app</h1>
      <MyButton />
      <br></br>
      <img className="avtar" src="#" alt="avtar" />
    </>
  );
}

const user = {
  name: "alu",
  imageUrl:
    "https://scontent.cdninstagram.com/v/t51.2885-19/276086747_544735596870900_4344961830561948454_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=O9a8ldQigKkAX_8UpoQ&_nc_oc=AQldQHTLRvBWqnK157__ZMLfOXpbJb3MpIJyBUUDbkW1plCqeEkICEEi5PiAEuipABSPTiyaIstPDcfvbSWRhx7O&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfBEHbqHdxzwcTrxT7En_NA_tqyD9KclkiGtaZeHrCPj4Q&oe=65521E8C",
  imageSize: 90,
};

export function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const component = ({ isLoggedIn }) => {
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
};
export default component;

function MyButton() {
  function handleClick() {
    alert("you clicked me!");
  }

  return <button onClick={handleClick}>click me</button>;
}
export MyButton;

import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1> Counters that count separate</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>clicked {count} times!</button>;
}
