import React from "react";
//import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { Sidebar } from "flowbite-react";
import profile from "../components/images/category/profile.webp";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  // HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const SideBar = () => {
  return (
    <div>
      <Sidebar
        aria-label="Sidebar with content separator example"
        style={{ background: "#f2f5f7" }}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Logo
              href="#"
              img={profile}
              imgAlt=" logo "
              style={{ width: "40px", height: "auto" }}
            >
              <h3 style={{ padding: "20px 0px 0px 10px", height: "auto" }}>
                {" "}
                Flowbite
              </h3>
            </Sidebar.Logo>

            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/uploadbook"
              icon={HiViewBoards}
            >
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            {/* <Sidebar.Item
              href="/admin/dashboard/Edit-books/:_id"
              icon={HiShoppingBag}
            >
              Edit-Books
            </Sidebar.Item> */}
            <Sidebar.Item href="/sign-up" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              log out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            {/* <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item> */}
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
