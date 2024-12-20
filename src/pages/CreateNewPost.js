import React , {useState} from "react";
import swal from "sweetalert";
import Header from "../components/Header";

function CreateNewPost() {

      const [postContent,setPostContent] = useState("");
    
      const submitHandler = (e) => {
        e.preventDefault();
        const newPost = {
          content: postContent,
        };
    
        // fetch("http://localhost:4000/posts/create-new-post", {
        fetch(`${process.env.REACT_APP_BASE_API}/posts/create-new-post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost)
        })
          .then((res) => {
            if (!res.ok) throw new Error('fail to create new post !');
            return res.json();
          })
          .then(() => 
          swal({
            title: "پست جدید با موفقیت ایجاد شد",
            icon: "success",
            buttons: "باشه",
          }))
          .catch(() => {
            swal({
              title: "خطایی در ایجاد پست جدید رخ داده است",
              icon: "error",
              buttons: "تلاش دوباره",
            });
          })
      }
    
    
      return (
          <>
            <Header />
            <hr />
            <form onSubmit={submitHandler}>
    
              <div>
                <input
                  type="text"
                  name="content"
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>

              <button type="submit">
                ایجاد پست جدید
              </button>

          </form>
          </>
          
       
      );
}

export default CreateNewPost;
