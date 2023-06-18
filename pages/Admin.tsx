import { useSession, getSession } from "next-auth/react";
import { Role } from "@prisma/client";
import AdminSyleGenral from "../styles/style.module.css";
import AdminStyles from "../styles/Admin.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Admin() {
  const { data: session } = useSession();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [MakeAdmin, setMakeAdmin] = useState("");
  const [RemoveAdmin, setRemoveAdmin] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onSubmitMakeAdmin = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const body = { MakeAdmin };
      await fetch("./api/Admin/Add", {
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

  const onSubmitRemoveAdmin = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const body = { RemoveAdmin };
      await fetch("./api/Admin/Add", {
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

  
  const onSubmitBanUser = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
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

  return (
    <div className={AdminSyleGenral.HomeBody}>
      <div className={AdminSyleGenral.Space200}></div>


      {session?.user.role === Role.ADMIN && (
        <div className={AdminStyles.BackgroundAdmin}>
          <div className={AdminSyleGenral.Space200}></div>
          <h1 className="text-center">
            You are an administrator! {session?.user.id}{" "}
          </h1>
          <div className={AdminSyleGenral.Space100}></div>
          <div className={AdminStyles.containerCenter}>
            <div className={AdminStyles.containerSpace}>
              <div>
                <form onSubmit={onSubmitMakeAdmin}>
                  <h3 htmlFor="">Make an Admin</h3>
                  <div className={AdminSyleGenral.PaddingLR60}>
                    <input
                      className={AdminSyleGenral.BTNnoneWightB}
                      type="email"
                      placeholder="Admin email?"
                      maxLength={100}
                      value={MakeAdmin}
                      onChange={(e) => setMakeAdmin(e.target.value)}
                      required
                    />
                    <div className={AdminSyleGenral.BorderText}></div>
                    <div className={AdminStyles.DivBTN}>
                      <button className={AdminStyles.BTNaNone}>Add </button>{" "}
                    </div>
                  </div>
                </form>
              </div>
              <div className={AdminStyles.containerSpace}>
                <form onSubmit={onSubmitRemoveAdmin}>
                  <h3 htmlFor="">Remove Admin</h3>
                  <div className={AdminSyleGenral.PaddingLR60}>
                    <input
                      className={AdminSyleGenral.BTNnoneWightB}
                      type="email"
                      placeholder="Admin email?"
                      maxLength={100}
                      value={RemoveAdmin}
                      onChange={(e) => setRemoveAdmin(e.target.value)}
                      required
                    />
                    <div className={AdminSyleGenral.BorderText}></div>
                    <div className={AdminStyles.DivBTN}>
                      <button className={AdminStyles.BTNaNone}>Delete </button>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className={AdminStyles.containerSpace}>
              <form onSubmit={onSubmitBanUser}>
                <h3 htmlFor="">Ban user</h3>
                <div className={AdminSyleGenral.PaddingLR60}>
                  <input
                    className={AdminSyleGenral.BTNnoneWightB}
                    type="email"
                    maxLength={100}
                    placeholder="User email?"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                  <div className={AdminSyleGenral.BorderText}></div>
                  <div className={AdminStyles.DivBTN}>
                    <button className={AdminStyles.BTNaNone}>Ban </button>{" "}
                  </div>
                </div>
              </form>
            </div>
            <h4 className="text-center">
              <Link href="./PostSection/PostQA"> go to post management </Link>
            </h4>
          </div>
        </div>
      )}


      <div className={AdminSyleGenral.Space200}></div>
      <div>
        <h1 className="text-center">Welcome, {session?.user.name}!</h1>
      </div>
      <div className={AdminSyleGenral.Space400}></div>
    </div>
  );
}
