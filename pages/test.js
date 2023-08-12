import Head from "next/head";
import { useState } from "react";
import axios from "axios";


export default function Test() {
  const [candidat, setCandidat] = useState({
    lastName: "",
    firstName: "",
  });
  const [user, setUser] = useState()

  const onSubmit = async (e) => {
    e.preventDefault();
    if (candidat.lastName === "" || candidat.firstName === "")
      return alert("last name or first name is empty");


    let token = 'recaptcha token';

    axios.post('https://crm.ashokseedplant.com/api/ezforms/submit', { token, formData: JSON.stringify(candidat) })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        // error.response.status Check status code
      }).finally(() => {
        //Perform action in always
      });


  };
  return (
    <div>
      <Head>
        <title> Next.js submit form</title>
      </Head>

      <form
        onSubmit={onSubmit}
        className="w-1/3 justify-center border-2 flex flex-col gap-4 m-4 p-2"

      >
        <label htmlFor="Last name">Last name</label>
        <input
          className="border-2 border-gray-200  p-2"
          onChange={() => {
            setCandidat({ ...candidat, lastName: event.target.value });
          }}
        ></input>

        <label htmlFor="First name">First name</label>
        <input
          className="border-2 border-gray-200  p-2"
          onChange={() => {
            setCandidat({ ...candidat, firstName: event.target.value });
          }}
        ></input>

        <button
          className="bg-black text-white text-sm font-medium p-2 rounded "
          type="submit"
        >
          <>Submit</>
        </button>
      </form>
      <div className="p-2">{user ? 'user is : ' + user : ''}</div>
    </div>
  );
}