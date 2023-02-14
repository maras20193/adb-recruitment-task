import * as S from "./PostItem.styled";

type PostItemProps = {
  post: Post;
};

export const PostItem = ({ post }: PostItemProps) => (
  <S.ItemWrapper>
    <p>{post.title}</p>
    <p>{post.body}</p>
  </S.ItemWrapper>
);
