import Tag from '@/app/articles/Tag';
import { COLORS } from '@/constants/colors';

import textStyles from './articles.module.css';

export type TArticle = {
  thread: {
    main_image: string;
  } & Record<string, unknown>;
  uuid: string;
  url: string;
  sentiment: 'positive' | 'negative';
  highlightTitle: string;
  text: string;
  author: string;
} & Record<string, unknown>;

export default function ArticleCard({ article }: { article: TArticle }) {
  return (
    <div
      className="flex flex-col justify-between aspect-[4/3] border border-black rounded-md shadow-lg"
      style={{
        backgroundImage: `url(${article.thread.main_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#858383',
      }}
    >
      <Tag
        text={`${article.sentiment}`}
        size="sm"
        className={`${COLORS.bg[article.sentiment === 'positive' ? 'green' : 'red']}`}
      />
      <div className={`${textStyles.textContainer} bg-[rgb(255_255_255_/_70%)]`}>
        <p
          className="text-black truncate hover:overflow-visible hover:whitespace-normal"
          // allows us to make use of the html tags provided in the highlightTitle, i.e. <em> tags
          dangerouslySetInnerHTML={{ __html: article.highlightTitle }}
        ></p>
        <p className="text-black indent-1 truncate">- {article.author}</p>
      </div>
    </div>
  );
}
