interface ICreatePostDTO {
  title: string;
  subtitle: string;
  content: string;
  bannerUrl: string;
  slug: string;
  authorId: string;
  categoryId: string;
  isDraft?: boolean;
}

export { ICreatePostDTO };

