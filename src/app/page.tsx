import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >

      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner fullname = "Buratsakon Srikhaw" studentId ="660612150"  />

        {/* Comment Example */}
        {/* {comments.map((comments:any) => (
          <Comment key={comments.likeNum} {...comments} />
        ))} */}

<div className="d-flex gap-2 my-2">
          <img
             src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่าาาาา</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">555 คน</span>
            </div>
          </div>
        </div>
        {/* Reply Example */}
        {/* {comments.map((comments:any) => (
          <Reply key={comments.replies} {...comments} />
        ))} */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงด้วยค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <span className="text-muted"></span>
            </div>
          </div>
        </div>


        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/popcat.png"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Catmeme</span>
            <br />
            <span>ลิซ่าาาาาาา Rockstar</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">20 คน</span>
            </div>
          </div>
        </div>


        <div className="d-flex gap-2 my-2">
          <img
             src="/profileImages/charliebrown.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>บ้าไปแล้ว... หรือเปล่า?</span>
            <div className="d-flex align-items-center gap-1">
              
              <span className="text-muted"></span>
            </div>
          </div>
        </div>
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
