import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../api/posts";
import { List, PostItem } from "../../components";
import * as S from "./Posts.styled";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const params = useParams();

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      if (params.userId) {
        const filterPosts = response.data.filter(
          (post) => post.userId === Number(params.userId)
        );
        setPosts(filterPosts);
      } else {
        setPosts(response.data);
      }
    } catch (err) {
      console.log("ERRORR");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <S.Wrapper>
      <List
        title={
          params.userId
            ? `User ${params.userId}: (${posts.length})`
            : `ALL Posts List (${posts.length})`
        }
      >
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </List>
    </S.Wrapper>
  );
};
