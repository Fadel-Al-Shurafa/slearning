import { useSession, signIn, signOut, getSession } from "next-auth/react";
import ProfileStyle from "../styles/style.module.css";
import BTNStyles from "../styles/Admin.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [EditName, setEditName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const onSubmitEditName = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const userEmail = session.user?.email;
      const body = { userEmail, EditName };
      await fetch("./api/EditName", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitDeleteAccount = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const userEmail = session.user?.email;
      const body = { userEmail };
      await fetch("./api/Admin/Delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (session) {
    return (
      <div className={ProfileStyle.ProfileBody}>
        <div className={ProfileStyle.Space400}></div>
        <div className={BTNStyles.body}>
          <div className={ProfileStyle.ProfileBcackGround} key={Profile.id}>
            <div className={ProfileStyle.containerFlexSpecific}>
              <div className={ProfileStyle.FlexSpecific30}>
                <div className={ProfileStyle.proileMargin}>
                  <div>
                    <div className="d-flex justify-content-center">
                      <img
                        className={ProfileStyle.ProileIMG}
                        src={session?.user.image}
                        alt="Profile picture"
                      />
                    </div>
                  </div>
                  <div className={ProfileStyle.proileMargin}>
                    <h3 className="text-center">{session?.user.name} </h3>
                  </div>
                </div>
              </div>
              <div className={ProfileStyle.FlexSpecific60}>
                <div className={BTNStyles.containerCenter}>
                  <div className={BTNStyles.containerSpace}>
                    <h1 className="text-center">User Profile</h1>
                  </div>

                  <div className={BTNStyles.containerSpace}>
                    <form onSubmit={onSubmitEditName}>
                      <h3 className="text-left">
                        User Name: {session?.user.name}
                      </h3>
                      <div className={ProfileStyle.PaddingLR60}>
                        <input
                          className={ProfileStyle.BTNnoneWightB}
                          type="text"
                          id="TextQ"
                          name="TextQ"
                          placeholder="Edit your name"
                          maxLength={100}
                          value={EditName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                        <div className={ProfileStyle.BorderText}></div>

                        <div className={BTNStyles.DivBTN}>
                          <button className={BTNStyles.BTNaNone}>Edit </button>{" "}
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className={BTNStyles.containerSpace}>
                    <form onSubmit={onSubmitDeleteAccount}>
                      <h3 className="text-left">Delete Account</h3>
                      <div>
                        <div className={BTNStyles.DivBTN}>
                          <button type="submit" className={BTNStyles.BTNaNone}>
                            Delete{" "}
                          </button>{" "}
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className={BTNStyles.containerSpace}>
                    <form onSubmit={onSubmitDeleteAccount}>
                      <h3 className="text-left">Sign out</h3>
                      <div>
                        <div className={BTNStyles.DivBTN}>
                          <button
                            onClick={() => signOut()}
                            className={BTNStyles.BTNaNone}
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={ProfileStyle.Space400}></div>
      </div>
    );
  }

  return (
    <div className={ProfileStyle.body}>
      <div className={ProfileStyle.Space200}></div>

      <h1 className="text-center">You are not login </h1>
      <div className={ProfileStyle.Space100}></div>
      <div className={"text-center"}>
        <form onSubmit={handleSubmit}>
          <button className={ProfileStyle.BTNaNone}>Go to Home Page </button>{" "}
        </form>
      </div>

      <div className={ProfileStyle.Space400}></div>
    </div>
  );
};

export default Profile;
