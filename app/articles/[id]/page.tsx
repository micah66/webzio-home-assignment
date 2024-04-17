import Link from 'next/link';

import Sentiment from '@/app/articles/Tag';
import { CANDIDATES, QUERIES } from '@/constants/candidates';
import { COLORS } from '@/constants/colors';
import { API_URL } from '@/constants/urls';
import { parseQuery } from '@/utils/parseQuery';

import { TArticleReturnData, getData } from '../Candidate';

type ArticleProps = {
  params: { id: string };
  searchParams: { candidate: (typeof CANDIDATES)[keyof typeof CANDIDATES] };
};

export default async function Article({ params, searchParams }: ArticleProps) {
  let posts = (
    await getData<TArticleReturnData>(
      `${API_URL}?token=${process.env.API_TOKEN}&q=${parseQuery(
        QUERIES[searchParams.candidate]
      )}`
    )
  ).posts;

  let article = posts.find((post) => post.uuid === params.id);

  if (!article)
    return (
      <>
        <Link href={'/articles'}>Back to articles</Link>
        <p>Something went wrong...</p>
      </>
    );

  return (
    <>
      <Link href={'/articles'}>Back to articles</Link>
      <div className="mt-12">
        <div
          className="border border-black rounded-md shadow-lg h-[40vh]"
          style={{
            backgroundImage: `url(${article.thread.main_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundColor: '#858383',
          }}
        />
        <div className="flex items-center justify-between">
          <Sentiment
            text={article.sentiment}
            size="lg"
            className={`${COLORS.bg[article.sentiment === 'positive' ? 'green' : 'red']}`}
          />
          <Link href={article.url} className="hover:text-blue-500">
            Click here to go to the article
          </Link>
        </div>
        <h1
          className="text-black font-bold text-lg"
          dangerouslySetInnerHTML={{ __html: article.highlightTitle }}
        ></h1>
        <span>{article.author}</span>
        <p>{article.text}</p>
      </div>
    </>
  );
}
