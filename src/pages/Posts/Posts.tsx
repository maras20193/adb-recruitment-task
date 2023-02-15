import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fadeVariant } from "../../animations";
import { getPosts } from "../../api/posts";
import { List, Loader, PostItem } from "../../components";
import * as S from "./Posts.styled";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams();

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
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
      toast.error("Error has occurred, please try again later.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <S.Wrapper animate="onscreen" initial="offscreen" variants={fadeVariant}>
      <List
        title={
          params.userId
            ? `User ${params.userId}: (${posts.length})`
            : `ALL Posts List (${posts.length})`
        }
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </List>
      {isLoading && <Loader />}
    </S.Wrapper>
  );
};
