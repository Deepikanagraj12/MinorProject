import Post from "../post/Post";
import "./posts.scss";
import chiragcer from "../../assets/ChiragCer.jpg";


const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Chirag Hira ",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Hey peeps ! thrilled to share that i successfully completed internship at InfoByte",
      img: chiragcer
    },
    {
      id: 2,
      name: "Deepika",
      userId: 2,
      profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "hey there! here is the update regarding job openings. Make sure to check them all and apply according to eligibility criteria mentioned there.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
