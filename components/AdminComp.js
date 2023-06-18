import Image from "next/image";
import Link from "next/link";
import HeaderStyles from "../styles/Header.module.css";
import React from "react";
import { Role } from "@prisma/client";
import { useSession, getSession } from "next-auth/react";

const AdminComp = () => {
  const { data: session } = useSession();

  return (
    <div className={HeaderStyles.HeaderContainer}>
      <h4>
        {session?.user.role === Role.ADMIN && (
          <Link href="http://localhost:3000/Admin"> Admin Page </Link>
        )}
      </h4>
    </div>
  );
};

export default AdminComp;
